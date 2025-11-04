import { motion } from "framer-motion";

function SendAnimation() {
  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      {/* Postcard flying */}
      <motion.div
        className="w-64 h-40 bg-white shadow-lg rounded-lg absolute top-32"
        initial={{ y: 0, rotate: 0 }}
        animate={{ y: -150, rotate: 15 }}
        transition={{ duration: 2 }}
      />

      {/* Mailbox */}
      <motion.img
        src="/mailbox.png"
        className="absolute bottom-10 left-10 w-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />

      {/* Postman on scooty */}
      <motion.img
        src="/postman.png"
        className="absolute bottom-0 w-16"
        initial={{ x: -200 }}
        animate={{ x: 300 }}
        transition={{ delay: 2, duration: 2 }}
      />

      {/* Hearts */}
      <motion.img
        src="/heart.png"
        className="absolute top-10 left-20 w-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      />

      {/* Stamp */}
      <motion.img
        src="/stamp.png"
        className="absolute top-5 right-10 w-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      />
    </div>
  );
}

export default SendAnimation;
