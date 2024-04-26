import React from "react";

function Header(props) {
  return (
    <div className="w-screen h-20 bg-cyan-500">
      <div className="h-20 flex items-center justify-center md:justify-start md:ml-6 font-['Open_Sans'] text-2xl md:text-3xl italic text-white">
        EasySign
      </div>
    </div>
  );
}

export default Header;
