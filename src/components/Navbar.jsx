import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

export default function Navbar() {
  return (
    <nav className="mb-20 flex justify-between items-center py-6">
      <div className="flex flex-shrink-0 items-center">
        <h3 className="text-3xl font-bold text-green-900 uppercase font-style: italic">
          Doris
        </h3>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/doris-oladotun-owoeye-84a38014b/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/deedee-code">
          <FaGithub />
        </a>
        <a href="mailto:deedeeowoeye@gmail.com">
          <CgMail />
        </a>
      </div>
    </nav>
  );
}
