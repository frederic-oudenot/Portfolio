import Title from "@/components/typography/Title";

interface NavigatorHeaderProp {
  id: string;
  content: string;
}

export default function NavigatorHeader({ id, content }: NavigatorHeaderProp) {
  return (
    <header className="sticky top-0 w-full h-10 flex place-items-center p-3 gap-x-1 bg-white">
      <Title id={`title-${id}`} content={content} variant="black" />
    </header>
  );
}
