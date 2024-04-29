import React, { Fragment, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Setting from './constant/SettingCarousel';
import ImageError from '../../../../../assets/error.png';
import axios from 'axios';

const port = `${import.meta.env.VITE_BASE_URL}/`;

const Index = () => {
    const [data, setData] = useState([]);

    const GetFromAPI = async () => {
        try {
            const response = await axios.get(`${port}kategori`);
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
            <div className="container-fluid py-5" style={{background: '#F4F4F4'}}>
                <div className="row">
                    <div className="col-12 col-sm-3 text-center">
                        <div className="content" style={{ position: 'relative', top: '50%', transform: 'translate(0,-50%)' }}>
                            <p style={{fontSize: '35px'}}>Kategori Produk</p>
                            {/* <button className="btn btn-primary " style={{background: '#0F5998'}}>
                                <span className='pe-1 color-light'>Selengkapnya</span>
                                <i className='fa-solid fa-chevron-right'></i>
                            </button> */}
                        </div>
                    </div>
                    <div className="col-12 col-sm-8" style={{maxHeight: '550px', overflow : 'hidden'}}>
                        <Slider {...Setting}>
                            {data.map((item, index) => {
                                const imageSrc = `${import.meta.env.VITE_BASE_URL}/assets/${encodeURIComponent(item.image)}`;
                                return (
                                    <div key={index} className='p-3'>
                                        <img src={imageSrc} alt="" style={{ height: '535px', width: '100%', borderRadius : '1vw' }} onError={(e) => { e.target.src = ImageError; }}/>
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
