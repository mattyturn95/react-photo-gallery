import React from 'react'
import useFirestore from '../hooks/useFirestore';
import {motion} from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {

    const { docs } = useFirestore('images');
    console.log(docs)
    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <motion.div className="img-wrap" key={doc.id}
                layout
                whileHover={{ opacity: 10}}
                onClick={() => setSelectedImg(doc.url)}                
                >
                    <img src={doc.url} alt="image from firebase" />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid
