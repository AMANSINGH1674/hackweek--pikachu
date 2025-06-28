import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-yellow-300 to-amber-400 flex items-center justify-center p-8 relative overflow-hidden">
      {/* Electric background effects */}
      <div className="absolute inset-0">
        {/* Lightning bolts */}
        <div className="lightning-bolt-1 absolute top-20 left-16">
          <div className="w-1 h-16 bg-orange-400 transform rotate-12 animate-pulse"></div>
          <div className="w-1 h-12 bg-orange-400 transform rotate-45 -mt-8 ml-2 animate-pulse"></div>
          <div className="w-1 h-10 bg-orange-400 transform -rotate-12 -mt-6 -ml-1 animate-pulse"></div>
        </div>
        
        <div className="lightning-bolt-2 absolute top-32 right-24">
          <div className="w-1 h-20 bg-orange-500 transform -rotate-12 animate-pulse"></div>
          <div className="w-1 h-14 bg-orange-500 transform -rotate-45 -mt-10 -ml-2 animate-pulse"></div>
          <div className="w-1 h-8 bg-orange-500 transform rotate-12 -mt-4 ml-1 animate-pulse"></div>
        </div>

        <div className="lightning-bolt-3 absolute bottom-32 left-32">
          <div className="w-1 h-18 bg-amber-600 transform rotate-25 animate-pulse"></div>
          <div className="w-1 h-12 bg-amber-600 transform rotate-60 -mt-8 ml-3 animate-pulse"></div>
          <div className="w-1 h-10 bg-amber-600 transform -rotate-15 -mt-6 -ml-2 animate-pulse"></div>
        </div>

        {/* Electric sparks/orbs */}
        <div className="absolute top-16 left-1/3 w-4 h-4 bg-orange-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-5 h-5 bg-amber-500 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-16 w-2 h-2 bg-orange-600 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-amber-600 rounded-full animate-pulse"></div>
        
        {/* Electric field lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-40 animate-pulse"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-30 animate-pulse"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-35 animate-pulse"></div>

        {/* Floating yellow orbs for atmosphere */}
        <div className="absolute top-1/3 left-1/5 w-8 h-8 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/5 w-6 h-6 bg-yellow-500 rounded-full opacity-50 animate-bounce"></div>
        <div className="absolute top-2/3 left-2/3 w-4 h-4 bg-amber-400 rounded-full opacity-70 animate-ping"></div>
      </div>

      {/* Pokéball */}
      <div className="pokeball absolute top-16 right-16">
        <style>{`
          .pokeball {
            width: 80px;
            height: 80px;
            position: relative;
            animation: float-pokeball 4s ease-in-out infinite;
          }

          @keyframes float-pokeball {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(5deg); }
          }

          .pokeball-top {
            width: 80px;
            height: 40px;
            background: #ff4444;
            border-radius: 40px 40px 0 0;
            border: 3px solid #000;
            border-bottom: none;
            position: relative;
            z-index: 2;
          }

          .pokeball-bottom {
            width: 80px;
            height: 40px;
            background: #ffffff;
            border-radius: 0 0 40px 40px;
            border: 3px solid #000;
            border-top: none;
            position: relative;
            z-index: 2;
          }

          .pokeball-middle {
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            height: 6px;
            background: #000;
            transform: translateY(-50%);
            z-index: 3;
          }

          .pokeball-center {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 20px;
            height: 20px;
            background: #ffffff;
            border: 3px solid #000;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            z-index: 4;
          }

          .pokeball-center::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 8px;
            height: 8px;
            background: #000;
            border-radius: 50%;
            transform: translate(-50%, -50%);
          }

          /* Electric animations */
          @keyframes electric-pulse {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
          }

          .lightning-bolt-1, .lightning-bolt-2, .lightning-bolt-3 {
            animation: electric-pulse 2s ease-in-out infinite;
          }

          .lightning-bolt-2 {
            animation-delay: 0.5s;
          }

          .lightning-bolt-3 {
            animation-delay: 1s;
          }
        `}</style>
        
        <div className="pokeball-top"></div>
        <div className="pokeball-bottom"></div>
        <div className="pokeball-middle"></div>
        <div className="pokeball-center"></div>
      </div>

      <div className="pikachu-container relative z-10">
        <style>{`
          :root {
            --bordercolor: #0A0A0A;
            --pikachu-yellow: #fed823;
            --pikachu-red: #ff0000;
            --pikachu-dark-brown: #231815;
          }

          .container {
            position: relative;
            width: 220px;
            height: 250px;
            animation: gentle-sway 3s ease-in-out infinite;
            filter: drop-shadow(0 0 25px rgba(254, 216, 35, 0.4));
          }

          @keyframes gentle-sway {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-5px) rotate(1deg); }
          }

          /* LEFT EAR (back) */
          .ear-left {
            position: absolute;
            top: 0;
            left: 30px;
            width: 36px;
            height: 140px;
            background: var(--pikachu-yellow);
            transform: rotate(-35deg);
            border-top-left-radius: 100% 100%;
            border-top-right-radius: 100% 100%;
            border-bottom-left-radius: 60% 60%;
            overflow: hidden;
            border: 3px solid var(--bordercolor);
            z-index: 1;
          }

          .ear-left::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 40px;
            top: 0;
            background: var(--pikachu-dark-brown);
            border-bottom: 3px solid var(--bordercolor);
          }

          /* RIGHT EAR (back) */
          .ear-right {
            position: absolute;
            top: 10px;
            right: 20px;
            width: 36px;
            height: 140px;
            background: var(--pikachu-yellow);
            transform: rotate(45deg);
            border-top-left-radius: 100% 100%;
            border-top-right-radius: 100% 100%;
            border-bottom-left-radius: 60% 60%;
            overflow: hidden;
            border: 3px solid var(--bordercolor);
            z-index: 1;
          }

          .ear-right::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 40px;
            top: 0;
            background: var(--pikachu-dark-brown);
            border-bottom: 3px solid var(--bordercolor);
          }

          /* HEAD */
          .pik-head {
            position: absolute;
            width: 160px;
            height: 160px;
            background: var(--pikachu-yellow);
            top: 60px;
            left: 50%;
            transform: translateX(-50%);
            border-top-left-radius: 130px 120px;
            border-top-right-radius: 150px 100px;
            border-bottom-left-radius: 80px 80px;
            border-bottom-right-radius: 25px 120px;
            border: 3px solid var(--bordercolor);
            border-bottom: none;
            z-index: 2;
            box-shadow: 0 6px 24px 0 rgba(0,0,0,0.10);
          }

          .pik-head:after {
            content: '';
            position: absolute;
            width: 23px;
            height: 40px;
            background: var(--pikachu-red);
            border-radius: 50%;
            left: -18px;
            top: 80px;
            border: 3px solid var(--bordercolor);
          }

          .cheek-right {
            position: absolute;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: var(--pikachu-red);
            border: 3px solid var(--bordercolor);
            top: 90px;
            right: 18px;
            z-index: 3;
            animation: electric-glow 2s ease-in-out infinite;
          }

          @keyframes electric-glow {
            0%, 100% { box-shadow: 0 0 15px rgba(255, 0, 0, 0.6); }
            50% { box-shadow: 0 0 25px rgba(255, 165, 0, 0.9); }
          }

          .eye-right, .eye-left {
            position: absolute;
            background: var(--bordercolor);
            border-radius: 50%;
          }

          .eye-right {
            width: 30px;
            height: 33px;
            top: 57px;
            right: 36px;
          }

          .eye-right::before {
            content: '';
            position: absolute;
            width: 10px;
            height: 12px;
            background: white;
            border-radius: 50%;
            left: 8px;
            top: 5px;
          }

          .eye-left {
            width: 20px;
            height: 32px;
            transform: rotateZ(10deg);
            top: 50px;
            left: 10px;
          }

          .eye-left::before {
            content: '';
            position: absolute;
            width: 8px;
            height: 13px;
            background: white;
            border-radius: 50%;
            transform: rotateZ(8deg);
            left: 10px;
            top: 5px;
          }

          .nose {
            position: absolute;
            width: 12px;
            height: 13px;
            background: var(--bordercolor);
            top: 75px;
            left: 40px;
            border-radius: 50% 60% 50% 60%;
            transform: rotateZ(-36deg);
          }

          .mouth {
            position: absolute;
            width: 25px;
            height: 20px;
            border-radius: 0 0 100% 0;
            border-bottom: 4px solid var(--bordercolor);
            border-right: 3px solid var(--bordercolor);
            top: 90px;
            left: 48px;
            transform: rotateZ(55deg);
          }

          .mouth::before {
            content: '';
            position: absolute;
            width: 17px;
            height: 15px;
            border-radius: 0 0 90% 0;
            border-bottom: 4px solid var(--bordercolor);
            border-right: 3px solid var(--bordercolor);
            top: 22px;
            right: 20px;
            transform: rotateZ(-10deg);
          }
        `}</style>
        
        <div className="container">
          <div className="ear-left"></div>
          <div className="ear-right"></div>

          <div className="pik-head">
            <div className="eye-left"></div>
            <div className="eye-right"></div>
            <div className="cheek-right"></div>
            <div className="nose"></div>
            <div className="mouth"></div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-8 relative z-10">
        <h1 className="text-4xl font-bold text-amber-800 mb-2 drop-shadow-lg animate-pulse">Pikachu</h1>
        <p className="text-amber-700 text-lg drop-shadow-md">The Electric Mouse Pokémon</p>
        <p className="text-amber-600 text-sm mt-2 max-w-md mx-auto drop-shadow-sm">
          Created with pure HTML & CSS • No images, SVGs, or external assets
        </p>
      </div>
    </div>
  );
}

export default App;