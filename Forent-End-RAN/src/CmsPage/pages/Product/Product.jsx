const port = `${import.meta.env.VITE_BASE_URL}/`;
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../../components/SideBar/Sidebar';
import ModalProduct from '../../components/ModalProduct/ModalProduct';
import ModalProductEdit from '../../components/ModalProduct/ModalProductEdit';
import ModalDelete from '../../components/ModalDelete/ModalDelete';
import ModalCms from '../../components/ModalCms/ModalCms';

import BannerIcon from '../../components/Icons/Banner/BannerIcon';
import IconEdit from '../../../assets/icon-edit.svg'

const Product = () => {
    const [data, setData] = useState([]);
    const [modal, setModal] = useState(false);
    const [modalCms, setModalCms] = useState(false);

    const [showDeletePopUp, setShowDeletePopUp] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [itemName, setItemName] = useState('');


    const [editingProduct, setEditingProduct] = useState(null);
    const [showEditPopup, setShowEditPopup] = useState(false);

    if (!sessionStorage.getItem('token')) {
        return (
            <div className="container-fluid" style={{ width: '100%', height: '100vh' }}>
                <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',height: '100vh',}}>
                    <div className="d-block text-center"
                    style={{width: '50%',margin: 'auto',padding: '20px',borderRadius: '10px',backgroundColor: '#f8d7da',color: '#721c24',border: '1px solid #f5c6cb',}}>
                        <p>
                            silahkan login terlebih dahulu
                        </p>
                        <button className="btn btn-primary" onClick={() => window.location.href = '/login/cms'}>Login</button>
                    </div>
                </div>
            </div>
        );
    }

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

    const handleEditPopup = (product) => {
        setEditingProduct(product);
        setShowEditPopup(true);
        setModalCms(false);
    }

    const handleModalCms = (item) => {
        setSelectedItemId(item._id);
        setItemName(item.title);
        setModalCms(!modalCms);
    }

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString('id-ID', options);
        return formattedDate;
    };


    const getDataProduct = async () => {
        try {
            const response = await axios.get(`${port}ofp`);
            const dataApi = response.data.payload.data;
            setData(dataApi)
        } catch (error) {
            console.log(error.message);
        }
    }

    const deleteDataProduct = async () => {
        try {
            const response = await axios.delete(`${port}ofp/${selectedItemId}`);
            getDataProduct();
            setShowDeletePopUp(false);
            console.log(response);
        } catch (error) {
            console.log(error.message);
        }
    }


    useEffect(() => {
        getDataProduct();
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
                                    <thead>
                                        <tr>
                                            <th className='align-middle text-center'>Nama product</th>
                                            <th className='ps-4 align-middle text-center'>Image</th>
                                            <th className='align-middle text-center'>Last Updated</th>
                                            <th className='align-middle text-center'>Author</th>
                                            <td>
                                                <button
                                                    className='btn btn-add ms-4 text-white fw-bold justify-content-center'
                                                    style={{ width: '130px', height: '40px', fontSize: '16px', outline: 'none', border: 'none' }}
                                                    onClick={handleModal}
                                                >
                                                    <BannerIcon strokeColor={"#FFF"} width={25} className='me-2' /> Add new
                                                </button>
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item, index) => {
                                            const imageSrc = `${import.meta.env.VITE_BASE_URL}/assets/${encodeURIComponent(item.image[0])}`;
                                            return (
                                                <tr key={index}>
                                                    <td className='align-middle text-start'>
                                                        <Link to={`/product/${item._id}`}>
                                                            {item.title}
                                                        </Link>
                                                    </td>
                                                    <td className='align-middle text-center'>
                                                        <Link to={`/product/${item._id}`}>
                                                            <img src={imageSrc} alt="image" style={{ width: '100px', height: '50px' }} />
                                                        </Link>
                                                    </td>
                                                    <td className='align-middle text-center'>
                                                        {formatDate(item.createdAt)}
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
                />
            }
            {modal && <ModalProduct onClose={handleModal} />}
            {showDeletePopUp && <ModalDelete
                onClose={handleCloseDeletePopUp}
                onDelete={deleteDataProduct}
                itemName={itemName}
            />}
            {showEditPopup && <ModalProductEdit
                onClose={() => setShowEditPopup(false)}
                product={editingProduct}
            />}
        </>
    )
}


export default Product;
