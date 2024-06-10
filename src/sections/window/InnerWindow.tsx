import NavigatorHeader from "@/containers/header/NavigatorHeader";

interface InnerWindowProp {
  content: { id: string; name: string; component: JSX.Element };
}

export default function InnerWindow({ content }: InnerWindowProp) {
  return (
    <div className="mt-10 flex-1 overflow-y-auto">
      <NavigatorHeader id={content?.id} content={content?.name} />
      {content?.component}
    </div>
  );
}
