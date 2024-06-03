import NavigatorHeader from "@/containers/header/NavigatorHeader";
import { useState } from "react";

export default function Window() {
  const [changeClassname, setChangeClassname] = useState<string>(normalWindow);
  function handleClick(id: string) {
    switch (id) {
      case "button-close":
        setChangeClassname(closeWindow);
        break;
      case "button-reduce":
        if (changeClassname === reduceWindow) {
          setChangeClassname(normalWindow);
        } else {
          setChangeClassname(reduceWindow);
        }
        break;
      case "button-growth":
        setChangeClassname(fullWindow);
        break;
      default:
        setChangeClassname(normalWindow);
        break;
    }
  }

  return (
    <>
      <section className={`${changeClassname}`}>
        <NavigatorHeader handleClick={handleClick} />
        <div>
          <aside>TEST</aside>
          <div></div>
        </div>
      </section>
    </>
  );
}
const reduceWindow = `w-50 h-10 bg-white my-3 m-auto rounded-lg`;
const fullWindow = `w-full h-full bg-white my-3 m-auto rounded-lg`;
const normalWindow = `w-1/2 h-1/2 bg-white my-3 m-auto rounded-lg`;
const closeWindow = `hidden`;
