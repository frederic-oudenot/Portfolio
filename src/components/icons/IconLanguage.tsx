interface IconLanguage {
  src: string;
  width?: number;
}

export default function IconLanguage({ src, width }: IconLanguage) {
  return <img src={src} className={`w-${width}`}/>;
}
