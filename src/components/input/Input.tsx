interface InputProp {
  variant: string;
}

export default function Input({ variant }: InputProp) {
  return (
    <>
      {variant === "mail" ? (
        <input
          required
          className={"text-black rounded-lg w-48 h-10 p-2"}
          type={variant}
          placeholder="email@gmail.com"
        />
      ) : (
        <textarea></textarea>
      )}
    </>
  );
}
