import { SettingOutline, SunOutline } from "assets/icons";
import FAB from "component/FAB";
import { FABChild } from "component/FAB/FABChild";
import { FC } from "react";

const SettingFAB: FC = () => {
  return (
    <FAB icon={<SettingOutline />}>
      <FABChild icon={<SunOutline />} />
      <FABChild icon={"EN"} />
    </FAB>
  );
};

export default SettingFAB;
