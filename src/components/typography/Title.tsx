interface TitleProp {
  id: string;
  content: string;
}

export default function Title({ id, content }: TitleProp) {
  return (
    <h1 id={id} className="font-bold text-lg">
      {content}
    </h1>
  );
}
