import {FC, PropsWithChildren, useState} from "react";
import {ThemeEnum} from "./themeEnum";
import {ThemeContext} from "./ThemeContext";
import "./sass/theme.scss";

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.DARK);
    
    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;