import { createContext, useContext } from "react";

const UserLanguageContext = createContext<any>(null);

export const UserLanguageProvider = ({ children, userLanguage }: any) => {
  const UserLanguageContext = createContext(userLanguage);

  return (
    <UserLanguageContext.Provider value={userLanguage}>
      {children}
    </UserLanguageContext.Provider>
  );
};

export const useUserLanguage = () => useContext(UserLanguageContext);
