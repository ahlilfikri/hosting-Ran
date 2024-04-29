/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const ModalKegiatanEdit = ({ onClose, kegiatan }) => {
    const port = `${import.meta.env.VITE_BASE_URL}/`;
    const [editedKegiatan, setEditedKegiatan] = useState({ ...kegiatan });
    const [confirmUpdateImage, setConfirmUpdateImage] = useState(false);
    const [newImages, setNewImages] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedKegiatan(prevKegiatan => ({
            ...prevKegiatan,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const files = e.target.files;
        const newImages = Array.from(files).slice(0, 5);
        setNewImages(newImages);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const editedKegiatanWithImage = {
            ...editedKegiatan,
            image: newImages
        };
        try {
            const formData = new FormData();
            formData.append('title', editedKegiatanWithImage.title);
            formData.append('content', editedKegiatanWithImage.content);
            formData.append('status', editedKegiatanWithImage.status);
            formData.append('confirmUpdateImage', confirmUpdateImage);
            editedKegiatanWithImage.image.forEach((image, index) => {
                formData.append(`image`, image);
            });

            const response = await axios.put(`${port}media/${editedKegiatanWithImage._id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response);
            onClose();
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="modal-body">
            <div className="modal-banner" style={{ width: '450px', backgroundColor: '#EBEBEB' }}>
                <h2 className='text-dark text-center mt-2 mb-4'>Edit Kegiatan</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <h6 className='text-dark'>Title</h6>
                        <input
                            className='form-control'
                            type="text"
                            name="title"
                            value={editedKegiatan.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mt-3">
                        <h6 className='text-dark'>Content</h6>
                        <textarea
                            className='form-control'
                            name="content"
                            value={editedKegiatan.content}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mt-3">
                        <h6 className='text-dark'>Status</h6>
                        <input
                            className='form-control'
                            type="text"
                            name="status"
                            value={editedKegiatan.status}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <button className='btn' style={{ backgroundColor: '#FFF', color: '#0F5998', fontSize: '15px' }}
                            onClick={() => setConfirmUpdateImage(!confirmUpdateImage)}>
                            {confirmUpdateImage ? 'Cancel Update Image' : 'Update Image'}
                        </button>
                    </div>

                    {
                        confirmUpdateImage && (
                            <div className="form-group">
                                <h6 className='text-dark mt-3'>Upload Image</h6>
                                <input
                                    className='form-control'
                                    type="file"
                                    name="image"
                                    onChange={handleImageChange}
                                    accept='image/*'
                                    multiple
                                    required
                                />
                            </div>
                        )
                    }
                    {/* <div className="form-group mt-3">
                        <h6 className='text-dark mt-3'>Upload Image</h6>
                        <input
                            className='form-control'
                            type="file"
                            name="image"
                            onChange={handleImageChange}
                            accept='image/*'
                            multiple
                            required
                        />
                    </div> */}
                    <div className="d-flex align-items-end justify-content-end mt-5 mb-3">
                        <button className="btn ps-3 pe-3 me-2" style={{ backgroundColor: '#FFF', color: '#0F5998', fontSize: '15px', width: '90px' }} onClick={onClose}>Close</button>
                        <button className="btn ps-3 pe-3 text-white" type="submit" style={{ backgroundColor: '#0F5998', fontSize: '15px', width: '90px' }}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

ModalKegiatanEdit.propTypes = {
    onClose: PropTypes.func.isRequired,
    kegiatan: PropTypes.object.isRequired
};

export default ModalKegiatanEdit;
