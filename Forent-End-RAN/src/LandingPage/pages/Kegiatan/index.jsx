import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import ImageError from '../../../assets/error.png';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

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
            <Navbar sectionId={'kontak-section-kegiatan'}></Navbar>
            <div className="container-fluid my-5">
                <div className="text-center">
                    <p className='fw-bold text-dark' style={{ fontSize: '40px' }}>Kegiatan Kami</p>
                    <p className='fw-semibold' style={{ fontSize: '18px', color: '#9E9E9E', marginTop:'-10px' }}>Lorem Ipsum</p>
                </div>
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-12 col-sm-10">
                        <div className="row p-3 mt-3">
                        {data.map((item, index) => {
                            const imageSrc = `${import.meta.env.VITE_BASE_URL}/assets/${encodeURIComponent(item.image)}`;
                            return (
                                <div key={index} className="col-lg-12 col-sm-6 col-xl-4">
                                    <div className="image-container" style={{ overflow: 'hidden', height: '68%' }}>
                                        <img src={imageSrc} alt="" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div className="text-container">
                                        <p className='pt-2 fw-bold text-black' style={{ fontSize: '25px' }}>{item.title}</p>
                                        <p className='fw-semibold' style={{ fontFamily: 'poppins', fontSize: '15px', color: '#9E9E9E', marginTop: '-10px' }}>{item.content}</p>
                                    </div>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
            </div>
            <section id='kontak-section-kegiatan'>
                <Footer></Footer>
            </section>
        </Fragment>
    );
}

export default Index; 
