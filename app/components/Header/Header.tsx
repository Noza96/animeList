import style from "./Header.module.scss";

const navBarItems = ["Home", "Anime"];

const Header = () => {
  return (
    <div className={style.navBar}>
      <ul className={style.navBar__list}>
        {navBarItems.map((item, key) => {
          return <li className={style.navBar__list__item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Header;
