import { ethers } from 'ethers';

const PINATA_JWT = import.meta.env.VITE_PINATA_JWT;
const ALCHEMY_RPC = import.meta.env.VITE_ALCHEMY_RPC;
const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;

const CONTRACT_ABI = [
  "function issueCertificate(string memory ipfsHash, string memory studentName, string memory matricNo, string memory programme, string memory classification, string memory dateIssued, string memory graduationDate) public",
  "function verifyCertificate(string memory ipfsHash) public view returns (bool found, string memory studentName, string memory matricNo, string memory programme, string memory classification, string memory dateIssued, string memory graduationDate)"
];

// ✅ ADD THIS
export const uploadToIPFS = async (pdfPaper, filename) => {
  const formData = new FormData();
  formData.append('file', new File([pdfPaper], filename, { type: 'application/pdf' }));
  formData.append('pinataMetadata', JSON.stringify({ name: filename }));
  formData.append('pinataOptions', JSON.stringify({ cidVersion: 1 }));

  const response = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
    method: 'POST',
    headers: { Authorization: `Bearer ${PINATA_JWT}` },
    body: formData
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Pinata upload failed: ${err}`);
  }

  const data = await response.json();
  return data.IpfsHash;
};

// ✅ ADD THIS
export const storeOnBlockchain = async (cid, studentData) => {
  const provider = new ethers.BrowserProvider(window.ethereum);

  await window.ethereum.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: '0xaa36a7' }],
  });

  const signer = await provider.getSigner();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

  const tx = await contract.issueCertificate(
    cid,
    studentData.name,
    studentData.matricNo,
    studentData.programme,
    studentData.classification,
    studentData.dateIssued,
    studentData.graduationDate
  );

  await tx.wait();
  return tx.hash;
};

// ✅ KEEP YOUR EXISTING verifyCertificate
export const verifyCertificate = async (txHash) => {
  try {
    const provider = new ethers.JsonRpcProvider(ALCHEMY_RPC);

    const tx = await provider.getTransaction(txHash);
    console.log("TX found:", tx);
    if (!tx) return null;

    const iface = new ethers.Interface(CONTRACT_ABI);
    const decoded = iface.parseTransaction({ data: tx.data });
    const cid = decoded.args[0];
    console.log("CID decoded:", cid);

    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
    const result = await contract.verifyCertificate(cid);
    console.log("Contract result:", result);

    if (!result.found) return null;

    return {
      found: true,
      studentName: result.studentName,
      matricNo: result.matricNo,
      programme: result.programme,
      classification: result.classification,
      dateIssued: result.dateIssued,
      graduationDate: result.graduationDate
    };
  } catch (err) {
    console.error("verifyCertificate error:", err);
    throw err;
  }
};