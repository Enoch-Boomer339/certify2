import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { verifyCertificate } from '../service/CertificateService.js'
import { BrowserMultiFormatReader } from '@zxing/browser' // npm install @zxing/browser

const Verify = () => {
  const [certId, setCertId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const videoRef = useRef(null);
  const readerRef = useRef(null);
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!certId.trim()) return;

    try {
      setIsLoading(true);
      const result = await verifyCertificate(certId.trim());

      if (result) {
        navigate('/result', { state: result });
      } else {
        navigate('/result', { state: { found: false } });
      }
    } catch (error) {
      console.error("Verification error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

    const handleStartScan = async () => {
    setIsScanning(true);
    try {
      const codeReader = new BrowserMultiFormatReader();
      readerRef.current = codeReader;

      const devices = await BrowserMultiFormatReader.listVideoInputDevices();
      const deviceId = devices[0]?.deviceId;

      if (!deviceId) {
        alert("No camera found.");
        setIsScanning(false);
        return;
      }

      codeReader.decodeFromVideoDevice(
        deviceId,
        videoRef.current,
        async (result, err) => {
          if (result) {
            const txHash = result.getText(); // ← just get the txHash directly

            stopScan();
            setIsLoading(true);

            const verifyResult = await verifyCertificate(txHash);
            navigate('/result', { state: verifyResult || { found: false } });
            
            setIsLoading(false);
          }
        }
      );
    } catch (err) {
      console.error("Camera error:", err);
      alert("Could not access camera.");
      setIsScanning(false);
    }
  };

  const stopScan = () => {
    if (readerRef.current) {
      readerRef.current.reset();
    }
    setIsScanning(false);
  };

  return (
    <div>
      <form
        className='flex flex-col justify-center items-center mt-5'
        onSubmit={handleVerify}
      >
        <div className='flex flex-col items-center'>
          <div className='mb-5 flex flex-col items-center'>
            <div>
              <button
                type="button"
                className='text-[#0d2a4e] bg-[#e8f5ee] border border-[#1a7f4b] rounded-xl px-10 py-2 w-100 mb-4 p-2'
              >
                Certificate Verification
              </button>
            </div>
            <div>
              <h1 className='text-2xl text-[#1a7f4b] font-bold'>Verify a Certificate</h1>
              <p className='text-xl font-medium text-[#0d2a4e]'>
                Copy and paste the certificate ID located at the bottom of the certificate. <br />
                Note: You don't need an account to verify a certificate.
              </p>
            </div>
          </div>

          <div className='flex flex-col justify-center border bg-[#e8f5ee] border-[#42554bd3] rounded-xl px-10 py-6 w-100 items-center gap-4'>
            <h3 className='self-start'>Certificate ID:</h3>

            <div className='flex w-full'>
              <input
                type="text"
                placeholder='Paste certificate ID here...'
                className='border p-2 flex-1 rounded-l-md'
                value={certId}
                onChange={(e) => setCertId(e.target.value)}
              />
              <button
                type="submit"
                disabled={isLoading}
                className='bg-[#0d2a4e] text-white px-4 py-2 rounded-r-md disabled:opacity-50'
              >
                {isLoading ? "Verifying..." : "Verify ➙"}
              </button>
            </div>

            <div className='flex items-center gap-2 w-full'>
              <hr className='flex-1 border-gray-300' />
              <span className='text-gray-400 text-sm'>or</span>
              <hr className='flex-1 border-gray-300' />
            </div>

            {/* QR Scanner */}
            {!isScanning ? (
              <button
                type="button"
                onClick={handleStartScan}
                className='bg-[#1a7f4b] text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors w-full'
              >
                📷 Scan QR Code
              </button>
            ) : (
              <div className='flex flex-col items-center gap-2 w-full'>
                <video ref={videoRef} className='w-full rounded-md' />
                <button
                  type="button"
                  onClick={stopScan}
                  className='text-red-500 border border-red-500 px-4 py-1 rounded-md text-sm'
                >
                  Cancel Scan
                </button>
              </div>
            )}

            <p className='text-sm text-gray-500 text-center'>
              The ID starts with a letter and is printed at the bottom of every certificate issued from 2027 onwards.
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Verify;