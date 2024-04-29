/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const ModalBannerEdit = ({ onClose, banner }) => {
    const port = `${import.meta.env.VITE_BASE_URL}/`;
    const [editedBanner, setEditedBanner] = useState({ ...banner });
    const [newImage, setNewImage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedBanner(prevBanner => ({
            ...prevBanner,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setNewImage(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const editedBannerWithImage = {
            ...editedBanner,
            image: newImage
        };
        try {
            const formData = new FormData();
            formData.append('nama', editedBannerWithImage.nama);
            formData.append('image', newImage);

            const response = await axios.put(`${port}banner/${editedBannerWithImage._id}`, formData, {
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
            <div className="modal-banner" style={{ backgroundColor: '#EBEBEB' }}>
                <h2 className="text-dark fw-bold text-center mb-4 mt-3">Edit Banner</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mt-2">
                        <h6 className="text-dark fw-bold">Title</h6>
                        <input
                            className="form-control mt-2"
                            type="text"
                            name="nama"
                            value={editedBanner.nama}
                            onChange={handleChange}

                        />
                    </div>
                    <div className="mt-3">
                        <h6 className="text-dark fw-bold">Upload Image</h6>
                        <input
                            className="form-control mt-2"
                            type="file"
                            name="image"
                            accept='image/*'
                            onChange={handleImageChange}
                        />
                    </div>
                    <div className="d-flex align-items-end justify-content-end mt-5 mb-4">
                        <button className="btn ps-3 pe-3 me-2" style={{ backgroundColor: '#FFF', color: '#0F5998', fontSize: '15px', width: '90px' }} onClick={onClose}>Close</button>
                        <button className="btn ps-3 pe-3 text-white" type="submit" style={{ backgroundColor: '#0F5998', fontSize: '15px', width: '90px' }}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

ModalBannerEdit.propTypes = {
    onClose: PropTypes.func.isRequired,
    banner: PropTypes.object.isRequired
};

export default ModalBannerEdit;
