/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';


const ModalMitraEdit = ({ onClose, mitra }) => {
    const port = `${import.meta.env.VITE_BASE_URL}/`;
    const [editedMitra, setEditedMitra] = useState({ ...mitra });
    const [newImage, setNewImage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedMitra(prevMitra => ({
            ...prevMitra,
            [name]: value
        }));
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setNewImage(file);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const editedMitraWithImage = {
            ...editedMitra,
            image: newImage
        }
        try {
            const formData = new FormData();
            formData.append('title', editedMitraWithImage.title);
            formData.append('image', newImage);

            const response = await axios.put(`${port}mitra/${editedMitraWithImage._id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response);
            onClose();
        } catch (error) {
            console.log(error.message);
        }
    }



    return(
        <>
        <div className="modal-body">
            <div className="modal-banner" style={{ width: '450px', backgroundColor: '#EBEBEB' }}>
                <h2 className='text-dark text-center mt-2 mb-4'>Edit Mitra</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <h6 className='text-dark'>Title</h6>
                        <input 
                            className='form-control'
                            type="text" 
                            name="title" 
                            value={editedMitra.title} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="form-group mt-3">
                        <h6 className='text-dark'>Image</h6>
                        <input 
                            className='form-control'
                            type="file" 
                            name="image" 
                            accept="image/*"
                            onChange={handleImageChange} 
                        />
                    </div>
                    <div className="d-flex align-items-end justify-content-end mt-5 mb-3">
                        <button className="btn ps-3 pe-3 me-2" style={{ backgroundColor: '#FFF', color: '#0F5998', fontSize: '15px', width: '90px' }} onClick={onClose}>Close</button>
                        <button className="btn ps-3 pe-3 text-white" type="submit" style={{ backgroundColor: '#0F5998', fontSize: '15px', width: '90px' }}>Submit</button>
                    </div>
                    {/* <button type="submit">Save</button>
                    <button onClick={onClose}>Cancel</button> */}
                </form>
            </div>
        </div>
        
        </>
    )
}

ModalMitraEdit.propTypes = {
    onClose: PropTypes.func.isRequired,
    mitra: PropTypes.object.isRequired
}

export default ModalMitraEdit;
