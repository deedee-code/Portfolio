import heroImage from "../assets/hero-image.jpg";
import { ABOUT_TEXT } from "../constants";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="className=border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-4xl text-center">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              src={heroImage}
              alt="Backend Developer"
              className="rounded-2xl"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6"> {ABOUT_TEXT} </p>
          </div>

          <button className="bg-green-800 hover:bg-green-600 text-black font-bold py-2 px-4 rounded-md">
            <a
              href="/Doris Owoeye.pdf"
              download
              className="flex items-center gap-2"
            >
              Download CV
              <FiDownload />
            </a>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
