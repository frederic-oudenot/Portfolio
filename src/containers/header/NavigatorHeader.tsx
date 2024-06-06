import ActionButton from "@/components/buttons/ActionButton";
import Title from "@/components/typography/Title";
import allActionColor from "@/constants/allActionColor";
import { IAllActionColor } from "@/interface/Window";

interface NavigatorHeaderProp {
  content: string;
}

export default function NavigatorHeader({ content }: NavigatorHeaderProp) {
  return (
    <header className="sticky top-0 w-full h-10 flex content-center items-center p-3 gap-x-1 bg-white text-black">
      <Title id={content} content={content} />
    </header>
  );
}
