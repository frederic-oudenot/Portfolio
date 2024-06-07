import ActionButton from "@/components/buttons/ActionButton";
import allActionColor from "@/constants/allActionColor";
import { IAllActionColor } from "@/interface/Window";

interface NavigatorHeaderProp {
  handleClick: () => void;
}

export default function SideHeader({ handleClick }: NavigatorHeaderProp) {
  return (
    <header className="relative w-96 h-10 flex content-center p-3 gap-x-1">
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
