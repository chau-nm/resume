import classNames from "classnames";
import ListSwitchButton from "component/ListSwitchButton";
import {ALBUM, EXPERIENCE, HOME, REPOSITORY, SKILL, SUMMARY,} from "feature/main/sections";
import {FC, useEffect, useRef, useState} from "react";
import {Link} from "react-scroll";
import styles from "./header.module.scss";

export const Menu: FC = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    const windowClick = (event: MouseEvent) => {
      if (openMobileMenu && !menuRef.current?.contains(event.target as Node)) {
        closeMobileMenu();
      }
    };

    window.addEventListener("click", windowClick);
    return () => window.removeEventListener("click", windowClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openMobileMenu]);

  const closeMobileMenu = () => {
    setOpenMobileMenu(false);
  };

  return (
    <div
      ref={menuRef}
      className={classNames(styles.menu, { [styles.active]: openMobileMenu })}
    >
      <ListSwitchButton active={openMobileMenu} setActive={setOpenMobileMenu} />
      <ul>
        <li>
          <Link to={HOME} smooth duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to={SUMMARY} smooth duration={500}>
            Summary
          </Link>
        </li>
        <li>
          <Link to={ALBUM} smooth duration={500}>
            Album
          </Link>
        </li>
        <li>
          <Link to={SKILL} smooth duration={500}>
            Skill
          </Link>
        </li>
        <li>
          <Link to={EXPERIENCE} smooth duration={500}>
            Experience
          </Link>
        </li>
        <li>
          <Link to={REPOSITORY} smooth duration={500}>
            Repository
          </Link>
        </li>
      </ul>
    </div>
  );
};
