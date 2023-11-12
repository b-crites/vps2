import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en'); // Default language

  const changeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
    
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
      
      
    </LanguageContext.Provider>
    
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
