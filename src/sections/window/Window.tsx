import NavigatorHeader from "@/containers/header/NavigatorHeader";
import { useCallback, useEffect, useRef, useState } from "react";

interface WindowProp {
  id: string;
  isOpen: boolean;
}

export default function Window({ id, isOpen }: WindowProp) {
  const [changeClassname, setChangeClassname] = useState<string>(closeWindow);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const dragStartPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    isOpen && id
      ? setChangeClassname(normalWindow)
      : setChangeClassname(closeWindow);
  }, [isOpen, id]);

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
        if (changeClassname === fullWindow) {
          setChangeClassname(normalWindow);
        } else {
          setChangeClassname(fullWindow);
        }
        break;
      default:
        setChangeClassname(normalWindow);
        break;
    }
  }

  const onDragStart = useCallback(
    (e: any) => {
      dragStartPosition.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      };
    },
    [position]
  );

  const onDrag = useCallback((e: any) => {
    setPosition({
      x: e.clientX - dragStartPosition.current.x,
      y: e.clientY - dragStartPosition.current.y,
    });
  }, []);

  const onDragEnd = useCallback((e: any) => {
    e.preventDefault();
    setPosition({
      x: e.clientX - dragStartPosition.current.x,
      y: e.clientY - dragStartPosition.current.y,
    });
  }, []);

  let reduceWindow = `w-50 h-10 bg-white my-3 m-auto rounded-lg transition: all 1s ease-out;`;
  let fullWindow = ` w-full h-full bg-white my-3 m-auto rounded-lg transition: all 1s ease-out;`;
  let normalWindow = ` w-1/2 h-1/2 bg-white my-3 m-auto rounded-lg transition: all 1s ease-out;`;

  return (
    <>
      <section
        draggable
        onDrag={(e) => onDrag(e)}
        onDragStart={(e) => onDragStart(e)}
        onDragOver={(e) => onDragEnd(e)}
        id={id}
        className={`${changeClassname}`}
        style={{
          position: "absolute",
          top: `${position.y}px`,
          left: `${position.x}px`,
        }}
      >
        <NavigatorHeader handleClick={handleClick} />
        <div>
          <aside>TEST {id}</aside>
          <div></div>
        </div>
      </section>
    </>
  );
}

const closeWindow = `hidden`;
