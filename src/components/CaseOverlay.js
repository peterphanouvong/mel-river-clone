import React from "react";
import { motion } from "framer-motion";

const CaseOverlay = () => {
  return (
    <motion.div className="case-transition" style={{ backgroud: "black" }}>
      <motion.div className="case-transition-cover"></motion.div>
    </motion.div>
  );
};

export default CaseOverlay;
