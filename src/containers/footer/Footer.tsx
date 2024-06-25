import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
import { openWindow } from "@/store/reducers/windowSlice";
import MenuButton from "@/components/buttons/MenuButtons";

export default function Footer() {
  const userLanguage = useAppSelector(
    (state) => state.languages.initialLanguage
  );
  const dispatch = useAppDispatch();

  function handleOpenWindow(WindowId: string) {
    dispatch(openWindow(WindowId));
  }

  return (
    <footer
      className={`absolute flex justify-center inset-x-1/4 m-auto bottom-5 backdrop-blur-sm	shadow-[0_8px_32px_-0px_rgba(20,20,20,0.25)]  bg-white/20 rounded-full w-[24rem] h-20 z-50 ${mobileStyle}`}
    >
      {userLanguage?.Footer.map((button: any, index: number) => {
        return (
          <MenuButton
            handleOpenWindow={handleOpenWindow}
            button={button}
            key={`button-footer-${index}`}
          />
        );
      })}
    </footer>
  );
}

const mobileStyle = `max-md:my-0 max-md:inset-0`;
