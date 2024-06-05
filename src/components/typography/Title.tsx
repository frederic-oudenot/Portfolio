interface TitleProp {
  content: string;
}

export default function Title({ content }: TitleProp) {
  return <h1 className="font-bold text-lg">{content}</h1>;
}
