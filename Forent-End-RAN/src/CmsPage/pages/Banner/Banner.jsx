import './Banner.css'
const port = `${import.meta.env.VITE_BASE_URL}/`;
import axios from 'axios';
import { useState, useEffect } from 'react';

import Sidebar from '../../components/SideBar/Sidebar';
import Modalbanner from '../../components/ModalBanner/ModalBanner';
import ModalDelete from '../../components/ModalDelete/ModalDelete';
import ModalBannerEdit from '../../components/ModalBanner/ModalBannerEdit';
import ModalCms from '../../components/ModalCms/ModalCms';

import BannerIcon from '../../components/Icons/Banner/BannerIcon';
import IconEdit from '../../../assets/icon-edit.svg'

const Banner = () => {
    const [data, setData] = useState([]);
    const [modal, setModal] = useState(false);
    const [modalCms, setModalCms] = useState(false);

    const [showDeletePopUp, setShowDeletePopUp] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [itemName, setItemName] = useState('');

    const [editingBanner, setEditingBanner] = useState(null);
    const [showEditPopup, setShowEditPopup] = useState(false);

    const handleShowDeletePopUp = (id) => {
        setSelectedItemId(id);
        setShowDeletePopUp(true);
        setModalCms(false);
    }

    const handleCloseDeletePopUp = () => {
        setShowDeletePopUp(false);
    }

    const handleModal = () => {
        setModal(!modal);
    }

    const handleEditPopup = (banner) => {
        setEditingBanner(banner);
        setShowEditPopup(true);
        setModalCms(false);
    }

    const handleModalCms = (item) => {
        setSelectedItemId(item._id);
        setItemName(item.nama);
        setModalCms(!modalCms);
    }


    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString('id-ID', options);
        return formattedDate;
    };

    const getDataBanner = async () => {
        try {
            const response = await axios.get(`${port}banner`);
            const dataApi = response.data.payload.data;
            setData(dataApi)
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleDeleteBanner = async () => {
        try {
            const response = await axios.delete(`${port}banner/${selectedItemId}`);
            getDataBanner();
            setShowDeletePopUp(false);
            setSelectedItemId(null);
            console.log(response);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getDataBanner();
    }, [data])

    return (
        <>
            <div className="container-fluid pb-5" style={{ width: '100%', height: '100vh', overflowY: 'auto' }}>
                <div className="row">
                    <div className="col-2 me-5">
                        <Sidebar />
                    </div>
                    <div className="col-8 ms-5 mt-5">
                        <div className="row">
                            <div className="col-12">
                                <table className="table">
                                    <thead className='text-center'>
                                        <tr>
                                            <th className='align-middle text-center'>Nama Banner</th>
                                            <th className='align-middle text-center'>Image</th>
                                            <th className='align-middle text-center'>Last Update</th>
                                            <th className='align-middle text-center'>Author</th>
                                            <th>
                                                <button
                                                    className='btn btn-add ms-4 text-white fw-bold justify-content-center'
                                                    style={{ width: '130px', height: '40px', fontSize: '16px', outline: 'none', border: 'none' }}
                                                    onClick={handleModal}
                                                >
                                                    <BannerIcon strokeColor={"#FFF"} width={25} className='me-2' /> Add new
                                                </button>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item, index) => {
                                            const imageSrc = `${import.meta.env.VITE_BASE_URL}/assets/${encodeURIComponent(item.image)}`;
                                            return (
                                                <tr key={index}>
                                                    <td className='align-middle text-center'>
                                                        <span>{item.nama}</span>
                                                    </td>
                                                    <td className='align-middle text-center'>
                                                        <img src={imageSrc} alt="image" style={{ width: '200px', height: '100px' }} />
                                                    </td>
                                                    <td className='align-middle text-center'>
                                                        <span>{formatDate(item.updatedAt)}</span>
                                                    </td>
                                                    <td className='align-middle text-center'>
                                                        <span className='badge rounded-pill ps-3 pe-3 pt-2 pb-2' style={{ backgroundColor: '#2C5282' }}>
                                                            Admin
                                                        </span>
                                                    </td>
                                                    <td className='align-middle text-center'>
                                                        <button className='btn align-items-center' onClick={() => handleModalCms(item)}>
                                                            <img src={IconEdit} alt="Edit" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {modalCms &&
                <ModalCms
                    item={data.find((item) => item._id === selectedItemId)}
                    showDeleteModal={() => handleShowDeletePopUp(selectedItemId)}
                    showEditModal={handleEditPopup}
                    onClose={handleModalCms}
                />}
            {modal && <Modalbanner onClose={handleModal} />}
            {showDeletePopUp &&
                <ModalDelete
                    onClose={handleCloseDeletePopUp}
                    onDelete={handleDeleteBanner}
                    itemName={itemName}
                />}
            {showEditPopup &&
                <ModalBannerEdit
                    onClose={() => setShowEditPopup(false)}
                    banner={editingBanner}
                />}
        </>
    )
}


export default Banner;
