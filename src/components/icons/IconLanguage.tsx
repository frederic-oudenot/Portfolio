interface IconLanguage {
  id: string;
  src: string;
  width?: number;
  height?: number;
  handleClick: () => void;
}

export default function IconLanguage({
  id,
  src,
  width,
  height,
  handleClick,
}: IconLanguage) {
  return (
    <div className="cursor-pointer hover:scale-105" onClick={handleClick}>
      <img id={id} src={src} className={`w-${width} h-${height}`} />
    </div>
  );
}
