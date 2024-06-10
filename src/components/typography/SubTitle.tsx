interface SubTitleProp {
  id: string;
  content: string;
  variant: "white" | "black";
}

export default function SubTitle({ id, content, variant }: SubTitleProp) {
  return (
    <h3
      id={`subtitle-${id}`}
      className={`text-sm text-${variant} max-md:hidden`}
    >
      {content}
    </h3>
  );
}
