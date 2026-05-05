import React, { useState } from 'react'
import { LockKeyholeOpen } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

const AdminState2 = () => {
    const { state } = useLocation();
    const connectedAddress = state?.address || "No wallet connected";
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [matricNo, setMatricNo] = useState("");
    const [programme, setProgramme] = useState("");
    const [classification, setClassification] = useState("First Class");
    const [graduationDate, setGraduationDate] = useState("");

    const handleDisconnect = () => {
        navigate('/admin');
    };

    const handleIssueCertificate = (e) => {
        e.preventDefault();
        navigate('/previewpdf', {
            state: {
                name,
                matricNo,
                programme,
                classification,
                graduationDate,
                dateIssued: new Date().toLocaleDateString(),
                address: state?.address
            }
        });
    };

  return (
    <div className='px-4 py-6'>
      <div className='flex flex-col justify-center items-center'>
        <form 
            className='flex flex-col justify-center items-center w-full max-w-2xl'
            onSubmit={handleIssueCertificate}
        >
            {/* Wallet connected bar */}
            <div className='flex flex-row mb-3 bg-[#e8f5ee] border border-[#1a7f4b] rounded-xl px-4 py-2 w-full items-center justify-between'>
                <div className='flex flex-row items-center gap-2 min-w-0'>
                    <LockKeyholeOpen className='text-[#b48c32] shrink-0'/>
                    <div className='min-w-0'>
                        <h3 className='text-lg sm:text-2xl font-semibold text-[#1a7f4b]'>Wallet Connected</h3>
                        <p className='text-[#1a7f4b] font-semibold text-xs sm:text-sm truncate'>{connectedAddress}</p>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={handleDisconnect}
                    className='text-red-500 hover:text-white hover:bg-red-500 border border-red-500 transition-colors duration-200 rounded-md px-3 py-1.5 text-sm font-medium cursor-pointer ml-3 shrink-0'
                >
                    Disconnect
                </button>
            </div>

            <div className='w-full'>
                {/* Student name + matric — stack on mobile, row on sm+ */}
                <div className='flex flex-col sm:flex-row justify-between gap-3 mb-3'>
                    <div className='flex flex-col w-full sm:w-auto'>
                        <label className='mb-1'>STUDENT NAME</label>
                        <input type="text" placeholder='Enoch Methuselah Ezekiel' className='border w-full sm:w-72 p-2 rounded-md' value={name} onChange={(e) => setName(e.target.value)} required/>
                    </div>
                    <div className='flex flex-col w-full sm:w-auto'>
                        <label className='mb-1'>MATRIC NUMBER</label>
                        <input type="text" placeholder='CIS/CSC/22/041' className='border w-full sm:w-52 p-2 rounded-md' value={matricNo} onChange={(e) => setMatricNo(e.target.value)} required/>
                    </div>
                </div>

                <div className='flex flex-col mb-3'>
                    <label className='mb-1'>PROGRAMME</label>
                    <input type="text" placeholder='B.Sc Computer Science' className='border w-full p-2 rounded-md' value={programme} onChange={(e) => setProgramme(e.target.value)} required/>
                </div>

                <div className='flex flex-col justify-center mb-3'>
                    {/* Classification + graduation date — stack on mobile, row on sm+ */}
                    <div className='flex flex-col sm:flex-row gap-4 mb-4'>
                        <div className='flex flex-col w-full sm:w-auto'>
                            <label className='mb-1'>CLASSIFICATION</label>
                            <select className='border w-full sm:w-60 p-2 bg-amber-50 rounded-md' value={classification} onChange={(e) => setClassification(e.target.value)} required>
                                <option value="First Class">First Class</option>
                                <option value="Second Class Upper Division">Second Class Upper Division</option>
                                <option value="Second Class Lower Division">Second Class Lower Division</option>
                                <option value="Third Class Upper Division">Third Class Upper Division</option>
                                <option value="Third Class Lower Division">Third Class Lower Division</option>
                                <option value="Pass">Pass</option>
                            </select>
                        </div>
                        <div className='flex flex-col w-full sm:w-auto'>
                            <label className='mb-1'>DATE OF GRADUATION:</label>
                            <input type="date" className='border w-full sm:w-58 p-2 rounded-md' value={graduationDate} onChange={(e) => setGraduationDate(e.target.value)} required/>
                        </div>
                    </div>

                    <div className='flex flex-row justify-center gap-2 items-center mb-4'>
                        <label>DATE ISSUED:</label>
                        <p className='rounded-md'>{new Date().toLocaleDateString()}</p>
                    </div>

                    <div className='flex justify-center items-center'>
                        <button type="submit" className='text-[#b48c32] hover:text-[#caab63] hover:bg-[#11417cd3] cursor-pointer transition-colors duration-200 bg-[#0d2a4e] rounded-md px-16 py-4 mt-3.5 text-lg w-full sm:w-auto'>
                            Issue Certificate
                        </button>
                    </div>
                </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default AdminState2;