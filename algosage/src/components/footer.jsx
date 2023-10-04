import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoDiscord, BiLogoGithub } from "react-icons/bi";
import { FaTelegram } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

function Footer() {
  return (
    <footer className="flex items-center justify-end gap-3 p-6">
      <a
        href="https://twitter.com/GammaStrategies"
        className="text-white/80 hover:text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiTwitterXFill />
      </a>
      <a
        href="https://twitter.com/GammaStrategies"
        className="text-white/80 hover:text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BiLogoDiscord />
      </a>
      <a
        href="https://twitter.com/GammaStrategies"
        className="text-white/80 hover:text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BiLogoGithub />
      </a>
      <a
        href="https://twitter.com/GammaStrategies"
        className="text-white/80 hover:text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTelegram />
      </a>
      <a
        href="https://twitter.com/GammaStrategies"
        className="text-white/80 hover:text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoDocumentTextOutline />
      </a>
    </footer>
  );
}

export default Footer;
