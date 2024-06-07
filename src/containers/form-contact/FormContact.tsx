import MainButton from "@/components/buttons/MainButton";
import Input from "@/components/input/Input";
import Label from "@/components/label/Label";

export default function FormContact() {
  function handleSubmit() {}
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Label variant={"mail"} />
        <Input variant={"mail"} />
        <Label variant={"message"} />
        <Input variant={"text"} />
        <MainButton id={"submit-fomr"} label={"Envoyer"} />
      </form>
    </>
  );
}
