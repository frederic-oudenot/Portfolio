import SubTitle from "@/components/typography/SubTitle";
import Title from "@/components/typography/Title";

interface CardWallpaperProp {
  handleChangeWallpaper: (wallpaperId: string) => void;
  wallpaper: {
    id: string;
    src: string;
    source: string;
  };
}

export default function CardWallpaper({
  handleChangeWallpaper,
  wallpaper,
}: CardWallpaperProp) {
  return (
    <article className={articleStyle}>
      <div className="flex flex-col place-items-center cursor-pointer hover:scale-105">
        <img
          onClick={() => {
            handleChangeWallpaper(wallpaper.id);
          }}
          className="rounded-lg"
          width={300}
          height={300}
          src={wallpaper.src}
          alt={wallpaper.id}
        />
        <SubTitle
          id={wallpaper.id}
          content={wallpaper.source}
          variant="white"
        />
      </div>
    </article>
  );
}
const articleStyle = "place-items-center gap-5";
