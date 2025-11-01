import { FaSpider } from "react-icons/fa";
import { GiSpiderWeb } from "react-icons/gi";

const WebDecoration = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-32 h-32 pointer-events-none z-0 opacity-20">
        <GiSpiderWeb className="text-arachne-neonPurple text-[120px] animate-spin-slower" />
      </div>

      <div className="fixed top-0 right-0 w-32 h-32 pointer-events-none z-0 opacity-20 transform -scale-x-100">
        <GiSpiderWeb className="text-arachne-lightPurple text-[120px] animate-spin-slower" />
      </div>

      <div className="fixed bottom-20 left-0 w-24 h-24 pointer-events-none z-0 opacity-15">
        <GiSpiderWeb className="text-arachne-royalPurple text-[90px] animate-spin-slow" />
      </div>

      <div className="fixed bottom-20 right-0 w-24 h-24 pointer-events-none z-0 opacity-15 transform -scale-x-100">
        <GiSpiderWeb className="text-arachne-neonPurple text-[90px] animate-spin-slow" />
      </div>


      <div className="fixed top-1/4 left-10 pointer-events-none z-0 opacity-10">
        <FaSpider className="text-arachne-neonPurple text-4xl animate-float" />
      </div>

      <div className="fixed top-1/3 right-16 pointer-events-none z-0 opacity-10">
        <FaSpider
          className="text-arachne-lightPurple text-3xl animate-float"
          style={{ animationDelay: '0.5s' }}
        />
      </div>

      <div className="fixed top-2/3 left-20 pointer-events-none z-0 opacity-10">
        <FaSpider
          className="text-arachne-silk text-2xl animate-float"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="fixed top-1/2 right-10 pointer-events-none z-0 opacity-10">
        <FaSpider
          className="text-arachne-royalPurple text-3xl animate-float"
          style={{ animationDelay: '1.5s' }}
        />
      </div>


      <svg
        className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#7b2cbf', stopOpacity: 0.3 }} />
            <stop offset="50%" style={{ stopColor: '#9d4edd', stopOpacity: 0.5 }} />
            <stop offset="100%" style={{ stopColor: '#7b2cbf', stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>


        <line x1="10%" y1="10%" x2="90%" y2="20%" stroke="url(#webGradient)" strokeWidth="1" />
        <line x1="90%" y1="10%" x2="10%" y2="30%" stroke="url(#webGradient)" strokeWidth="1" />
        <line x1="10%" y1="50%" x2="90%" y2="60%" stroke="url(#webGradient)" strokeWidth="1" />
        <line x1="90%" y1="70%" x2="10%" y2="80%" stroke="url(#webGradient)" strokeWidth="1" />


        <circle cx="15%" cy="15%" r="3" fill="#9d4edd" opacity="0.4" className="animate-pulse-glow" />
        <circle cx="85%" cy="25%" r="2" fill="#b8b8d1" opacity="0.4" className="animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
        <circle cx="20%" cy="60%" r="2.5" fill="#7b2cbf" opacity="0.4" className="animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <circle cx="80%" cy="75%" r="2" fill="#e0aaff" opacity="0.4" className="animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </svg>


      <div className="fixed inset-0 web-pattern opacity-5 pointer-events-none z-0"></div>
    </>
  );
};

export default WebDecoration;
