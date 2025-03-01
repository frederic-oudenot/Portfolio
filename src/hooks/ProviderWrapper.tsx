"use client";
import { store } from "@/store/store";
import { Provider } from "react-redux";

export default function ProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {

  // Wrapper store redux on all project
  return (
    <Provider store={store}>
        {children}
    </Provider>
  );
}
