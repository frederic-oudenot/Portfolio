interface DescriptionProp {
    content: string;
  }
  
  export default function Description({ content }: DescriptionProp) {
    return <h1 className="text-justify text-md">{content}</h1>;
  }
  