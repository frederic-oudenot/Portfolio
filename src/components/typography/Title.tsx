interface TitleProp {
  id: string;
  content: string;
  variant: "white" | "black";
}

export default function Title({ id, content, variant }: TitleProp) {
  return (
    <h1 id={`title-${id}`} className={`font-bold text-lg text-${variant}`}>
      {content}
    </h1>
  );
}
