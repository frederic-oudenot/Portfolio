import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { useAppSelector } from "@/hooks/Redux";
import listMenu from "@/constants/listMenu";
import Sidebar from "@/containers/sidebar/Sidebar";
import {
  reduceWindow,
  fullWindow,
  normalWindow,
  closeWindow,
} from "@/utils/classNameWindow";
import InnerWindow from "@/containers/inner-window/InnerWindow";

interface WindowProp {
  id: string;
}

export default function Window({ id }: WindowProp) {
  const [changeClassname, setChangeClassname] = useState<string>(closeWindow);
  const [position, setPosition] = useState<any>({ x: 0, y: 70 });
  const dragStartPosition = useRef({ x: 0, y: 0 });


  const window = useAppSelector((state) =>
    state.windows.windows.find((window) => window.id === id)
  );

  useEffect(() => {
    if (window) {
      const { isOpen, isReduce, isGrowth }: any = window;

      if (isOpen) {
        setChangeClassname(normalWindow);
        if (isGrowth) {
          setChangeClassname(fullWindow);
        } else if (isReduce) {
          setChangeClassname(reduceWindow);
        } else {
          setChangeClassname(normalWindow);
        }
      } else {
        setChangeClassname(closeWindow);
      }
    }
  }, [window, id]);

  const onDragStart = useCallback(
    (e: any) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      dragStartPosition.current = {
        x: clientX - position.x,
        y: clientY - position.y,
      };
    },
    [position]
  );

  const onDrag = useCallback(
    (e: any) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      if (e.clientX === 0 && e.clientY === 0) return;
      setPosition({
        x: clientX - dragStartPosition.current.x,
        y: clientY - dragStartPosition.current.y,
      });
    },
    [position]
  );

  const onDragEnd = useCallback(
    (e: any) => {
      const clientX = "touches" in e ? e.changedTouches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.changedTouches[0].clientY : e.clientY;
      e.preventDefault();
      setPosition({
        x: clientX - dragStartPosition.current.x,
        y: clientY - dragStartPosition.current.y,
      });
    },
    [position]
  );

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
          zIndex: `${window?.zIndex}`,
        }}
      >
        <div className="flex flex-row flex-grow">
          {window ? (
            <Sidebar
              windowId={id}
              isReduce={window?.isReduce}
              id={`sidebar-${id}`}
            />
          ) : (
            <Sidebar windowId={id} id={`sidebar-${id}`} />
          )}

          {listMenu.map((menu, index) => (
            <Fragment key={index}>
              {menu?.id === id ? (
                <InnerWindow isReduce={window?.isReduce} content={menu} />
              ) : null}
            </Fragment>
          ))}
        </div>
      </section>
    </>
  );
}
