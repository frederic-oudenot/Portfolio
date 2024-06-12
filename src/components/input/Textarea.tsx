interface TextAreaProp {
  id: string;
  handleChange: (e: any) => void;
}

export default function TextArea({ id, handleChange }: TextAreaProp) {
  return (
    <textarea
      id={id}
      placeholder="Votre message ici!"
      onChange={handleChange}
      required
      resize-none="false"
      className={"text-black rounded-lg h-32 p-2"}
    ></textarea>
  );
}
