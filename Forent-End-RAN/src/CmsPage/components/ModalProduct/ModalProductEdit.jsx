/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';


const ModalProductEdit = ({ onClose, product }) => {
    const port = `${import.meta.env.VITE_BASE_URL}/`;
    const [editedProduct, setEditedProduct] = useState({ ...product });
    const [confirmUpdateImage, setConfirmUpdateImage] = useState(false);
    const [newImage, setNewImage] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const files = e.target.files;
        const newImages = Array.from(files).slice(0, 5);
        setNewImage(newImages);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const editedProductWithImage = {
            ...editedProduct,
            image: newImage
        };
        try {
            const formData = new FormData();
            formData.append('title', editedProductWithImage.title);
            formData.append('content', editedProductWithImage.content);
            formData.append('price', editedProductWithImage.price);
            formData.append('confirmUpdateImage', confirmUpdateImage);
            editedProductWithImage.image.forEach((image, index) => {
                formData.append(`image`, image);
            });

            const response = await axios.put(`${port}ofp/${editedProductWithImage._id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            onClose();
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="modal-body">
            <div className="modal-banner" style={{ width: '450px', backgroundColor: '#EBEBEB' }}>
                <h2 className='text-dark text-center mt-2 mb-4'>Edit Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <h6 className='text-dark'>Title</h6>
                        <input
                            className='form-control'
                            type="text"
                            name="title"
                            value={editedProduct.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mt-3">
                        <h6 className='text-dark'>Content</h6>
                        <textarea
                            className='form-control'
                            name="content"
                            value={editedProduct.content}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mt-3">
                        <h6 className='text-dark'>Price</h6>
                        <input
                            className='form-control'
                            type="text"
                            name="price"
                            value={editedProduct.price}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group mt-3">
                    <button className='btn' style={{ backgroundColor: '#FFF', color: '#0F5998', fontSize: '15px' }}
                        onClick={() => setConfirmUpdateImage(!confirmUpdateImage)}>
                        {confirmUpdateImage ? 'Cancel Update Image' : 'Update Image'}
                    </button>
                    </div>

                    {confirmUpdateImage && (
                        <div className="form-group mt-3">
                            <h6 className='text-dark'>Image</h6>
                            <input 
                                className='form-control'
                                type="file" 
                                name="image" 
                                onChange={handleImageChange} 
                                accept="image/*"
                                multiple
                                required 
                            />
                        </div>
                    )}
                    {/* <div className="form-group mt-3">
                        <h6 className='text-dark'>Image</h6>
                        <input
                            className='form-control'
                            type="file"
                            name="image"
                            onChange={handleImageChange}
                            accept="image/*"
                            multiple
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

ModalProductEdit.propTypes = {
    onClose: PropTypes.func.isRequired,
    product: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        image: PropTypes.array
    })
};

export default ModalProductEdit;
