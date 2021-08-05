import React from 'react'
import './Style/image.css'
import { motion } from 'framer-motion';


export default function Modal({ selectedImg, setSelectedImg }) {
    function Handler(e) {
        if (e.target.classList.contains("backdrop")) {
            setSelectedImg(null)
        }
    }

    return (
        <motion.div className="backdrop" onClick={Handler}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.img src={selectedImg} alt="Enlarged Pic"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
            />
        </motion.div>

    )
}
