import allWallpapers from "@/constants/allWallpapers";
import CardWallpaper from "@/containers/card-wallpaper/CardWallpaper";
import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
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
    <section id="about" className={sectionStyle}>
      {selectedFamilyWallpaper
        ? selectedFamilyWallpaper.map((wallpaper, index) => {
            return (
              <CardWallpaper
                key={index}
                handleChangeWallpaper={handleChangeWallpaper}
                wallpaper={wallpaper}
              />
            );
          })
        : familyWallpaper.map((wallpaper, index) => {
            return (
              <CardWallpaper
                key={index}
                handleChangeWallpaper={handleChangeWallpaper}
                wallpaper={wallpaper}
              />
            );
          })}
    </section>
  );
}

const sectionStyle = `grid grid-cols-3 gap-5 p-5 bg-[#465952] place-items-center text-white overflow-y-scroll`;
