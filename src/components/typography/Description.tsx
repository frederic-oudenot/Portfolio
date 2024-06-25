interface DescriptionProp {
  content: string | undefined;
  variant?: "white" | "black";
}

export default function Description({ content, variant }: DescriptionProp) {
  return (
    <p
      className={`flex flex-row text-justify p-2 text-md leading-relaxed text-${variant}`}
    >
      {content}
    </p>
  );
}
