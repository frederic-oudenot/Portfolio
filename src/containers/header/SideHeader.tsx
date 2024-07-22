import {
  closeWindow,
  growthWindow,
  reduceWindow,
} from "@/store/reducers/windowSlice";
import ActionButton from "@/components/buttons/ActionButton";
import allActionColor from "@/constants/allActionColor";
import { IAllActionColor } from "@/interface/Window";
import { useAppDispatch } from "@/hooks/Redux";

interface NavigatorHeaderProp {
  windowId: string;
  id: string;
}

export default function SideHeader({ windowId, id }: NavigatorHeaderProp) {
  // Returning dispatch from Redux
  const dispatch = useAppDispatch();

  // Funciton click according each buttons (close, reduce or growth)
  function handleClick(buttonId: string) {

    switch (buttonId) {
      case "button-close":
        dispatch(closeWindow(windowId));
        break;
      case "button-reduce":
        dispatch(reduceWindow(windowId));
        break;
      case "button-growth":
        dispatch(growthWindow(windowId));
        break;
      default:
        break;
    }
  }

  return (
    <header
      id={id}
      className="relative w-96 h-10 flex content-center p-3 gap-x-1 overflow-hidden"
    >
      <>
        {allActionColor.map((button: IAllActionColor, index: number) => (
          <ActionButton
            handleClick={handleClick}
            id={button.id}
            color={button.color}
            key={index}
          />
        ))}
      </>
    </header>
  );
}
