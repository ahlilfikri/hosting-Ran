import './ModalDelete.css';
import PropTypes from 'prop-types';

const ModalDelete = ({ onClose, onDelete, itemName }) => {

    return (
        <>
            <div className="modal-body" style={{ paddingTop: '100px' }}>
                <div className="modal-banner" style={{ backgroundColor: '#EBEBEB', width: '750px' }}>
                    <div className="d-flex align-items-center justify-content-between p-1">
                        <div className="align-items-start">
                            <span className='text-dark'>Apakah anda yakin menghapus {itemName}?</span>
                        </div>
                        <div className="align-items-end">
                            <button type="button" className="text-dark me-2 fw-bold"
                                onClick={onClose}
                                style={{ backgroundColor: '#FFF', fontSize: '15px', width: '100px' }}
                            >Cancel</button>
                            <button type="button" className="text-white fw-bold"
                                onClick={onDelete}
                                style={{ backgroundColor: '#FC8181', fontSize: '15px', width: '100px' }}
                            >Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

ModalDelete.propTypes = {
    onClose: PropTypes.func,
    onDelete: PropTypes.func,
    itemName: PropTypes.string
}
export default ModalDelete;
