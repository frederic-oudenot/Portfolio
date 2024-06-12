interface SubmitButtonProp {
  id: string;
  label: string;
  handleSubmit: (e: any) => void;
}

export default function SubmitButton({
  id,
  label,
  handleSubmit,
}: SubmitButtonProp) {
  return (
    <>
      {id.includes("submit") ? (
        <button id={id} onClick={handleSubmit} className="m-3 rounded-lg w-48 bg-sky-400 text-black">
          {label}
        </button>
      ) : (
        <button id={id} onClick={handleSubmit} className="text-black">
          {label}
        </button>
      )}
    </>
  );
}
