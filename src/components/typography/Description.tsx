interface DescriptionProp {
    content: string;
  }
  
  export default function Description({ content }: DescriptionProp) {
    return <p className="text-justify text-md">{content}</p>;
  }
  