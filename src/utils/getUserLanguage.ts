import languageFR from "@/translation/fr/fr";
import languageEN from "@/translation/en/en";

interface getUserLanguageProp {
  selectedLanguage: string | undefined;
}

export default function getUserLanguage({
  selectedLanguage,
}: getUserLanguageProp) {
  let resultLanguage;

  switch (selectedLanguage) {
    case "fr-FR":
      return (resultLanguage = languageFR);

    default:
      return (resultLanguage = languageEN);
  }
}
