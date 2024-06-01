import Image from "next/image";
import allFooter from "../../constants/allFooter";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 flex justify-center items-center bg-slate-600 rounded-lg w-80 h-24">
      {allFooter.map((button, index) => {
        return (
          <button key={index} id={button.id}>
            <Image
              width={100}
              height={100}
              aria-label={button.label}
              src={button.src}
              alt={button.label}
            />
          </button>
        );
      })}
    </footer>
  );
}
