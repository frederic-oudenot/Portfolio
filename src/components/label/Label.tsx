interface LabelProp {
  id: string;
  content: string;
  color?: string;
}

export default function Label({ id, content, color }: LabelProp) {
  return (
    <>
      {color ? (
        <p
          id={id}
          style={{ color: `${color}` }}
          className={`text-white rounded-lg w-full h-10 p-2 text-${color}-400`}
        >
          {content}
        </p>
      ) : (
        <p id={id} className={"text-white rounded-lg w-full h-10 p-2"}>
          {content}
        </p>
      )}
    </>
  );
}
