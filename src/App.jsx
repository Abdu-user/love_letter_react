import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [showImage, setShowImage] = useState(false);
  const [buttonSize, setButtonSize] = useState(1);
  const [count, setCount] = useState(0);

  const texts = [
    "жок",
    "неден",
    "(((",
    "токтааааа ",
    "жанемммм нетттт",
    "солга солга солга!",
    "Жоқ пе!",
    "AAAAAAAAA",
    "AAAAAAAAA",
    "AAAAAAAAA",
    "AAAAAAAAA",
    "AAAAAAAAA",
    "AAAAAAAAA",
    "AAAAAAAAA",
    "AAAAAAAAA",
  ];
  const [buttonText, setButtonText] = useState(texts[count]);
  const buttonRef = useRef(null);

  function handleReject() {
    // if (count < texts.length - 1) {
    setButtonSize((p) => p + 0.6);
    setCount((c) => c + 1);
    setButtonText(texts[count + 1]);

    // if()
    // buttonRef.current.scrollIntoView({ behavior: "smooth" });
    console.log(buttonSize);
  }

  // const window = useRef();

  return (
    <div className="flex max-w-[100vw] py-10 px-2">
      {showImage ? (
        <div className="flex flex-col ">
          {/* <videoww
            autoPlay
            muted
            loop
            src="/cat-cute.gif.mp4"
          ></videoww> */}
          <img
            src="/cat-cute.gif"
            alt=""
            className="object-cover w-full max-w-md mt-2 rounded-2xl aspect-square"
          />
          <h1 className="mb-4 text-4xl text-black">Yappy</h1>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full h-full justify-evenly">
          {/* <h1 className="mt-8 mb-2 text-4xl font-bold text-pink-900">♥️🧸💌🏹</h1> */}
          <img
            src="/kiss-kissing-hp.gif"
            alt=""
            className="object-cover w-full max-w-md mt-2 rounded-2xl aspect-square"
          />
          {/* <video
            autoPlay
            muted
            loop
            src="/kiss-kissing.gif.mp4"
          ></video> */}
          <p className="mt-4 text-2xl font-bold text-center text-pink-900">
            <br />
            Жаным менің силығымды кабылдайсың ба? 💕
            <br />
            {/* <span className="text-3xl">♥️🧸💌🏹</span> */}
          </p>

          <div
            style={{
              gridTemplateColumns: "auto auto",
            }}
            className="grid items-center justify-center w-full max-w-full gap-3 px-1 mx-auto overflow-x-hidden transition-all "
          >
            <button
              onClick={() => setShowImage(true)}
              className="px-6 py-3 mt-4 ml-auto font-bold text-white transition-all duration-200 ease-in-out transform bg-green-500 rounded-lg shadow-lg hover:bg-green-600 hover:scale-105"
              style={{
                width: ` ${(buttonSize * 80).toFixed(0)}px`,
                height: ` ${(buttonSize * 30 + 30).toFixed(0)}px`,
              }}
            >
              Иә
            </button>
            <button
              onClick={handleReject}
              ref={buttonRef}
              className="px-4 py-2 mt-4 mr-auto font-bold text-white transition-all duration-200 ease-in-out transform bg-red-500 rounded-lg shadow-lg hover:bg-red-600 hover:-translate-y-1"
            >
              {buttonText}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
