import { useAppSelector } from "@/hooks/Redux";

interface TextAreaProp {
  id: string;
  handleChange: (e: any) => void;
}

export default function TextArea({ id, handleChange }: TextAreaProp) {
  const userLanguage = useAppSelector(
    (state) => state.languages.initialLanguage
  );
  return (
    <textarea
      id={id}
      placeholder={userLanguage?.genericContent.placeholderMessage}
      onChange={handleChange}
      required
      resize-none="false"
      className={"text-black rounded-lg h-32 p-2"}
    ></textarea>
  );
}
