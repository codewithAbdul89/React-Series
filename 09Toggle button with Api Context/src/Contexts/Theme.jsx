import React, { createContext, useContext, useState } from "react";

// 1. Create Context
export const ThemeContext = createContext({
    themeMode: "light",           // default value
    darkTheme: () => { },
    lightTheme: () => { }
});

// 2. Create and export the Provider component
export const ThemeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState("light");

    const darkTheme = () => {
        setThemeMode("dark");
    };

    const lightTheme = () => {
        setThemeMode("light");
    };

    return (
        <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default function useTheme() {
    return useContext(ThemeContext);
}



