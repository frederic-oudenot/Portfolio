const genralWindow = "bg-white my-3 m-auto rounded-lg resize";
export const reduceWindow = `w-36 h-10 ${genralWindow}`;
export const fullWindow = ` w-full h-full ${genralWindow} overflow-y-auto`;
export const normalWindow = ` w-2/3 h-1/2 ${genralWindow} overflow-y-auto`;
export const closeWindow = `hidden`;

export default function functionWindow(
  buttonId: string,
  id: string,
  changeClassname: string | null
) {
  switch (buttonId) {
    case "button-close":
      console.log("button-close");
      return { classWindow: closeWindow, id: id, isOpen: false };
    case "button-reduce":
      console.log("button-reduce");
      if (changeClassname === reduceWindow) {
        return { classWindow: normalWindow, id: id, isOpen: true };
      } else {
        return { classWindow: reduceWindow, id: id, isOpen: true };
      }
    case "button-growth":
      console.log("button-growth");
      if (changeClassname === fullWindow) {
        console.log("yest");
        return { classWindow: normalWindow, id: id, isOpen: true };
      } else {
        return { classWindow: fullWindow, id: id, isOpen: true };
      }
    default:
      console.log("button-default");
      return { classWindow: normalWindow, id: id, isOpen: true };
  }
}
