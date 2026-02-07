import { useState } from "react";
import "./App.css";

function App() {
  const [showImage, setShowImage] = useState(false);
  const [buttonSize, setButtonSize] = useState(1);
  const [count, setCount] = useState(0);

  const texts = ["Жоқ 1", "Жоқ 2", "Жоқ 3", "Жоқ 4", "Жоқ 5", "Жоқ 6", "Жоқ 7", "Жоқ 8", "Жоқ 9"];
  const [buttonText, setButtoText] = useState(texts[count]);
  function hanldeReject() {
    setButtonSize(
      (p) => p + 0.6,
      // (p * 0.5 > 2 ? 2 : p * 0.5)
    );
    setCount((c) => c + 1);
    setButtoText(texts[count + 1]);
    console.log("sss", buttonSize);
  }

  // const window = useRef();

  return (
    <div className="flex max-w-[100vw] ">
      {/* <div
        style={{ background: "var(--bg-gradient)" }}
        className=" w-[80vw] h-[80dvh] px-4  overflow-auto  border-[1px] rounded-3xl "
      > */}
      {showImage ? (
        <img
          src="/happy-cat-cat.gif"
          alt=""
        />
      ) : (
        <div className="flex flex-col items-center w-full h-full justify-evenly">
          <h1 className="mt-8 mb-2 text-4xl font-bold text-pink-900">♥️🧸💌🏹</h1>
          <img
            src="/gojo-flower.jpg"
            alt=""
            className="object-cover mt-2 rounded-2xl aspect-square"
          />
          <p className="mt-4 text-іxl font-bold text-pink-800">
            Мениң силығымды кабылдайсың ба?
            <br />
            ♥️🧸💌🏹
          </p>

          <div
            style={{
              gridTemplateColumns: "1fr 1fr",
            }}
            className="grid items-center justify-center w-full max-w-full gap-3 px-1 mx-auto overflow-hidden transition-all "
          >
            <button
              onClick={() => setShowImage(true)}
              className={` ml-auto px-4 py-2 mt-4 text-white bg-green-600 rounded-lg`}
              style={{
                width: ` ${(buttonSize * 80).toFixed(0)}px`,
                height: ` ${(buttonSize * 30 + 30).toFixed(0)}px`,
                transform: ``,
              }}
            >
              Иә
            </button>
            <button
              onClick={hanldeReject}
              className="px-4 py-2 mt-4 mr-auto text-white bg-red-600 rounded-lg"
            >
              {buttonText}
            </button>
          </div>
        </div>
      )}
      {/* </div> */}
    </div>
  );
}

export default App;
