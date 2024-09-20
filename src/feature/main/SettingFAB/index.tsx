import { SettingOutline } from "assets/icons";
import FAB from "component/FAB";
import { FABChild } from "component/FAB/FABChild";
import { FC } from "react";

const SettingFAB: FC = () => {
  return (
    <FAB icon={<SettingOutline />}>
      <FABChild icon={<SettingOutline />}>
        <FABChild icon={<SettingOutline />} />
      </FABChild>
      <FABChild icon={<SettingOutline />}>
        <FABChild icon={<SettingOutline />} />
      </FABChild>
      <FABChild icon={<SettingOutline />}>
        <FABChild icon={<SettingOutline />} />
      </FABChild>
    </FAB>
  );
};

export default SettingFAB;
