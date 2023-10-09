import PropTypes from "prop-types";

import AnimatedLetters from "../../Animation/AnimatedLetters";
import { motion } from "framer-motion";

export const BannerRowBottom = ({ title, color }) => (
  <motion.div
    initial={{ y: 310 }}
    animate={{ y: 0 }}
    transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1, delay: 0.7 }}
  >
    <AnimatedLetters title={title} color={color} />
  </motion.div>
);

BannerRowBottom.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
};
