import React from "react";

function Footer(props) {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-24 bg-cyan-700 mt-6 lg:text-2xl">
      <div className="font-mono text-l italic text-white">
        Created By: Vatan Agnihotri
      </div>
      <div className="font-mono text-base italic text-white">
        <a
          className="hover:underline"
          href="mailto:vatanagnihotri.business@gmail.com"
        >
          vatanagnihotri.business@gmail.com
        </a>
      </div>
      <div className="font-mono text-xs  italic text-white">
        (Contact for any Web & Full Stack Requirement)
      </div>
    </div>
  );
}

export default Footer;
