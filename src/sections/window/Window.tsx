import listMenu from "@/constants/listMenu";
import Sidebar from "@/containers/sidebar/Sidebar";
import {
  reduceWindow,
  fullWindow,
  normalWindow,
  closeWindow,
} from "@/utils/classNameWindow";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import InnerWindow from "./InnerWindow";
import { useAppSelector } from "@/hooks/Redux";

interface WindowProp {
  id: string;
}

export default function Window({ id }: WindowProp) {
  const [changeClassname, setChangeClassname] = useState<string>(closeWindow);
  const [position, setPosition] = useState({ x: 100, y: 100 });
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
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
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
        onTouchStart={(e) => onDragStart(e)}
        onTouchMove={(e) => onDrag(e)}
        onTouchEnd={(e) => onDragEnd(e)}
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
          <Sidebar windowId={id} id={`sidebar-${id}`} />
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
