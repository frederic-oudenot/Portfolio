interface DescriptionProp {
  content: string;
}

export default function Description({ content }: DescriptionProp) {
  return (
    <p className="flex flex-row text-justify p-2 text-md leading-relaxed">
      {content}
    </p>
  );
}
