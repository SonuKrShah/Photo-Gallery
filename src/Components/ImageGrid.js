import React from 'react'
import useFirestore from '../Hooks/useFirestore'
import './Style/image.css'
import { motion } from 'framer-motion';

export default function ImageGrid({ setSelectedImg }) {
    const { docs } = useFirestore("Images");
    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <motion.div className="image" key={doc.id} onClick={() => {
                    setSelectedImg(doc.url);
                }}
                    layout
                    whileHover={{ opacity: 1 }}
                >
                    <motion.img src={doc.url} alt="Uploaded Img"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    />
                </motion.div>
            ))}
        </div>
    )
}
