
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';
type PrimaryColor = 'blue' | 'purple' | 'green' | 'orange' | 'red' | 'pink' | 'indigo' | 'teal' | 'emerald' | 'amber';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  primaryColor: PrimaryColor;
  setPrimaryColor: (color: PrimaryColor) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [primaryColor, setPrimaryColorState] = useState<PrimaryColor>('blue');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedColor = localStorage.getItem('primaryColor') as PrimaryColor;
    
    if (savedTheme) setTheme(savedTheme);
    if (savedColor) setPrimaryColorState(savedColor);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    const colorMap = {
      blue: { 
        primary: '221.2 83.2% 53.3%', 
        primaryForeground: '210 40% 98%',
        accent: '214.3 31.8% 91.4%',
        accentForeground: '222.2 47.4% 11.2%'
      },
      purple: { 
        primary: '262.1 83.3% 57.8%', 
        primaryForeground: '210 40% 98%',
        accent: '270 95.2% 95.1%',
        accentForeground: '262.1 83.3% 57.8%'
      },
      green: { 
        primary: '142.1 76.2% 36.3%', 
        primaryForeground: '355.7 100% 97.3%',
        accent: '138.5 76.5% 96.7%',
        accentForeground: '142.1 84.2% 44.3%'
      },
      orange: { 
        primary: '24.6 95% 53.1%', 
        primaryForeground: '60 9.1% 97.8%',
        accent: '32.5 94.6% 95.7%',
        accentForeground: '24.6 95% 53.1%'
      },
      red: { 
        primary: '346.8 77.2% 49.8%', 
        primaryForeground: '355.7 100% 97.3%',
        accent: '350 89.2% 96.1%',
        accentForeground: '346.8 77.2% 49.8%'
      },
      pink: { 
        primary: '322.2 84% 60.5%', 
        primaryForeground: '210 40% 98%',
        accent: '322.1 78% 95.2%',
        accentForeground: '322.2 84% 60.5%'
      },
      indigo: { 
        primary: '231.7 48.6% 59%', 
        primaryForeground: '210 40% 98%',
        accent: '233.3 32% 94.1%',
        accentForeground: '231.7 48.6% 59%'
      },
      teal: { 
        primary: '173.4 80.4% 40%', 
        primaryForeground: '210 40% 98%',
        accent: '180 100% 97.1%',
        accentForeground: '173.4 80.4% 40%'
      },
      emerald: { 
        primary: '160.1 84.1% 39.4%', 
        primaryForeground: '210 40% 98%',
        accent: '166.1 84% 94.9%',
        accentForeground: '160.1 84.1% 39.4%'
      },
      amber: { 
        primary: '37.7 92.1% 50.2%', 
        primaryForeground: '210 40% 98%',
        accent: '37.7 92.1% 96.1%',
        accentForeground: '37.7 92.1% 50.2%'
      },
    };

    const colors = colorMap[primaryColor];
    root.style.setProperty('--primary', colors.primary);
    root.style.setProperty('--primary-foreground', colors.primaryForeground);
    root.style.setProperty('--accent', colors.accent);
    root.style.setProperty('--accent-foreground', colors.accentForeground);
    
    localStorage.setItem('primaryColor', primaryColor);
  }, [primaryColor]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const setPrimaryColor = (color: PrimaryColor) => {
    setPrimaryColorState(color);
  };

  const value: ThemeContextType = {
    theme,
    toggleTheme,
    primaryColor,
    setPrimaryColor
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
