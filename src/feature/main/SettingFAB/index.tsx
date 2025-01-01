import { SettingOutline, SunOutline } from "assets/icons";
import FAB from "component/FAB";
import { FABChild } from "component/FAB/FABChild";
import { FC } from "react";
import {ThemeSetting} from "./ThemeSetting";

const SettingFAB: FC = () => {
  return (
    <FAB icon={<SettingOutline />}>
      <ThemeSetting />
      <FABChild icon={"EN"} />
    </FAB>
  );
};

export default SettingFAB;
