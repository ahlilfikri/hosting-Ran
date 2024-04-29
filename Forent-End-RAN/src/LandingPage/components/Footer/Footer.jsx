import { Link } from 'react-router-dom';
import youtubeIcon from '../../../assets/youtube.svg';
import instagramIcon from '../../../assets/instagram.svg';
import linkedinIcon from '../../../assets/linkedin.svg';
import facebookIcon from '../../../assets/facebook.svg';
import './footer.css';

const Footer = () => {
    return (
        <>
            <footer className="py-3 pt-5 fs-6" style={{ background: '#0F5998' }}>
                <div className="container">
                    <div className="title d-flex">
                        <h2 className="text-white fw-bold mb-5">Rahayu Antara Nusindo</h2>
                    </div>

                    <div className="row mb-5">
                        <div className={`col-lg-3 col-md-6 col-sm-12 mb-3 ${window.innerWidth <= 576 ? 'text-center' : ''}`}>
                            <h5 className="text-white fw-bold">Social Media</h5>
                            <ul className="nav flex-row align-items-center justify-content-start">
                                <li className="nav-item mb-2">
                                    <Link to="https://www.instagram.com/rahayuantaranusindo?igsh=aW95aG1iaWdwNDk="
                                        className="nav-link p-0 text-white fw-light">
                                        <img src={instagramIcon} alt="Instagram" className="me-2" />
                                    </Link>
                                </li>
                                <li className="nav-item mb-2">
                                    <Link to="#"
                                        className="nav-link p-0 text-white fw-light">
                                        <img src={facebookIcon} alt="Facebook" className="me-2" />
                                    </Link>
                                </li>
                                <li className="nav-item mb-2">
                                    <Link to="https://youtube.com/@pt.rahayuantaranusindo5099?si=-KaBfBu3o0hGFNF5"
                                        className="nav-link p-0 text-white fw-light">
                                        <img src={youtubeIcon} alt="Youtube" className="me-2" />
                                    </Link>
                                </li>
                                <li className="nav-item mb-2">
                                    <Link to="#"
                                        className="nav-link p-0 text-white fw-light">
                                        <img src={linkedinIcon} alt="Linkedin" className="me-2" />
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className={`col-lg-3 col-md-6 col-sm-12 mb-3 mx-auto ${window.innerWidth <= 576 ? 'text-center' : ''}`}>
                            <h5 className="text-white fw-bold">Email</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white fw-light">
                                    rahayuantaranusindo@gmail.com</a>
                                </li>
                            </ul>
                        </div>

                        <div className={`col-lg-3 col-md-6 col-sm-12 mb-3 mx-auto ${window.innerWidth <= 576 ? 'text-center' : ''}`}>
                            <h5 className="text-white fw-bold">Phone/Fax</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white fw-light">
                                    (0271) 788 1176</a>
                                </li>
                            </ul>
                        </div>

                        <div className={`col-lg-3 col-md-6 col-sm-12 mb-3 mx-auto ${window.innerWidth <= 576 ? 'text-center' : ''}`}>
                            <h5 className="text-white fw-bold">Location</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white fw-light">
                                    Jl, Raya Solo-Karanganyar Km 8, 57554</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="d-flex flex-row flex-sm-row justify-content-center">
                        <p className="text-white">© 2023 PT RAN</p>
                        <p className="text-white ms-1 me-1">|</p>
                        <p className="text-white">All rights reserved</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;