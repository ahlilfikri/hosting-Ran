import React from 'react';
import PropTypes from 'prop-types';

const ModalCms = ({ item, showEditModal, showDeleteModal }) => {
    if (!item) return null;

    const isCmsCategory = window.location.pathname === '/kategori/CMS'

    return (
        <div className="modal-body" style={{ paddingTop: '100px' }}>
            <div className="modal-banner" style={{ backgroundColor: '#EBEBEB', width: '750px' }}>
                <div className="d-flex align-items-center justify-content-between p-1">
                    <div className="align-items-start">
                        <span className='text-dark'>Melakukan Perubahan Item</span>
                    </div>
                    {isCmsCategory ? (
                        <button type="button" className="text-white fw-bold"
                            onClick={() => showDeleteModal(item)}
                            style={{ backgroundColor: '#FC8181', fontSize: '15px', width: '100px' }}
                        >Delete</button>
                    ) : (
                        <>
                            <div className="align-items-end">
                                <button type="button" className="text-white me-2 fw-bold"
                                    onClick={() => showEditModal(item)}
                                    style={{ backgroundColor: '#2C5282', fontSize: '15px', width: '100px' }}
                                >Edit</button>
                                <button type="button" className="text-white fw-bold"
                                    onClick={() => showDeleteModal(item)}
                                    style={{ backgroundColor: '#FC8181', fontSize: '15px', width: '100px' }}
                                >Delete</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div >
    );
}

ModalCms.propTypes = {
    showEditModal: PropTypes.func,
    showDeleteModal: PropTypes.func,
    item: PropTypes.object
}

export default ModalCms;
