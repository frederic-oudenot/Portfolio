interface IconLanguage {
  src: string;
  width: number;
}

export default function IconLanguage({ src, width }: IconLanguage) {
  return <div className={`w-${width}`}>{src}</div>;
}
