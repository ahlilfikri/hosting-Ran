import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import DashboardIcon from '../Icons/Dashboard/DashboardIcon';
import BannerIcon from '../Icons/Banner/BannerIcon';
import ProductIcon from '../Icons/Product/ProductIcon';
import KategoriIcon from '../Icons/Kategori/KategoriIcon';
import KegiatanIcon from '../Icons/Kegiatan/KegiatanIcon';
import MitraIcon from '../Icons/Mitra/MitraIcon';

const Sibar = () => {

    const location = useLocation(); 
    const [dashboardIsHovered, setDashboardIsHovered] = useState(false);
    const [bannerIsHovered, setBannerIsHovered] = useState(false);
    const [productIsHovered, setProductIsHovered] = useState(false);
    const [kategoriIsHovered, setKategoriIsHovered] = useState(false);
    const [kegiatanIsHovered, setKegiatanIsHovered] = useState(false);
    const [mitraIsHovered, setMitraIsHovered] = useState(false);

    const handleDashboardMouseEnter = () => {
        setDashboardIsHovered(true);
    }
    const handleDashboardMouseLeave = () => {
        setDashboardIsHovered(false);
    }
    
    const handleBannerMouseEnter = () => {
        setBannerIsHovered(true);
    }
    const handleBannerMouseLeave = () => {
        setBannerIsHovered(false);
    }
    
    const handleProductMouseEnter = () => {
        setProductIsHovered(true);
    }
    const handleProductMouseLeave = () => {
        setProductIsHovered(false);
    }

    const handleKategoriMouseEnter = () => {
        setKategoriIsHovered(true);
    }
    const handleKategoriMouseLeave = () => {
        setKategoriIsHovered(false);
    }

    const handleKegiatanMouseEnter = () => {
        setKegiatanIsHovered(true);
    }
    const handleKegiatanMouseLeave = () => {
        setKegiatanIsHovered(false);
    }

    const handleMitraMouseEnter = () => {
        setMitraIsHovered(true);
    }
    const handleMitraMouseLeave = () => {
        setMitraIsHovered(false);
    }

    // fungsi logout
    const logout = () => {
        sessionStorage.removeItem('token');
        window.location.href = '/login/cms';
        //mengmbil id dari session storage
        const token = sessionStorage.getItem('token');
    }

    return (
        <>
            <aside className="sidebar p-3">
                <h4 className='text-white fw-bold ms-2 mt-3'>Manage Page</h4>
                <Link to="/dashboard" className={`d-flex align-items-center sidebar-link ${location.pathname === '/dashboard' ? 'active fw-bold' : ''} ${dashboardIsHovered ? 'hovered' : ''}`}
                    onMouseEnter={handleDashboardMouseEnter} onMouseLeave={handleDashboardMouseLeave}>
                    <DashboardIcon strokeColor={location.pathname === '/dashboard' ? '#14679A' : (dashboardIsHovered ? '#14679A' : '#FFF')} width={30} className='me-3' />
                    Dashboard
                </Link>
                <Link to="/banner/CMS" className={`d-flex align-items-center sidebar-link ${location.pathname === '/banner/CMS' ? 'active fw-bold' : ''} ${bannerIsHovered ? 'hovered' : ''}`}
                    onMouseEnter={handleBannerMouseEnter} onMouseLeave={handleBannerMouseLeave}>
                    <BannerIcon strokeColor={location.pathname === '/banner/CMS' ? '#14679A' : (bannerIsHovered ? '#14679A' : '#FFF')} width={30} className='me-3' />
                    Banner
                </Link>
                <Link to="/product/CMS" className={`d-flex align-items-center sidebar-link ${location.pathname === '/product/CMS' ? 'active fw-bold' : ''} ${productIsHovered ? 'hovered' : ''}`}
                    onMouseEnter={handleProductMouseEnter} onMouseLeave={handleProductMouseLeave}>
                    <ProductIcon strokeColor={location.pathname === '/product/CMS' ? '#14679A' : (productIsHovered ? '#14679A' : '#FFF')} width={30} className='me-3' />
                    Product
                </Link>
                <Link to="/kategori/CMS" className={`d-flex align-items-center sidebar-link ${location.pathname === '/kategori/CMS' ? 'active fw-bold' : ''} ${kategoriIsHovered ? 'hovered' : ''}`}
                    onMouseEnter={handleKategoriMouseEnter} onMouseLeave={handleKategoriMouseLeave}>
                    <KategoriIcon strokeColor={location.pathname === '/kategori/CMS' ? '#14679A' : (kategoriIsHovered ? '#14679A' : '#FFF')} width={30} height={30} className='me-3' />
                    Kategori
                </Link>
                <Link to="/kegiatan/CMS" className={`d-flex align-items-center sidebar-link ${location.pathname === '/kegiatan/CMS' ? 'active fw-bold' : ''} ${kegiatanIsHovered ? 'hovered' : ''}`}
                    onMouseEnter={handleKegiatanMouseEnter} onMouseLeave={handleKegiatanMouseLeave}>
                    <KegiatanIcon strokeColor={location.pathname === '/kegiatan/CMS' ? '#14679A' : (kegiatanIsHovered ? '#14679A' : '#FFF')} width={30} height={30} className='me-3' />
                    Kegiatan Kami
                </Link>
                <Link to="/mitra/CMS" className={`d-flex align-items-center sidebar-link ${location.pathname === '/mitra/CMS' ? 'active fw-bold' : ''} ${mitraIsHovered ? 'hovered' : ''}`}
                    onMouseEnter={handleMitraMouseEnter} onMouseLeave={handleMitraMouseLeave}>
                    <MitraIcon strokeColor={location.pathname === '/mitra/CMS' ? '#14679A' : (mitraIsHovered ? '#14679A' : '#FFF')} width={30} height={30} className='me-3' />
                    Mitra
                </Link>
                <button className='btn btn-danger mt-5' onClick={logout}>Logout</button>    

            </aside>
        </>
    )
}


export default Sibar;
