import { useState, useEffect } from "react";
import { firebaseStorage, firebaseFirestore, timestamp } from "../Firebase/config"

const useStorage = (file, setFile) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);



    // We are using a useEffect hook that will get trigerred everytime we change the contents of the file. This will actually store the contents i.e., the images to the firestore database.

    useEffect(() => {
        // Getting the reference of the firestore.
        const storageRef = firebaseStorage.ref(file.name);
        const collectionRef = firebaseFirestore.collection("Images");
        storageRef.put(file).on('state_changed', (snap) => {
            // Used to get the percentage.
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            // Called when the image has been uploaded.
            const url = await storageRef.getDownloadURL();
            setUrl(url);
            const createdAt = timestamp();
            collectionRef.add({ url: url, createdAt: createdAt });
            // collectionRef.add({ url, createdAt });  This is also valid.
        })
    }, [file]);

    return { progress, url, error };
}


export default useStorage;
