import React, { Fragment, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Setting from './constant/SettingCarousel';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ImageError from '../../../../../assets/error.png';


const port = `${import.meta.env.VITE_BASE_URL}/`;

const Index = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const GetFromAPI = async () => {
        try {
            const response = await axios.get(`${port}ofp`);
            setData(response.data.payload.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleImageClick = (itemId) => {
        navigate(`/detail-produk/${itemId}`);
    };

    useEffect(() => {
        GetFromAPI();
    }, []);

    const renderSliderItems = () => {
        return data.map((item, index) => {
            const imageSrc = `${import.meta.env.VITE_BASE_URL}/assets/${encodeURIComponent(item.image)}`;
            return (
                <div key={index} className="p-3" onClick={() => handleImageClick(item._id)}>
                    <div className="card mb-3">
                        <img src={imageSrc} alt="" style={{ height: '316px', width: '100%' }} onError={(e) => { e.target.src = ImageError; }} />
                    </div>
                    <div id="content-produkTerbaru" className="content" style={{}}>
                        <p style={{ fontFamily: 'poppins', fontWeight: 'bold', fontSize: '20px' }}>{item.title}</p>
                        <p style={{ fontFamily: 'poppins', fontSize: '12px' }}>{item.content}</p>
                    </div>
                </div>
            );
        });
    };

    return (
        <Fragment>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-12 col-sm-3 text-center">
                        <div className="content" style={{ position: 'relative', top: '50%', transform: 'translate(0,-50%)' }}>
                            <p style={{ fontSize: '35px' }}>Produk terbaru</p>
                            <button className='btn-primary'style={{color: 'white !important',background: '#0F5998'}}
                            onClick={() => {window.location.href = '/produk';}}>
                                <span style={{
                                    color: 'white',
                                    fontFamily: 'poppins',
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                
                                }}>Lihat Semua</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-sm-8 pb-5">
                        <Slider {...Setting}>
                            {renderSliderItems()}
                        </Slider>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
            </div>
        </Fragment>
    );
};

export default Index;
