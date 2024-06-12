interface PopupProp {
  content: any;
  variant: string;
}
export default function Popup({ content, variant }: PopupProp) {
  return (
    <section
      style={{backgroundColor: `${variant}` }}
      className="flex absolute top-1/2 left-1/2 items-center rounded-lg justify-center bg-white w-48 h-16 text-black z-20"
    >
      {content}
    </section>
  );
}
