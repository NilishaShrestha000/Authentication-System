import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

    useEffect(() => {
        console.log('themechangedd', theme);
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme])

    return (

        <ThemeContext.Provider
            value={{ theme, setTheme, toggleTheme }} >
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);

