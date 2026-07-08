import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import twitterIcon from "../../assets/twitter.svg";
import { Links } from "./Links";
import { Newsletter } from "./Newsletter";

export function Footer() {
  return (
    <footer className="border-t border-footer text-footer-gray">
      <div className="mx-auto max-w-310 px-2 py-14 sm:px-4">
        <div className="flex flex-col flex-wrap items-center gap-12 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <div className="w-max">
            <h1 className="text-2xl font-bold text-black">Furniro.</h1>

            <p className="mt-12.5">
              400 University Drive Suite 200 Coral <br /> Gables, <br /> FL
              33134 USA
            </p>

            <div className="mt-13.75 flex gap-4 sm:gap-6 md:gap-7 lg:gap-9 xl:gap-11.5">
              <a
                href="https://www.linkedin.com/company/airevolutioncompany/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-[0_0_12px_rgba(0,0,0,0.2)]"
              >
                <img src={facebookIcon} alt="Facebook" className="h-4 w-4" />
              </a>

              <a
                href="https://www.instagram.com/aircompany.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-[0_0_12px_rgba(0,0,0,0.2)]"
              >
                <img src={instagramIcon} alt="Instagram" className="h-4 w-4" />
              </a>

              <a
                href="https://www.instagram.com/aircompany.ai/s"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-[0_0_12px_rgba(0,0,0,0.2)]"
              >
                <img src={twitterIcon} alt="Twitter" className="h-4 w-4" />
              </a>

              <a
                href="https://www.linkedin.com/company/airevolutioncompany/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-[0_0_12px_rgba(0,0,0,0.2)]"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="flex gap-12 sm:gap-20 md:gap-30">
            <Links title="Links" links={["Home", "Shop", "About", "Contact"]} />

            <Links
              title="Help"
              links={["Payment Options", "Returns", "Privacy Policies"]}
            />
          </div>

          <Newsletter />
        </div>

        <div className="mt-12 border-t border-footer pt-8.75">
          <p className="text-center text-black sm:text-left">
            2023 furino. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
