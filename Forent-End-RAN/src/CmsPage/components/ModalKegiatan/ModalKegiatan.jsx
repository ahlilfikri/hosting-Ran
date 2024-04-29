import './ModalKegiatan.css';
import axios from 'axios';
import { useState } from 'react';
import PropTypes from 'prop-types';

const port = `${import.meta.env.VITE_BASE_URL}/`;

const ModalKegiatan = ({ onClose }) => {
    const [data, setData] = useState({
        title: '',
        content: '',
        image: [],
        status: ''
    });

    const handleInput = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const handleImage = (e) => {
        const files = e.target.files;
        const imagesArray = Array.from(files);

        setData({
            ...data,
            image: imagesArray
        });
    }


    const handleSave = async () => {
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('content', data.content);

        data.image.forEach((image) => {
            formData.append(`image`, image);
        });

        formData.append('status', data.status);

        try {
            const response = await axios.post(`${port}media`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response);
            onClose();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className="modal-body">
                <div className="modal-banner" style={{ backgroundColor: '#EBEBEB', width: '500px' }}>
                    <h2 className='text-dark fw-bold text-center mb-4 mt-3'>Add Kegiatan</h2>
                    <div className="mb-3">
                        <h6 className='text-dark fw-bold'>Title</h6>
                        <input type="text" className="form-control" placeholder="Title"
                            name="title"
                            onChange={handleInput}
                        />
                    </div>
                    <div className="mb-3">
                        <h6 className='text-dark fw-bold'>Content</h6>
                        <textarea className="form-control" placeholder="Content"
                            name="content"
                            onChange={handleInput}
                        />
                    </div>
                    <div className="mb-3">
                        <h6 className='text-dark fw-bold'>Status</h6>
                        <input type="text" className="form-control" placeholder="Status"
                            name="status"
                            onChange={handleInput}
                        />
                    </div>
                    <div className="mb-3">
                        <h6 className='text-dark fw-bold'>Upload Image</h6>
                        <input type="file" className="form-control"
                            name="image"
                            onChange={handleImage}
                            multiple={true}
                        />
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
    );
}

ModalKegiatan.propTypes = {
    onClose: PropTypes.func
}

export default ModalKegiatan;
