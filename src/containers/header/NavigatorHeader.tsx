import ActionButton from "@/components/buttons/ActionButton";
import allActionColor from "@/constants/allActionColor";
import { IAllActionColor } from "@/interface/Window";

interface NavigatorHeaderProp {
  handleClick: (buttonId: string) => void;
}

export default function NavigatorHeader({ handleClick }: NavigatorHeaderProp) {
  return (
    <header className="relative w-full h-10 flex content-center p-3 bg-black gap-x-1 ">
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
