/* eslint-disable no-unused-vars */
import './ModalMitra.css';
const port = `${import.meta.env.VITE_BASE_URL}/`;
import axios from 'axios';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ModalMitra = ({ onClose }) => {
    const [data, setData] = useState({
        title: '',
        image: null,
    });

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
        formData.append('title', data.title);
        formData.append('image', data.image);

        try {
            const response = await axios.post(`${port}mitra`, formData);
            console.log(response);
            onClose();
        } catch (error) {
            console.log(error.message);
        }
    }



    return (
        <>
            <div className="modal-body">
                <div className="modal-banner" style={{ backgroundColor: '#EBEBEB', width: '500px' }}>
                    <h2 className='text-dark fw-bold text-center mb-4 mt-3'>Add Mitra</h2>
                    <div className="mb-3">
                        <h6 className="text-dark fw-bold">Input Title</h6>
                        <input type="text" className="form-control" placeholder="Title"
                            name="title"
                            onChange={handleInput} />
                    </div>
                    <div className="mb-3">
                        <h6 className="text-dark fw-bold">Input Image</h6>
                        <input type="file" className="form-control"
                            name="image"
                            onChange={handleImage} />
                    </div>
                    <div className="d-flex align-items-end justify-content-end mt-4 mb-4">
                        <button className="btn ps-3 pe-3 me-2" style={{ backgroundColor: '#FFF', color: '#0F5998', fontSize: '15px' }} onClick={onClose}>Close</button>
                        <button className="btn ps-3 pe-3 text-white" style={{ backgroundColor: '#0F5998', fontSize: '15px' }}
                            onClick={handleSave}
                        >Submit</button>
                    </div>
                    {/* <div className="modal-banner-button">
                        <button className="btn btn-warning" onClick={onClose}>Cancel</button>
                        <button className="btn btn-success" onClick={handleSave}>Save</button>
                    </div> */}
                </div>
            </div>

        </>
    )
}

ModalMitra.propTypes = {
    onClose: PropTypes.func
}

export default ModalMitra;
