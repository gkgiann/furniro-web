import cart from "../../assets/cart.svg";
import logo from "../../assets/logo.svg";
import user from "../../assets/user.svg";
import { HeaderIconLink } from "./HeaderIconLink";
import { HeaderLink } from "./HeaderLink";

export function Header() {
  return (
    <header className="sticky top-0 flex justify-between items-center py-5 px-8">
      <a href="/">
        <img src={logo} alt="Logo" />
      </a>
      <div className="flex gap-20 font-medium">
        <HeaderLink label="Home" />
        <HeaderLink label="Shop" />
        <HeaderLink label="About" />
        <HeaderLink label="Contact" />
      </div>
      <div className="flex gap-8">
        <HeaderIconLink src={user} alt="Usuário" />
        <HeaderIconLink src={cart} alt="Carrihno" />
      </div>
    </header>
  );
}
