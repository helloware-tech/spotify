import AppLogo from "../../common/AppLogo/AppLogo";
import MenuItem from "../MenuItem/MenuItem";
import "./style.css";

const Menu = () => {
  return (
    <menu className="bg_black d-flex flex-column justify-content-between flex-nowrap p-4">
      <nav>
        <header className="mb-5">
          <AppLogo />
        </header>
        <ul className="d-flex flex-column">
          <MenuItem title="Home" path="home" />
          <MenuItem title="Contact" path="contact" />
          <MenuItem title="Playlist" path="playlist" />
          <MenuItem title="Songs" path="songs" />
        </ul>
      </nav>
    </menu>
  );
};

export default Menu;
