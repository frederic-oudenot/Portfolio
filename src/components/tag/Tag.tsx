interface TagProp {
  name: string;
  variant: "white" | "black";
}

export default function Tag({ name, variant }: TagProp) {
  return (
    <div className="outline rounded-md bg-white-500 p-1">
      {name}
    </div>
  );
}
