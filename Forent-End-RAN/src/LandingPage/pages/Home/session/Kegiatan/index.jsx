import React, { Fragment, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Setting from './constant/SettingCarousel';
import axios from 'axios';
import './index.css';
import { Link } from 'react-router-dom';
import ImageError from '../../../../../assets/error.png';


const port = `${import.meta.env.VITE_BASE_URL}/`;

const Index = () => {
    const [data, setData] = useState([]);

    const GetFromAPI = async () => {
        try {
            const response = await axios.get(`${port}media`);
            setData(response.data.payload.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        GetFromAPI();
    }, []);

    return (
        <Fragment>
            <div className="container-fluid py-5" style={{ background: '#F4F4F4' }}>
                <div className="row">
                    <div className="col-12 col-sm-3 text-center">



                        <div className="content" style={{ position: 'relative', top: '50%', transform: 'translate(0,-50%)' }}>
                            <p style={{ fontSize: '35px' }}>Kegiatan Kami</p>
                            <Link to={`/kegiatan`}>
                                <button className='btn-primary' style={{ color: 'white !important', background: '#0F5998' }}
                                >
                                    <span style={{
                                        color: 'white',
                                        fontFamily: 'poppins',
                                        fontSize: '12px',
                                        fontWeight: 'bold',

                                    }}>Lihat Semua</span>
                                </button>
                            </Link>
                        </div>

                    </div>
                    <div className="col-12 col-sm-8">
                        <Slider {...Setting}>
                            {data.map((item, index) => {
                                const imageSrc = `${import.meta.env.VITE_BASE_URL}/assets/${encodeURIComponent(item.image)}`;
                                return (
                                    <div key={index} className=''>
                                        <Link to={`/detail-kegiatan/${item._id}`}>
                                            <div className="slide-content p-2" style={{ borderRight: '1px solid #d8d5d5' }}>
                                                <div className="image d-block" >
                                                    <img className="pb-3" style={{ height: '277px', width: '100%' }} src={imageSrc} alt="" onError={(e) => { e.target.src = ImageError; }} />
                                                </div>
                                                <div className="content">
                                                    <p style={{ fontFamily: 'poppins', fontWeight: 'bold', fontSize: '20px' }}>{item.title}</p>
                                                    <p style={{ fontFamily: 'poppins', fontSize: '12px' }}>{item.content}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
            </div>
        </Fragment>
    );
}

export default Index;
