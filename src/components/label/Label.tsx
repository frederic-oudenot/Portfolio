interface LabelProp {
  variant: string;
}

export default function Label({ variant }: LabelProp) {
  return <p className={"text-white rounded-lg w-48 h-10 p-2"}>{variant}</p>;
}
