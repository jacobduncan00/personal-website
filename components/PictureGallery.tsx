import { motion } from "framer-motion";
import ImageCarousel from "./Carousel";

const GalleryCard = ({ section }: { section: string }) => {
  return (
    <motion.div
      className="col-span-3 md:col-span-2 bg-white dark:bg-gray-900
			 rounded-3xl text-gray-600 dark:text-gray-300 aspect-2/1 pb-4 md:pb-0 flex relative overflow-hidden"
      whileHover="groupHover"
      animate={{ opacity: ["all", "about"].includes(section) ? 1 : 0.3 }}
      variants={{
        groupHover: {
          scale: 1.01,
          transition: {
            duration: 0.1,
            ease: "easeInOut",
          },
        },
      }}
    >
      <ImageCarousel />
    </motion.div>
  );
};

export default GalleryCard;
