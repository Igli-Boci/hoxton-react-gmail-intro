import "../stylesheets/header.css";
import HeaderLeftMenu from "./leftMenuHeader";
import HeaderSearchBar from "./searchBarHeader";
function Header() {
  return (
    <header className="header">
      <HeaderLeftMenu />
      <HeaderSearchBar />
    </header>
  );
}
export default Header;