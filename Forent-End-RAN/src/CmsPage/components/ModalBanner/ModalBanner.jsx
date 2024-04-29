/* eslint-disable no-unused-vars */
// import './ModalBanner.css';
const port = `${import.meta.env.VITE_BASE_URL}/`;
import axios from 'axios';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const Modalbanner = ({ onClose }) => {
    const [data, setData] = useState(
        {
            nama: '',
            image: ''
        }
    );

    const handleInput = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleImage = (e) => {
        setData({
            ...data,
            image: e.target.files[0]
        })
    }

    const handleSave = async () => {
        const formData = new FormData();
        formData.append('nama', data.nama);
        formData.append('image', data.image);

        try {
            const response = await axios.post(`${port}banner`, formData);
            console.log(response);
            onClose();
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <div className="modal-body p-4">
                <div className="modal-banner" style={{ backgroundColor: '#EBEBEB' }}>
                    <h2 className="text-dark fw-bold text-center mb-4 mt-3">Add Banner</h2>

                    <div className="mb-3">
                        <h6 className="text-dark fw-bold">Title</h6>
                        <input type="text" className="form-control" placeholder="Banner Digital 1"
                            name="nama"
                            onChange={handleInput} 
                            style={{ borderRadius: '7px' }} required/>
                    </div>
                    <div className="mb-3">
                        <h6 className="text-dark fw-bold">Upload Image</h6>
                        <input type="file" className="form-control"
                            name="image"
                            onChange={handleImage} required/>
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

Modalbanner.propTypes = {
    onClose: PropTypes.func
}

export default Modalbanner;
