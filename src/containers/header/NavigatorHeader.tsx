import ActionButton from "@/components/buttons/ActionButton";
import { allActionColor } from "@/constants/allActionColor";
import { IAllActionColor } from "@/interface/Window";

export default function NavigatorHeader() {

  return (
    <header className="w-full h-10 bg-black p-2	gap-1-px">
      <>
        {allActionColor.map((button: IAllActionColor, index: number) => (
          <ActionButton id={button.id} color={button.color} key={index} />
        ))}
      </>
    </header>
  );
}
