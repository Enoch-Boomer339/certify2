import React, { useState } from 'react'
import CertificatePdf from './CertificatePdf'
import { PDFViewer, PDFDownloadLink, Font, StyleSheet } from '@react-pdf/renderer'
import { useLocation, useNavigate } from 'react-router-dom'
import { pdf } from '@react-pdf/renderer'
import { uploadToIPFS, storeOnBlockchain } from '../service/CertificateService'

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const stylez = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 14,
    backgroundColor: "#FFFDF5",
    height: "100%",
    textAlign: "center"
  },
  watermark: {
    position: "absolute",
    width: "50%",
    height: "50%",
    alignSelf: "center",
    borderRadius: 20,
    opacity: 0.1,
    zIndex: -1
  },
  border: {
    border: "5pt solid #006400",
    padding: 25,
    borderRadius: 20,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    alignSelf: "center",
    borderRadius: 60
  },
  crest: {
    width: 60,
    height: 60,
    borderRadius: 40
  },
  title: {
    fontSize: 33,
    marginBottom: 17,
    color: "#D4AF37",
    fontFamily: "Oswald"
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    color: "green",
    fontFamily: "Times-Roman"
  },
  classdes: {
    fontSize: 20,
    marginBottom: 15,
    marginRight: 1,
    fontFamily: "Times-Roman",
    color: "#333333"
  },
  classification: {
    fontSize: 30,
    marginLeft: 5,
    color: "#002147",
    fontFamily: "Oswald",
    fontWeight: "bold",
    textTransform: "uppercase",
    lineHeight: 1
  },
  classificationContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 3,
    alignItems: "baseline",
    justifyContent: "center",
    marginBottom: 27
  },
  name: {
    fontSize: 35,
    marginVertical: 10,
    color: "#002147",
    fontFamily: "Oswald",
    fontWeight: "black"
  },
  body: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: "Times-Roman",
    color: "#333333"
  },
  text: {
    fontSize: 21,
    marginBottom: 12,
    color: "#b48c32",
    fontFamily: "Oswald",
    letterSpacing: 1
  },
  officials: {
    borderTop: "1pt solid #000",
    width: 150,
    fontSize: 12,
    textAlign: "center",
    fontFamily: "Times-Roman",
    paddingTop: 5
  },
  date: {
    fontSize: 12,
    color: "grey",
    marginLeft: 6
  },
  official_and_date: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  footer1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  footer2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10
  },
  qrcrest: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20
  },
  qr: {
    width: 120,
    height: 120
  },
  hash: {
    fontSize: 9,
    marginTop: 5,
    fontFamily: "Times-Roman",
    color: "#555555",
    marginBottom: 3
  },

  whereto: {
    fontSize: 9,
    marginTop: 5,
    fontFamily: "Times-Roman",
    color: "#555555",
    textAlign: "center"
  }
})

const PreviewPdf = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [cid, setCid] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState("");
  const [txHash, setTxHash] = useState(null);

  if (!state) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-xl">No certificate data found. Please fill the form first.</p>
      </div>
    );
  }

  const handleIssue = async () => {
    try {
      setIsProcessing(true);

      // Step 1: Generate PDF blob WITHOUT cid (no QR yet)
      setStep("Generating PDF...");
      const pdfBlob = await pdf(
        <CertificatePdf styles={stylez} data={state} cid={null} txHash={txHash} />
      ).toBlob();

      // Step 2: Upload to IPFS
      setStep("Uploading to IPFS...");
      const newCid = await uploadToIPFS(
        pdfBlob,
        `certificate_${state.matricNo}.pdf`
      );
      console.log("IPFS CID:", newCid);

      // Step 3: Store on blockchain
      setStep("Storing on blockchain... (confirm in MetaMask)");
      const hash = await storeOnBlockchain(newCid, state);
      console.log("TX Hash:", hash);

      setTxHash(hash);
      setCid(newCid); // ✅ triggers certificate to re-render with QR + hash

      setStep("");

    } catch (error) {
      console.error("Failed:", error);
      alert(`Error: ${error.message}`);
      setStep("");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className='flex flex-col' style={{ width: '100%', height: '100vh' }}>

      {/* Top bar */}
      <div className='flex justify-between items-center px-6 py-3 bg-[#0d2a4e]'>
        <h2 className='text-[#b48c32] font-semibold'>Certificate Preview</h2>

        <div className='flex gap-4 items-center'>
          {/* Issue button — hidden after blockchain storage */}
          {!cid && (
            <button
              onClick={handleIssue}
              disabled={isProcessing}
              className='bg-[#b48c32] text-white hover:bg-[#caab63] transition-colors duration-200 rounded-md px-6 py-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {isProcessing ? step : "Issue to Blockchain"}
            </button>
          )}

          {/* Download button — appears after blockchain storage */}
          {cid && (
            <PDFDownloadLink
              document={<CertificatePdf styles={stylez} data={state} cid={cid} txHash={txHash} />}
              fileName={`certificate_${state.matricNo}.pdf`}
              className='bg-green-600 text-white hover:bg-green-700 transition-colors duration-200 rounded-md px-6 py-2 font-medium'
            >
              {({ loading }) => loading ? "Preparing..." : "Download Certificate"}
            </PDFDownloadLink>
          )}
        </div>
      </div>

      {/* Success bar */}
    {cid && (
      <div className='flex justify-between items-center px-6 py-2 bg-green-700 text-white text-sm'>
        <span>✅ Certificate issued on Sepolia blockchain</span>
        
        <div className='flex items-center gap-4'>
          
          <a
            href={`https://sepolia.etherscan.io/tx/${txHash}`}
            target="_blank"
            rel="noreferrer"
            className='text-yellow-300 underline'
          >
            View Transaction
          </a>
          <button
            onClick={() => navigate('/admin2', { state: { address: state?.address } })}
            className='bg-white text-green-700 hover:bg-gray-100 transition-colors duration-200 rounded-md px-4 py-1.5 font-medium cursor-pointer'
          >
            Issue Another Certificate
          </button>
        </div>
      </div>
    )}

      {/* PDF Viewer */}
      <div style={{ flex: 1 }}>
        <PDFViewer width='100%' height='100%'>
          <CertificatePdf styles={stylez} data={state} cid={cid} txHash={txHash} />
        </PDFViewer>
      </div>

    </div>
  )
}

export default PreviewPdf;