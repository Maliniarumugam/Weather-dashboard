import React, { createContext, useState, useContext, ReactNode } from 'react';

type TempScale = 'Celsius' | 'Fahrenheit';
interface TempContextType {
  scale: TempScale;
  toggleScale: () => void;
}

const TempContext = createContext<TempContextType | undefined>(undefined);

export const useTemp = () => {
  const context = useContext(TempContext);
  if (!context) {
    throw new Error('useTemp must be used within a TempProvider');
  }
  return context;
};

export const TempProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [scale, setScale] = useState<TempScale>('Celsius');

  const toggleScale = () => {
    setScale((prev) => (prev === 'Celsius' ? 'Fahrenheit' : 'Celsius'));
  };

  return (
    <TempContext.Provider value={{ scale, toggleScale }}>
      {children}
    </TempContext.Provider>
  );
};
