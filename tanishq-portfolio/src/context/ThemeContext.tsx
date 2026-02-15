import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

// Define the theme type
export type Theme = 'dark' | 'light';

// Define the context type interface
export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create the context with undefined as default
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider props interface
export interface ThemeProviderProps {
  children: ReactNode;
}

// Local storage key for theme persistence
const THEME_STORAGE_KEY = 'theme';

/**
 * ThemeProvider component that manages theme state and persistence
 * 
 * Features:
 * - Loads theme preference from localStorage on mount
 * - Defaults to 'dark' theme if no preference exists
 * - Persists theme changes to localStorage
 * - Applies theme attribute to document root element
 * - Provides theme state and toggle function via context
 * 
 * Validates: Requirements 6.1, 6.2, 6.3, 6.4, 6.5
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Initialize theme state with value from localStorage or default to 'dark'
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      // Validate that the saved theme is a valid theme value
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }
    } catch (error) {
      // If localStorage is unavailable or throws an error, fall back to default
      console.warn('Failed to load theme from localStorage:', error);
    }
    // Default to dark theme
    return 'dark';
  });

  // Apply theme to document root and persist to localStorage whenever theme changes
  useEffect(() => {
    // Apply data-theme attribute to document root
    document.documentElement.setAttribute('data-theme', theme);
    
    // Persist theme preference to localStorage
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
      // Handle localStorage errors gracefully (e.g., in private browsing mode)
      console.warn('Failed to save theme to localStorage:', error);
    }
  }, [theme]);

  // Toggle function to switch between dark and light themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // Provide theme state and toggle function to children
  const value: ThemeContextType = {
    theme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

/**
 * Custom hook to access theme context
 * 
 * @throws Error if used outside of ThemeProvider
 * @returns ThemeContextType with theme state and toggleTheme function
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};
