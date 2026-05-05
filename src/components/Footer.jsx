const Footer = () => {
  return (
    <footer className="bg-[#0d2a4e] text-white mx-3 rounded-2xl mt-10">
      <div className="max-w-6xl mx-auto flex px-4 py-3 text-center flex-row justify-center align-center">
        
        <div className="pr-30">
        <h2 className="text-lg font-semibold">
          Federal University Wukari
        </h2>

        <p style={{color: '#b48c32'}} className="text-sm mt-1">
          Certificate Verification System
        </p>
        </div>

        <div className="mt-3 pr-10 space-x-4">
          For more information visit <a className='text-[#00FF00]' href="https://fuwukari.edu.ng/">➙Federal university wukari</a>
        </div>

        <p className="text-xs pr-10 text-gray-300 mt-4">
          © {new Date().getFullYear()} FUW. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;