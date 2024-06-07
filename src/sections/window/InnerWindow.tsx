import NavigatorHeader from "@/containers/header/NavigatorHeader";

interface InnerWindowProp {
  content: { id: string; name: string; component?: JSX.Element };
}

export default function InnerWindow({ content }: InnerWindowProp) {
  return (
    <div className="flex flex-col size-full">
      <NavigatorHeader id={content?.id} content={content?.name} />
      {content?.component}
    </div>
  );
}
