interface SubTitleProp {
  name: string;
  variant: "white" | "black";
}

export default function SubTitle({ name, variant }: SubTitleProp) {
  return <h3 className={`text-sm text-${variant} max-md:hidden`}>{name}</h3>;
}
