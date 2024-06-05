const genralWindow = "bg-white my-3 m-auto rounded-lg transition 0.2 ease-out";
export const reduceWindow = `w-50 h-10 ${genralWindow}`;
export const fullWindow = ` w-full h-full ${genralWindow} overflow-y-auto`;
export const normalWindow = ` w-1/2 h-1/2 ${genralWindow} overflow-y-auto`;
export const closeWindow = `hidden`;

export default function functionWindow(
  buttonId: string,
  id: string,
  changeClassname: string
) {
  switch (buttonId) {
    case "button-close":
      return { classWindow: closeWindow, id: id, isOpen: false };
    case "button-reduce":
      if (changeClassname === reduceWindow) {
        return { classWindow: normalWindow, id: id, isOpen: true };
      } else {
        return { classWindow: reduceWindow, id: id, isOpen: true };
      }
    case "button-growth":
      if (changeClassname === fullWindow) {
        return { classWindow: normalWindow, id: id, isOpen: true };
      } else {
        return { classWindow: fullWindow, id: id, isOpen: true };
      }
    default:
      return { classWindow: normalWindow, id: id, isOpen: true };
  }
}
