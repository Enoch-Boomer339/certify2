import React, { useState } from 'react'
import MetaMaskLogo from '../assets/MetaMask-icon-fox.svg';
import { useNavigate } from 'react-router-dom';

// ✅ Moved outside component — only created once, not on every render
const ADMIN_ADDRESSES = [
  "0xB3D576713C58455711a1940b4e95AfDC57A2a26a",
  "0x5678...yourAdminAddress2"
].map(addr => addr.toLowerCase());

const AdminState1 = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // ✅ Loading state

  const handleConnectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask to continue.");
      return; // ✅ Early return — cleaner than a big if/else
    }

    try {
      setIsLoading(true); // ✅ Show loading

      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });

      const connectedAddress = accounts[0].toLowerCase();

      if (ADMIN_ADDRESSES.includes(connectedAddress)) {
        navigate('/admin2', { state: { address: accounts[0] } });
      } else {
        alert("Access Denied: This wallet is not an authorized admin.");
      }

    } catch (error) {
      // ✅ Distinguish between user rejection and other errors
      if (error.code === 4001) {
        alert("Connection cancelled. Please try again.");
      } else {
        alert("Something went wrong. Please try again.");
        console.error("Connection failed:", error);
      }
    } finally {
      setIsLoading(false); // ✅ Always reset loading
    }
  };

  return (
    <div className='flex justify-center items-center min-w-80 min-h-96'>
      <div className='flex flex-col items-center justify-between'>
        <div>
          <img src={MetaMaskLogo} alt='Metamask logo' className='text-[#b48c32] h-34 w-35 mb-7'/>
        </div>

        <div className='mb-6 text-center'>
          <h2 className='text-4xl font-bold mb-2 text-[#0d2a4e]'>Connect Your Wallet</h2>
          <p>You need an authorized metamask wallet to <br /> issue certificates</p>
        </div>

        <div className='flex flex-col items-center'>
          <button 
            onClick={handleConnectWallet}
            disabled={isLoading} // ✅ Prevent double clicks
            className='text-[#b48c32] hover:text-[#caab63] hover:bg-[#11417cd3] transition-colors duration-200 bg-[#0d2a4e] rounded-md py-3 px-10 font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {isLoading ? "Connecting..." : "Connect MetaMask Wallet"} {/* ✅ Dynamic label */}
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminState1;