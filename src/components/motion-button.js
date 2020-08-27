import React, { Component } from "react";
import { motion } from "framer-motion";

class MotionButton extends Component {
  render() {
    return (
      <motion.button
        whileHover={{
          scale: 1.2,
          transition: { type: "spring" },
        }}
        whileTap={{ scale: 0.9 }}
      >
        {this.props.name}
      </motion.button>
    );
  }
}
export default MotionButton;
