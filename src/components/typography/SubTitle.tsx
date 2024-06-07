interface SubTitleProp {
  name: string;
  variant: "white" | "black";
}

export default function SubTitle({ name, variant }: SubTitleProp) {
  return <h3 className={`text-sm text-${variant}`}>{name}</h3>;
}
