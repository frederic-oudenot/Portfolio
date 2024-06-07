import { useEffect, useState } from "react";
import allCollectionMusic from "@/constants/allCollectionMusic";

export default function JukeBox() {
  const [closeWindow, setCloseWindow] = useState<string>();
  const [openMusic, setOpenMusic] = useState<string>();
  const [sourceMusic, setSourceMusic] = useState<string>();

  useEffect(() => {
    setCloseWindow("flex flex-wrap justify-center gap-2");
    setOpenMusic("hidden");
  }, []);

  function randomMusic(min: number, max: number) {
    const minValue = Math.ceil(min);
    const maxValue = Math.floor(max);
    const random = Math.floor(Math.random() * (maxValue - minValue) + minValue);
    return allCollectionMusic[random];
  }

  function handleClick() {
    if (closeWindow !== "hidden") {
      const music = randomMusic(0, allCollectionMusic.length - 1);
      setCloseWindow("hidden");
      setOpenMusic("w-full h-full");
      setSourceMusic(music.source);
    } else {
      setCloseWindow("flex flex-wrap justify-center gap-2");
      setOpenMusic("hidden");
      setSourceMusic("");
    }
  }

  return (
    <section>
      <div className="rounded-t-lg border-2 border-gray-200 bg-white">
        <div className="flex bg-gray-200 w-full h-full">
          <button onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="red"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <iframe
          className={openMusic}
          src={sourceMusic}
          allow="autoplay"
        ></iframe>
      </div>
      <div className="border-2 border-gray-200 bg-gray-200 rounded-b-lg"></div>
    </section>
  );
}
