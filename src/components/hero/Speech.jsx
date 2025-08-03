



import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Speech Bubble */}
      <motion.div
        className="bubble"
        animate={{
          y: [0, -5, 0], // Floating effect
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
      >
        <TypeAnimation
          sequence={[
            "Let me show you my skills.",
            1500,
            "Have a glance at my projects and learnings...!",
            1500,
            "Let's build something amazing together! 🚀",
            2000,
          ]}
          wrapper="span"
          speed={30}
          deletionSpeed={30}
          repeat={Infinity}
        />
      </motion.div>

      {/* Character Image with Subtle Bounce */}
      <motion.img
        src="/hero.png"
        alt="Character"
        animate={{
          y: [0, -3, 0], // Bouncing effect
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}

export default Speech
