import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
import CardWallpaper from "@/containers/card-wallpaper/CardWallpaper";
import { changeWallpaper } from "@/store/reducers/wallpaperSlice";

export default function SettingsSession() {
  const dispatch = useAppDispatch();
  const familyWallpaper = useAppSelector(
    (state) => state.wallpaper.familyWallpaper
  );
  const selectedFamilyWallpaper = useAppSelector(
    (state) => state.wallpaper.selectedFamilyWallpaper
  );
  function handleChangeWallpaper(wallapaperId: string) {
    dispatch(changeWallpaper(wallapaperId));
  }
  return (
    <div className="bg-[#465952] h-screen">
      <section id="about" className={sectionStyle}>
        {selectedFamilyWallpaper
          ? selectedFamilyWallpaper.map((wallpaper, index) => {
              return (
                <CardWallpaper
                  key={index}
                  onTouchEnd={handleChangeWallpaper}
                  handleChangeWallpaper={handleChangeWallpaper}
                  wallpaper={wallpaper}
                />
              );
            })
          : familyWallpaper.map((wallpaper, index) => {
              return (
                <CardWallpaper
                  key={index}
                  onTouchEnd={handleChangeWallpaper}
                  handleChangeWallpaper={handleChangeWallpaper}
                  wallpaper={wallpaper}
                />
              );
            })}
      </section>
    </div>
  );
}

const sectionStyle = `grid grid-cols-3 gap-2 p-5 place-items-center text-white max-md:h-screen max-md: flex flex-wrap`;
