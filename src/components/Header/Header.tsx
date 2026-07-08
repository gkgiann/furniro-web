import clsx from "clsx";
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
    <header className="sticky top-0 z-50 bg-white px-8 py-5 text-black">
      <div className="mx-auto flex max-w-360 items-center justify-between">
        <a href="/">
          <img className="h-8 sm:h-10 md:h-12" src={logo} alt="Logo" />
        </a>
        <div
          className={clsx(
            "hidden gap-6 font-medium",
            "sm:flex",
            "md:gap-12 lg:gap-20",
          )}
        >
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
            className="w-8 transition hover:scale-110"
            src={burgerMenu}
            alt="Menu"
          />
        </button>

        {isMenuOpen && (
          <div
            className={clsx(
              "fixed inset-0 flex items-start justify-center px-4 pt-24",
              "bg-black/35 backdrop-blur-[2px]",
              "sm:hidden",
            )}
          >
            <div className="relative w-full max-w-xs rounded-2xl bg-white p-6 text-center shadow-lg">
              <button
                className="absolute top-4 right-4 cursor-pointer transition hover:scale-110"
                onClick={() => setIsMenuOpen(false)}
              >
                <img className="w-6" src={closeMenu} alt="Fechar" />
              </button>

              <nav className="mx-auto flex w-fit flex-col gap-4 pt-4 text-lg font-medium">
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
      </div>
    </header>
  );
}
