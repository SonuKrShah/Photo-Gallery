import './App.css';
import Title from './Components/Title'
import UploadFile from './Firebase/UploadFile'
import ImageGrid from './Components/ImageGrid'
import Modal from './Components/Modal';
import { useState } from 'react'

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadFile />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
