import Image from "next/image";
import Link from "next/link";
import meImg from "../../../public/me.png";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="bg-white dark:bg-black py-20">
      <div className="container mx-auto flex justify-between items-center max-lg:flex-col max-lg:gap-10">
        <div className="flex flex-col gap-8 max-lg:items-center">
          <div>
            <Link href={"/"}>
              <Image src={meImg} alt="logo" width={100} height={100} />
            </Link>
          </div>
          <div className="flex gap-5">
            <Link
              href={"/"}
              className="text-black dark:text-white text-2xl h-9 w-9 flex justify-center items-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-full transition-colors"
            >
              <IoLogoGithub />
            </Link>
            <Link
              href={"/"}
              className="text-black dark:text-white text-2xl h-9 w-9 flex justify-center items-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-full transition-colors"
            >
              <FaLinkedin />
            </Link>
            <Link
              href={"/"}
              className="text-black dark:text-white text-2xl h-9 w-9 flex justify-center items-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-full transition-colors"
            >
              <FaXTwitter />
            </Link>
            <Link
              href={"/"}
              className="text-black dark:text-white text-2xl h-9 w-9 flex justify-center items-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-full transition-colors"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div>
          <nav className="flex gap-10 text-lg text-black dark:text-white">
            <Link
              className="cursor-pointer hover:text-red-500 transition-colors"
              href="/about"
            >
              About
            </Link>
            <Link
              className="cursor-pointer hover:text-red-500 transition-colors"
              href="/skills"
            >
              Skills
            </Link>
            <Link
              className="cursor-pointer hover:text-red-500 transition-colors"
              href="/works"
            >
              Works
            </Link>
            <Link
              className="cursor-pointer hover:text-red-500 transition-colors"
              href="/contact"
            >
              Tags
            </Link>
          </nav>
        </div>
        <div>
          <p className="text-[#616264]">
            © {year} Mohamed Dahani. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
