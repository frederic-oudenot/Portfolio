"use client";
import { useAppSelector } from "@/hooks/Redux";

interface InputProp {
  id: string;
  variant: string;
  handleChange: (e: any) => void;
}

export default function Input({ id, variant, handleChange }: InputProp) {
  const userLanguage = useAppSelector(
    (state) => state.languages.initialLanguage
  );
  return (
    <>
      {variant === "mail" ? (
        <input
          id={id}
          onChange={handleChange}
          required
          className={inputStyle}
          type={variant}
          placeholder={userLanguage?.genericContent.placeholderEmail}
        />
      ) : id.includes("name") ? (
        <input
          id={id}
          onChange={handleChange}
          required
          className={inputStyle}
          type={variant}
          placeholder={userLanguage?.genericContent.placeholderName}
        />
      ) : (
        <input
          id={id}
          onChange={handleChange}
          required
          className={inputStyle}
          type={variant}
          placeholder={userLanguage?.genericContent.placeholderName}
        />
      )}
    </>
  );
}

const inputStyle =
  "border border-gray-300 rounded-lg bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-sky-700 focus:shadow-md";
