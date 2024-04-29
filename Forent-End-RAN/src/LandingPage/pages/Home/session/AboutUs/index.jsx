import React, { Fragment, useState, useEffect } from 'react'; 
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Setting from './constant/SettingCarousel';
import ImageError from '../../../../../assets/error.png';

const port = `${import.meta.env.VITE_BASE_URL}/`;

const Index = () => {
    const [data, setData] = useState([]);
    const [banner, setBanner] = useState([]);

    const GetFromAPI = async () => {
        try {
            const response = await axios.get(`${port}about`);
            setData(response.data.payload.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    const GetBanner = async () => {
        try {
            const response = await axios.get(`${port}banner`);
            setBanner(response.data.payload.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        GetFromAPI();
        GetBanner();
    }, []);

    return (
        <Fragment>
            <div className="container-fluid my-4">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-12 col-md-5 pt-5" style={{minHeight:'250px'}}>
                        <p className='pt-5' style={{textAlign:'left', width:'90%', fontSize: '32px', fontWeight:'bold', color:'#0F5998' }}>{data[0] ? data[0]['title'] : "Rahayu Antara Nusindo"}</p>
                        <p className='mb-5' style={{fontFamily: 'poppins',textAlign:'justify', width:'90%', fontSize: '13px', fontWeight:'300' }}>{data[0] ? data[0]['content'] : "tidak ada data"}</p>
                        <div className="social-media mt-5">
                            <div className="d-flex">
                                <a href="https://www.instagram.com/rahayuantaranusindo?igsh=aW95aG1iaWdwNDk= "><i style={{color: '#0F5998'}} className="p-1 fa-brands fa-instagram"></i></a>
                                <a href=""><i style={{color: '#0F5998'}} className="p-1 fa-brands fa-facebook-f"></i></a>
                                <a href="https://youtube.com/@pt.rahayuantaranusindo5099?si=-KaBfBu3o0hGFNF5 "><i style={{color: '#0F5998'}} className="p-1 fa-brands fa-youtube"></i></a>
                                <a href=""><i style={{color: '#0F5998'}} className="p-1 fa-brands fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <Slider {...Setting}>
                            {banner.map((item, index) => {
                                const imageSrc = `${import.meta.env.VITE_BASE_URL}/assets/${encodeURIComponent(item.image)}`;
                                return (
                                    <div key={index} className="p-3">
                                        <img src={imageSrc} alt="" style={{ height: '446px', width: '100%', borderRadius:'1vw'}} onError={(e) => { e.target.src = ImageError; }}/>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div> 
                    <div className="col-md-1"></div>
                </div>
            </div>
        </Fragment>
    );
}

export default Index; 
