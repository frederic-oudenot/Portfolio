interface SubTitleProp {
  id: string;
  content: string | undefined;
  variant: "white" | "black" | "";
  from?: "modal" | "session" | "";
}

export default function SubTitle({ id, content, variant, from }: SubTitleProp) {
  return (
    <h3
      id={`subtitle-${id}`}
      className={
        from
          ? `text-center text-md w-full text-${variant}`
          : `text-center text-md w-full text-${variant} max-md:hidden`
      }
    >
      {content}
    </h3>
  );
}
