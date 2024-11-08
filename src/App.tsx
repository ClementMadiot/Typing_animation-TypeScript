import regexString from "./regexString";
import { motion, Variant } from "framer-motion";

// text
const heading = "Elegent Text Reveal";
const text = `
  🌐✨ Transform your web content using Framer Motion's UTF-16 powered text animations. 
  Each character, a vibrant performer, dances dynamically, weaving a captivating narrative. Elevate user engagement user with the art of animated storytelling. 🚀🎉
  #WebDev, #Animation
`;
// Setup animation Variants
const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

function App() {
  const headingChars = regexString(heading);
  const textChars = regexString(text);

  // console.log('Simple split', text.split("") );
  // console.log('Split by regex', `textChars` );

  return (
    <>
      <motion.h1
        initial="hidden"
        whileInView="reveal"
        transition={{ staggerChildren: 0.04 }}
      >
        {headingChars.map((char) => (
          <motion.span
            key={char}
            transition={{ duration: 0.5 }}
            variants={charVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        initial="hidden"
        whileInView="reveal"
        transition={{ staggerChildren: 0.02 }}
      >
        {textChars.map((char) => (
          <motion.span
            key={char}
            transition={{ duration: 0.35 }}
            variants={charVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>
    </>
  );
}

export default App;
