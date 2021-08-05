import React, { useState } from 'react'
import './Styles/ProgressBar.css'
import ProgressBar from './ProgressBar';



export default function UploadFile() {
    const [File, setFile] = useState('');
    const [Error, setError] = useState('');
    const type = ['image/png', 'image/jpeg'];
    const ChangeHandler = (e) => {
        let selected = e.target.files[0];
        if (type.includes(selected.type)) {
            setFile(selected);
            setError('');
        }
        else {
            setError("Please use a valid Image in jpeg or png file");
            setFile(null);
            console.log("Invalid Option Selected");
        }
    }
    return (
        <form>
            <label htmlFor="files" className="btn btn-select-files" title="Upload Image"><i className="fas fa-plus"></i></label>
            <input type="file" onChange={ChangeHandler} className="FileInput" id="files" style={{ visibility: 'hidden' }} />
            <br />
            <div className="output">
                {Error && <div className="error">{Error}</div>}
                {File && <div>{File.name}</div>}
                {File && <ProgressBar file={File} setFile={setFile} />}
            </div>
        </form >
    )
}
