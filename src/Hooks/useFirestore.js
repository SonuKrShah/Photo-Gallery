import { useState, useEffect } from "react";
import { firebaseFirestore } from "../Firebase/config";

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = firebaseFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(docs => {
                    documents.push({ ...docs.data(), id: docs.id });
                });
                setDocs(documents);
            })
        return () => unsub();
    }, [collection]);
    return { docs };
}

export default useFirestore;