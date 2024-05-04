import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../../assets/LOGO_RAN.png';
import Hamburger from '../../../assets/hamburger.svg';
import HamburgerWhite from '../../../assets/hamburger-white.svg';
import debounce from 'lodash/debounce';
import './navbar.css';

const Navbar = ({ sectionId }) => { // Accept sectionId as a prop

    const location = useLocation();
    const isHome = location.pathname === '/';

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = debounce(() => {
            const threshold = 80;
            setIsScrolled(window.scrollY > threshold);
        }, 100);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSmoothScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" style={{ background: isHome ? '#E7F9FF' : '#0F5998', minHeight: isScrolled ? '100px' : '138px', transition: 'min-height 0.3s ease' }}>
            <div className="container">
                <div className="d-flex align-items-center justify-content-center">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="Logo-RAN" style={{ maxWidth: isScrolled ? '48px' : '64px' }} />
                    </Link>
                    <span className='ms-2 align-middle fw-bold' style={{ color: isHome ? '#0F5998' : '#FFFFFF' }}>PT RAHAYU ANTARA <br /> NUSINDO</span>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        {isHome ? <img src={Hamburger} alt="Icon" /> : <img src={HamburgerWhite} alt="Icon" />}
                    </span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item px-1">
                            <Link className={`nav-link fw-medium ${location.pathname === '/' ? 'active' : ''}`} to="/"
                                style={{ color: isHome ? '#0F5998' : '#FFFFFF' }}>Beranda</Link>
                        </li>
                        <li className="nav-item px-1">
                            <Link className={`nav-link fw-medium ${location.pathname === '/kegiatan' ? 'active underline' : ''}`} to="/kegiatan"
                                style={{ color: isHome ? '#0F5998' : '#FFFFFF' }}>Kegiatan</Link>
                        </li>
                        <li className="nav-item dropdown px-1">
                            <Link className={`nav-link fw-medium dropdown-toggle ${location.pathname === '/produk' ? 'active underline' : ''}`} to="/produk"
                                style={{ color: isHome ? '#0F5998' : '#FFFFFF' }}>Produk</Link>
                        </li>
                        <li className="nav-item px-1">
                            <Link className={'nav-link fw-medium'} smooth to="/kontak" onClick={(event) => handleSmoothScroll(event, sectionId)}
                                style={{ color: isHome ? '#0F5998' : '#FFFFFF' }}>
                                Kontak
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;