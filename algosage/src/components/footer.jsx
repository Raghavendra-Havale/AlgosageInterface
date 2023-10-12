import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoDiscord } from "react-icons/bi";
import { AiFillMediumSquare, AiOutlineMail } from "react-icons/ai";
import { IoDocumentTextOutline } from "react-icons/io5";

function Footer() {
  return (
    <footer className="flex items-center justify-end gap-3 p-6">
      <a
        href="https://twitter.com/Range_Protocol"
        className="text-white/80 hover:text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiTwitterXFill />
      </a>
      <a
        href="https://discord.com/invite/range-protocol"
        className="text-white/80 hover:text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BiLogoDiscord />
      </a>
      <a
        href="https://rangeprotocol.medium.com/"
        className="text-white/80 hover:text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillMediumSquare />
      </a>
      <a
        href="mailto:contact@rangeprotocol.com"
        className="text-white/80 hover:text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineMail />
      </a>
      <a
        href="https://range-protocol.gitbook.io/range-protocol/"
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
