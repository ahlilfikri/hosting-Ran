/* eslint-disable no-unused-vars */
// import './ModalProduct.css';
import axios from 'axios';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Modalbanner = ({ onClose }) => {
    const [data, setData] = useState({
        title: '',
        content: '',
        price: '',
        kategori: '',
        images: [],
        desktipsi: '',
        spesifikasi: ''
    });

    const handleInput = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleImage = (e) => {
        const files = e.target.files;
        const newImages = Array.from(files).slice(0, 5);
        setData({
            ...data,
            images: newImages
        });
    };

    const handleSave = async () => {
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('content', data.content);
        formData.append('price', data.price);
        formData.append('kategori', data.kategori);
        formData.append('desktipsi', data.desktipsi);
        formData.append('spesifikasi', data.spesifikasi);

        // Append images to formData
        data.images.forEach((image, index) => {
            formData.append(`image`, image);
        });

        try {
            const response = await axios.post('http://localhost:3700/ofp', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response);
            onClose();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="modal-body" style={{ overflow: 'auto' }}>
            <div className="modal-banner" style={{ backgroundColor: '#EBEBEB' }}>
                <h2 className="text-dark fw-bold text-center mb-4 mt-3">Add Product</h2>
                <div className='form-group'>
                    <h6 className='text-dark'>Title</h6>
                    <input
                        className='form-control'
                        type="text"
                        name="title"
                        placeholder='Nama Produk'
                        onChange={handleInput}
                        required
                    />
                </div>
                <div className='form-group'>
                    <h6 className='text-dark mt-3'>Content</h6>
                    <input
                        className='form-control'
                        type="text"
                        name="content"
                        placeholder='Content'
                        onChange={handleInput}
                        required
                    />
                </div>
                <div className="form-group">
                    <h6 className='text-dark mt-3'>Price</h6>
                    <input
                        className='form-control'
                        type="text"
                        name="price"
                        placeholder='Price'
                        onChange={handleInput}
                        required
                    />
                </div>
                <div className="form-group">
                    <h6 className='text-dark mt-3'>Kategori</h6>
                    {/* <input
                        className='form-control'
                        type="text"
                        name="kategori"
                        placeholder='Kategori'
                        onChange={handleInput}
                        required
                    /> */}
                    {/* ubah input di atas menjadi dropdown input */}
                    <select
                        className='form-control'
                        name="kategori"
                        onChange={handleInput}
                        required
                    >
                        <option value="">Pilih Kategori</option>
                        <option value="AKL">AKL</option>
                        <option value="AKD">AKD</option>
                        <option value="non kategori">non kategori</option>

                    </select>
                </div>
                <div className="form-group">
                    <h6 className='text-dark mt-3'>Deskripsi</h6>
                    <input
                        className='form-control'
                        type="text"
                        name="deskripsi"
                        placeholder='Deskripsi'
                        onChange={handleInput}
                        required
                    />
                </div>
                <div className="form-group">
                    <h6 className='text-dark mt-3'>Spesifikasi</h6>
                    <input
                        className='form-control'
                        type="text"
                        name="spesifikasi"
                        placeholder='Spesifikasi'
                        onChange={handleInput}
                        required
                    />
                </div>
                <div className="form-group">
                    <h6 className='text-dark mt-3'>Images</h6>
                    <input
                        className='form-control'
                        type="file"
                        name="images"
                        multiple
                        onChange={handleImage}
                        required
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
    );
};

Modalbanner.propTypes = {
    onClose: PropTypes.func
};

export default Modalbanner;
