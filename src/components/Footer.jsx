const Footer = () => {
  return (
    <footer className="bg-[#0d2a4e] text-white mx-3 rounded-2xl mt-10">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        
        <div>
          <h2 className="text-lg font-semibold">
            Federal University Wukari
          </h2>
          <p style={{color: '#b48c32'}} className="text-sm mt-1">
            Certificate Verification System
          </p>
        </div>

        <div>
          <p className="text-sm">For more information visit</p>
          <a 
            className='text-[#00FF00] text-sm hover:underline' 
            href="https://fuwukari.edu.ng/"
            target="_blank"
            rel="noreferrer"
          >
            ➙ Federal University Wukari
          </a>
        </div>

        <p className="text-xs text-gray-300">
          © {new Date().getFullYear()} FUW. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;