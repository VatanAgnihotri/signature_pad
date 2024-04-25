import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { CirclePicker } from "react-color";

function SignaturePad(props) {
  const [sign, setSign] = useState(undefined);
  const [disableSave, setSave] = useState(true);
  const [penColor, setPenColor] = useState("black");
  const [bgColor, setBgColor] = useState("white");
  const textRef = useRef();

  const handleClear = () => {
    sign.clear();
    setSave(true);
    setPenColor("black");
    setBgColor("white");
  };

  const handleSave = () => {
    const mergedCanvas = document.createElement("canvas");
    const context = mergedCanvas.getContext("2d");
    const sigCanvas = sign.getCanvas();
    const txtCanvas = textRef.current;

    mergedCanvas.width = sigCanvas.width;
    mergedCanvas.height = sigCanvas.height;

    context.fillStyle = bgColor;
    context.fillRect(0, 0, mergedCanvas.width, mergedCanvas.height);

    context.drawImage(sigCanvas, 0, 0);

    context.drawImage(txtCanvas, 0, 0);
    const blob = mergedCanvas.toDataURL("image/png");
    // Draw text canvas onto merged canvas
    const link = document.createElement("a");
    link.href = blob;
    link.download = "signature-png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col">
      <div className=" flex items-center justify-center font-mono text-2xl md:text-3xl lg:text-5xl italic text-cyan-500 h-40">
        <p>Draw your Signature</p>
      </div>
      <div className="flex flex-col items-center justify-around w-screen h-auto">
        <SignatureCanvas
          penColor={penColor}
          clearOnResize={false}
          canvasProps={{
            className:
              "sigCanvas border border-cyan-500 drop-shadow-md h-80 w-11/12 lg:w-9/12 xl:w-6/12",
            style: { backgroundColor: bgColor },
          }}
          onEnd={() => {
            setSave(sign.toData().length === 0);
          }}
          ref={(data) => setSign(data)}
        />
        <canvas
          className="border border-cyan-500 drop-shadow-md h-80 w-11/12 lg:w-9/12 xl:w-6/12 hidden"
          ref={textRef}
        />
        <div className="flex flex-col mt-6">
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
            <p className="font-mono text-cyan-500 italic text-lg">BackGround</p>
            <CirclePicker
              className="justify-center mt-1"
              colors={["black", "red", "blue", "green", "violet"]}
              onChange={(e) => {
                setBgColor(e.hex);
              }}
            />
          </div>
          <div className="flex flex-col items-center justify-center md:flex-row md:mt-4 md:justify-between">
            <p className="font-mono text-cyan-500 italic text-lg">Pen</p>
            <CirclePicker
              className="justify-center mt-1"
              colors={["black", "red", "blue", "green", "violet"]}
              onChange={(e) => {
                setPenColor(e.hex);
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-around md:justify-center gap-8 mt-6 lg:mt-20 lg:text-2xl">
        <button
          className={`rounded-2xl bg-cyan-500 text-white px-4 py-2 font-mono leading-none w-24 md:w-64 ${
            disableSave ? "bg-cyan-100 text-slate-500" : "hover:bg-cyan-600"
          }`}
          onClick={handleSave}
          disabled={disableSave}
        >
          Save
        </button>
        <button
          className="rounded-2xl border border-cyan-500 text-cyan-500  hover:bg-cyan-500 hover:text-white px-4 py-2 font-mono leading-none w-24 md:w-64"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default SignaturePad;
