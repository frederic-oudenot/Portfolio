import listMenu from "@/constants/listMenu";
import Sidebar from "@/containers/sidebar/Sidebar";
import functionWindow, {
  closeWindow,
  normalWindow,
} from "@/utils/functionWindow";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import InnerWindow from "./InnerWindow";

interface WindowProp {
  id: string;
  isOpen: boolean;
  handleOpenWindow: (id: string, isOpen: boolean) => void;
}

export default function Window({ id, isOpen, handleOpenWindow }: WindowProp) {
  const [changeClassname, setChangeClassname] = useState<string>(closeWindow);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const dragStartPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    isOpen && id
      ? setChangeClassname(normalWindow)
      : setChangeClassname(closeWindow);
  }, [isOpen, id]);

  const selectedFunctionWindow = useCallback((buttonId: string) => {
    const foundClassName = document
      .getElementById(buttonId)!
      .getAttribute("class");

    const result = functionWindow(buttonId, id, foundClassName);
    if (!result) {
      return;
    } else {
      handleOpenWindow(result?.id, result?.isOpen);
      setChangeClassname(result?.classWindow);
    }
  }, []);

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
    if (e.clientX === 0 && e.clientY === 0) return;
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
        <div className="flex flex-row">
          <Sidebar
            selectedFunctionWindow={selectedFunctionWindow}
            id={`sidebar-${id}`}
          />
          {listMenu.map((menu, index) => (
            <Fragment key={index}>
              {menu?.id === id ? <InnerWindow content={menu} /> : null}
            </Fragment>
          ))}
        </div>
      </section>
    </>
  );
}
