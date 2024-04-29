import './ModalKategori.css';
const port = `${import.meta.env.VITE_BASE_URL}/`;
import axios from 'axios';
import { useState, useEffect } from 'react'; 

const ModalKategori = ({ onClose }) => {
    const [data, setData] = useState(
        {
            nama: '',
        }
    );

    const handleInput = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSave = async () => {
        try{
            const response = await axios.post(`${port}kategori`, data);
            console.log(response);
            onClose();
        }catch(error){
            console.log(error.message);
        }
    }


    return(
        <>
            <div className="modal-body">
                <div className="modal-banner" style={{ backgroundColor: '#EBEBEB', width: '500px' }}>
                    <h2 className='text-dark fw-bold text-center mb-4 mt-3'>Add Kategori</h2>
                    <div className="mb-3">
                        <h6 className="text-dark fw-bold">Title</h6>
                        <input type="text" className="form-control" placeholder="Title"
                            name="nama" 
                            onChange={handleInput}/>
                    </div>
                    <div className="d-flex align-items-end justify-content-end mt-4 mb-4">
                        <button className="btn ps-3 pe-3 me-2" style={{ backgroundColor: '#FFF', color: '#0F5998', fontSize: '15px' }} onClick={onClose}>Close</button>
                        <button className="btn ps-3 pe-3 text-white" style={{ backgroundColor: '#0F5998', fontSize: '15px' }}
                            onClick={handleSave}
                        >Submit</button>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default ModalKategori;
