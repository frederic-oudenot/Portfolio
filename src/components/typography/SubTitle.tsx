interface SubTitleProp {
  id: string;
  content: string | undefined;
  variant: "white" | "black" | "";
  from?: "modal" | "session" | "";
  size?: string;
}

export default function SubTitle({
  id,
  content,
  variant,
  from,
  size,
}: SubTitleProp) {
  return (
    <h3
      id={`subtitle-${id}`}
      className={
        from
          ? `text-center text-md w-full text-${variant} text-xs`
          : `text-center text-md w-full text-${variant} max-md:hidden`
      }
    >
      {content}
    </h3>
  );
}
