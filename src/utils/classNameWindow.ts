const mobileWindow = `max-md:size-full max-md:min-w-full`;
const genralWindow = `bg-white my-3 m-auto rounded-lg z-10 resize touch-manipulation min-w-1/2 border border-slate-300 min-w-[780px] ${mobileWindow}`;
export const reduceWindow = `w-96 h-10 ${genralWindow} `;
export const fullWindow = `size-full ${genralWindow} overflow-y-auto`;
export const normalWindow = `w-1/12 h-1/2 ${genralWindow} overflow-y-auto`;
export const closeWindow = "hidden";
