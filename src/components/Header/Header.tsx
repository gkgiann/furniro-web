import { useState } from "react";
import burgerMenu from "../../assets/burger-menu.svg";
import cart from "../../assets/cart.svg";
import closeMenu from "../../assets/close.svg";
import logo from "../../assets/logo.svg";
import user from "../../assets/user.svg";
import { HeaderIconLink } from "./HeaderIconLink";
import { HeaderLink } from "./HeaderLink";

const links = ["Home", "Shop", "About", "Contact"];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky z-50 top-0 flex justify-between items-center py-5 px-8 bg-white text-black">
      <a href="/">
        <img className="h-8 sm:h-10 md:h-12" src={logo} alt="Logo" />
      </a>
      <div className="hidden gap-6 font-medium sm:flex md:gap-12 lg:gap-20 ">
        {links.map((label) => (
          <HeaderLink key={label} label={label} />
        ))}
      </div>
      <div className="hidden gap-4 sm:flex md:gap-8">
        <HeaderIconLink src={user} alt="Usuário" />
        <HeaderIconLink src={cart} alt="Carrihno" />
      </div>

      <button
        className="cursor-pointer sm:hidden"
        onClick={() => setIsMenuOpen((state) => !state)}
      >
        <img
          className="w-8 hover:scale-110 transition"
          src={burgerMenu}
          alt="Menu"
        />
      </button>

      {isMenuOpen && (
        <div className="fixed inset-0 flex items-start justify-center bg-black/35 px-4 pt-24 backdrop-blur-[2px] sm:hidden">
          <div className="relative w-full max-w-xs rounded-2xl bg-white p-6 text-center shadow-lg">
            <button
              className="absolute right-4 top-4 cursor-pointer hover:scale-110 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              <img className="w-6" src={closeMenu} alt="Fechar" />
            </button>

            <nav className="flex flex-col mx-auto w-fit gap-4 pt-4 font-medium text-lg">
              {links.map((label) => (
                <HeaderLink key={label} label={label} />
              ))}
            </nav>

            <div className="mt-6 flex justify-center gap-6">
              <HeaderIconLink src={user} alt="Usuário" />
              <HeaderIconLink src={cart} alt="Carrinho" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
