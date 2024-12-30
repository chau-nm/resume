import { SunOutline } from "assets/icons";
import { FABChild } from "component/FAB/FABChild";
import { FC } from "react";

export const ThemeSetting: FC = () => {
    return (
        <FABChild icon={<SunOutline />}/>
    )
}