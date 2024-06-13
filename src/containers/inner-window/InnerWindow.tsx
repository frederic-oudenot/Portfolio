import NavigatorHeader from "@/containers/header/NavigatorHeader";

interface InnerWindowProp {
  content: { id: string; name: string; component: JSX.Element };
  isReduce?: boolean;
}

export default function InnerWindow({ isReduce, content }: InnerWindowProp) {
  return (
    <div
      className={`flex-1 h-full`}
    >
      <NavigatorHeader id={content?.id} content={content?.name} />
      {isReduce ? null : content?.component}
    </div>
  );
}
