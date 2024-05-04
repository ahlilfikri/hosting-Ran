import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const ModalKategoriEdit = ({ onClose, item }) => {

    const port = `${import.meta.env.VITE_BASE_URL}/`;
    const [editItem, setEditItem] = useState({ ...item });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditItem(prevItem => ({
            ...prevItem,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('nama', editItem.nama);

            const response = await axios.put(`${port}kategori/${editItem._id}`, formData, {
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
            <div className="modal-banner" style={{ backgroundColor: '#EBEBEB' }}>
                <h2 className="text-dark fw-bold text-center mb-4 mt-3">Edit Banner</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mt-2">
                        <h6 className="text-dark fw-bold">Title</h6>
                        <input
                            className="form-control mt-2"
                            type="text"
                            name="nama"
                            value={editItem.nama}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="d-flex align-items-end justify-content-end mt-5 mb-4">
                        <button className="btn ps-3 pe-3 me-2" style={{ backgroundColor: '#FFF', color: '#0F5998', fontSize: '15px', width: '90px' }} onClick={onClose}>Close</button>
                        <button className="btn ps-3 pe-3 text-white" type="submit" style={{ backgroundColor: '#0F5998', fontSize: '15px', width: '90px' }}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

ModalKategoriEdit.propTypes = {
    onClose: PropTypes.func,
    item: PropTypes.object
}

export default ModalKategoriEdit