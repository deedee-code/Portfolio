import { CONTACT } from "../constants";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.Address}
        </motion.p>
        <motion.p
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          initial={{
            opacity: 0,
            x: 100,
          }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.PhoneNo}
        </motion.p>
        <a href="mailto:deedeeowoeye@gmail.com" className="border-b">
          {CONTACT.Email}
        </a>
      </div>
    </div>
  );
}
