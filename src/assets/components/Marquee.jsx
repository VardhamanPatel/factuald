import React from "react"
import { motion } from "framer-motion"

const Marquee = ({ imagesUrl, direction }) => {
    return (
        <div className="flex w-full overflow-hidden">
            <motion.div
                initial={{ x: direction === "left" ? "0" : "-100%" }}
                animate={{ x: direction === "left" ? "-100%" : "0" }}
                transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                className="flex flex-shrink-0 gap-20 py-4 pr-24"
            >
                {imagesUrl.map((url, index) => (
                    <img key={index} src={url} className="w-[30vw] sm:w-[14vw] lg:w-[12vw]" />
                ))}
            </motion.div>

            <motion.div
                initial={{ x: direction === "left" ? "0" : "-100%" }}
                animate={{ x: direction === "left" ? "-100%" : "0" }}
                transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                className="flex flex-shrink-0 gap-20 py-4 pr-24"
            >
                {imagesUrl.map((url, index) => (
                    <img key={index} src={url} className="w-[12vw]" />
                ))}
            </motion.div>
        </div>
    )
}

export default Marquee