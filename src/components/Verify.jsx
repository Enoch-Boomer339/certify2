import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { verifyCertificate } from '../service/CertificateService.js'
import { BrowserMultiFormatReader } from '@zxing/browser'

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
      navigate('/result', { state: result || { found: false } });
    } catch (error) {
      console.error("Verification error:", error);
      navigate('/result', { state: { found: false } }); // ← navigate instead of alert
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartScan = async () => {
    setIsScanning(true);
    try {
      await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      const codeReader = new BrowserMultiFormatReader();
      readerRef.current = codeReader;
      const devices = await BrowserMultiFormatReader.listVideoInputDevices();
      console.log("Devices found:", devices);
      const backCamera = devices.find(d =>
        d.label.toLowerCase().includes('back') ||
        d.label.toLowerCase().includes('rear') ||
        d.label.toLowerCase().includes('environment')
      );
      const deviceId = backCamera?.deviceId || devices[0]?.deviceId;
      if (!deviceId) {
        alert("No camera found.");
        setIsScanning(false);
        return;
      }
      codeReader.decodeFromVideoDevice(deviceId, videoRef.current, async (result, err) => {
        if (result) {
          const txHash = result.getText();
          stopScan();
          setIsLoading(true);
          const verifyResult = await verifyCertificate(txHash);
          navigate('/result', { state: verifyResult || { found: false } });
          setIsLoading(false);
        }
      });
    } catch (err) {
      console.error("Camera error:", err);
      alert("Could not access camera. Please allow camera permission.");
      setIsScanning(false);
    }
  };

  const stopScan = () => {
    if (readerRef.current) {
      readerRef.current.reset();
      readerRef.current = null;
    }
    setIsScanning(false);
  };

  return (
    <div className='px-4 py-6'>
      <form
        className='flex flex-col items-center gap-6'
        onSubmit={handleVerify}
      >
        {/* Header */}
        <div className='flex flex-col items-center gap-3 w-full max-w-lg'>
          <button
            type="button"
            className='text-[#0d2a4e] bg-[#e8f5ee] border border-[#1a7f4b] rounded-xl px-6 py-2 text-sm'
          >
            Certificate Verification
          </button>
          <h1 className='text-xl sm:text-2xl text-[#1a7f4b] font-bold text-center'>
            Verify a Certificate
          </h1>
          <p className='text-sm sm:text-base font-medium text-[#0d2a4e] text-center'>
            Copy and paste the certificate ID located at the bottom of the certificate.
            Note: You don't need an account to verify a certificate.
          </p>
        </div>

        {/* Card */}
        <div className='flex flex-col border bg-[#e8f5ee] border-[#42554bd3] rounded-xl px-4 sm:px-10 py-6 w-full max-w-lg items-center gap-4'>
          <h3 className='self-start font-medium'>Certificate ID:</h3>

          {/* Input + Button */}
          <div className='flex w-full'>
            <input
              type="text"
              placeholder='Paste certificate ID here...'
              className='border p-2 flex-1 rounded-l-md text-sm min-w-0'
              value={certId}
              onChange={(e) => setCertId(e.target.value)}
            />
            <button
              type="submit"
              disabled={isLoading}
              className='bg-[#0d2a4e] text-white px-3 py-2 rounded-r-md disabled:opacity-50 text-sm whitespace-nowrap'
            >
              {isLoading ? "Verifying..." : "Verify ➙"}
            </button>
          </div>

          {/* Divider */}
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
              className='bg-[#1a7f4b] text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors w-full text-sm'
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

          <p className='text-xs text-gray-500 text-center'>
            The ID starts with "0x" and is printed at the bottom of every certificate issued from 2027 onwards.
          </p>
        </div>
      </form>
    </div>
  )
}

export default Verify;