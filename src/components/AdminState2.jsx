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

    // ✅ Disconnect — just send them back to admin1
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
    <div>
      <div className='flex flex-col justify-center items-center'>
        <form 
            className='flex flex-col justify-center items-center'
            onSubmit={handleIssueCertificate}
        >
            <div className='flex flex-row mb-3 bg-[#e8f5ee] border border-[#1a7f4b] rounded-xl px-10 py-2 w-150 items-center justify-between'> {/* ✅ added justify-between */}
                <div className='flex flex-row items-center'>
                    <LockKeyholeOpen className='text-[#b48c32] mt-1.7 mr-2'/>
                    <div>
                        <h3 className='text-2xl font-semibold text-[#1a7f4b]'>Wallet Connected</h3>
                        <p className='text-[#1a7f4b] font-semibold'>{connectedAddress}</p>
                    </div>
                </div>

                {/* ✅ Disconnect button */}
                <button
                    type="button"
                    onClick={handleDisconnect}
                    className='text-red-500 hover:text-white hover:bg-red-500 border border-red-500 transition-colors duration-200 rounded-md px-4 py-2 text-sm font-medium cursor-pointer ml-6'
                >
                    Disconnect
                </button>
            </div>

            {/* rest of form stays the same */}
            <div>
                <div className='flex flex-row justify-between mb-3'>
                    <div className='flex flex-col'>
                        <label>STUDENT NAME</label>
                        <input type="text" placeholder='Enoch Methuselah Ezekiel' className='border w-58 p-2 rounded-md' value={name} onChange={(e) => setName(e.target.value)} required/>
                    </div>
                    <div className='flex flex-col'>
                        <label>MATRIC NUMBER</label>
                        <input type="text" placeholder='CIS/CSC/22/041' className='border w-50 p-2 rounded-md' value={matricNo} onChange={(e) => setMatricNo(e.target.value)} required/>
                    </div>
                </div>

                <div className='flex flex-col justify-between mb-3'>
                    <label>PROGRAMME</label>
                    <input type="text" placeholder='B.Sc Computer Science' className='border p-2 rounded-md' value={programme} onChange={(e) => setProgramme(e.target.value)} required/>
                </div>

                <div className='flex flex-col justify-center mb-3'>
                    <div className='flex flex-row gap-11 mb-4'>
                        <div className='flex flex-col'>
                            <label>CLASSIFICATION</label>
                            <select className='border w-60 p-2 bg-amber-50 rounded-md' value={classification} onChange={(e) => setClassification(e.target.value)} required>
                                <option value="First Class">First Class</option>
                                <option value="Second Class Upper Division">Second Class Upper Division</option>
                                <option value="Second Class Lower Division">Second Class Lower Division</option>
                                <option value="Third Class Upper Division">Third Class Upper Division</option>
                                <option value="Third Class Lower Division">Third Class Lower Division</option>
                                <option value="Pass">Pass</option>
                            </select>
                        </div>
                        <div className='flex flex-col'>
                            <label>DATE OF GRADUATION:</label>
                            <input type="date" className='border w-58 p-2 rounded-md' value={graduationDate} onChange={(e) => setGraduationDate(e.target.value)} required/>
                        </div>
                    </div>

                    <div className='flex flex-row justify-center gap-2 items-center mb-4'>
                        <label>DATE ISSUED:</label>
                        <p className='rounded-md'>{new Date().toLocaleDateString()}</p>
                    </div>

                    <div className='flex justify-center items-center'>
                        <button type="submit" className='text-[#b48c32] hover:text-[#caab63] hover:bg-[#11417cd3] cursor-pointer transition-colors duration-200 bg-[#0d2a4e] rounded-md px-16 py-4 mt-3.5 text-lg'>
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