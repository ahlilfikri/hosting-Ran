import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import ImageError from '../../../assets/error.png';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Setting from './constant/SettingCarousel';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './index.css';

const port = `${import.meta.env.VITE_BASE_URL}/`;

const Index = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    const GetFromAPI = async () => {
        try {
            const response = await axios.get(`${port}ofp/${id}`);
            setData(response.data.payload.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    const [content, setContent] = useState(true);
    const [image, setImage] = useState();

    const handleContent = () => {
        setContent(!content);
    };

    const handleClick = (index) => {
        const imageSrc = `${import.meta.env.VITE_BASE_URL}/assets/${encodeURIComponent(data.image[index])}`;
        setImage(imageSrc)
    };

    useEffect(() => {
        GetFromAPI();
    }, []);

    useEffect(() => {
        if (data.image && data.image.length > 0) {
            setImage(`${import.meta.env.VITE_BASE_URL}/assets/${encodeURIComponent(data.image[0])}`);
        }
    }, [data]);
    return (
        <Fragment>
            <Navbar sectionId={'kontak-section-detail-produk'}></Navbar>
            <div className="container-fluid">
                <div className="row pb-4">
                    <div className="col-md-1"></div>
                    <div className="col-12 col-md-10">
                        <div className="row p-3 mt-3">
                            <div className="col-12 col-md-6 pe-5">
                                <div className="wrap-img" style={{ borderRadius: '0.5vw', maxHeight: '456px', maxWidth: '552px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img src={image} style={{ borderRadius: '0.5vw',maxHeight: '100%', width: 'auto', maxWidth: '100%', height: 'auto', overflow:'hidden' }} onError={(e) => { e.target.src = ImageError; }} />
                                </div>
                                <div className="thumbnail d-flex justify-content-left mt-5">
                                    {data.image?.map((item, i) => {
                                        const imageSrc = `${import.meta.env.VITE_BASE_URL}/assets/${encodeURIComponent(item)}`;
                                        return (
                                            <img className='mx-1' key={i} alt="" src={imageSrc} onClick={() => handleClick(i)} style={{ height: '78px', width: '78px', border: '1px solid grey', borderRadius: '0.5vw' }} onError={(e) => { e.target.src = ImageError; }} />
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="col-12 col-md-6 pt-3 pt-sm-0">
                                {data.title ? (
                                    <>
                                        <p style={{ fontSize: '32px', color: 'black', fontWeight: 'bold' }}>{data.title}</p>
                                    </>
                                ) : (
                                    <p>Tidak ada data</p>
                                )}
                                <p style={{ width: '34.2vw', borderBottom: '1px solid #D9D9D9' }}></p>
                                <p style={{ fontSize: '20', color: 'black', fontWeight: 'bold' }}>Product Type:</p>
                                <p>{data.kategori ? data.kategori['nama'] : 'data tidak dapat ditampilkan'}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
                <div className="row mt-5 pt-5" style={{ backgroundColor: '#F4F4F4' }}>
                    <div className="col-md-1 "></div>
                    <div className="col-12 col-md-10">
                        <div className="row pb-5">
                            <div className="col-12 d-flex justify-content-center">
                                {content ?
                                    <div onClick={handleContent} className="px-2" style={{ display: 'inline-block', position: 'relative', cursor: 'pointer' }}>
                                        <p style={{ position: 'relative', zIndex: '2' }}>description</p>
                                        <div style={{ position: 'absolute', bottom: '30%', left: '25%', width: '50%', borderBottom: '1px solid blue' }}></div>
                                    </div>
                                    :
                                    <div onClick={handleContent} className="px-2" style={{ display: 'inline-block', position: 'relative', cursor: 'pointer' }}>
                                        <p style={{ position: 'relative', zIndex: '2' }}>description</p>
                                        <div style={{ position: 'absolute', bottom: '30%', left: '25%', width: '50%', borderBottom: '1px solid transparent' }}></div>
                                    </div>
                                }
                                {!content ?
                                    <div onClick={handleContent} className="px-2" style={{ display: 'inline-block', position: 'relative', cursor: 'pointer' }}>
                                        <p style={{ position: 'relative', zIndex: '2' }}>specification</p>
                                        <div style={{ position: 'absolute', bottom: '30%', left: '25%', width: '50%', borderBottom: '1px solid blue' }}></div>
                                    </div> :
                                    <div onClick={handleContent} className="px-2" style={{ display: 'inline-block', position: 'relative', cursor: 'pointer' }}>
                                        <p style={{ position: 'relative', zIndex: '2' }}>specification</p>
                                        <div style={{ position: 'absolute', bottom: '30%', left: '25%', width: '50%', borderBottom: '1px solid transparent' }}></div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="row pb-5" style={{ fontSize: '1.25vw', fontWeight: '600' }}>
                            {content && data.desktipsi?.map((item, index) => (
                                <div key={index} className="col-12 col-sm-4" style={{ textAlign: 'justify' }}>
                                    <div className="card mt-3 ">
                                        <p className='pt-3 px-3 text-dark' style={{ fontFamily: 'poppins', fontSize: '24px' }}>{item}</p>
                                        {item.content && <p className='pb-1 px-3' style={{ fontFamily: 'poppins', fontSize: '12px' }}>{item.content}</p>}
                                    </div>
                                </div>
                            ))}
                            {!content && data.spesifikasi?.map((item, index) => (
                                <div key={index} className="col-12 col-sm-4" style={{ textAlign: 'justify' }}>
                                    <div className="card mt-3 ">
                                        <p className='pt-3 px-3 text-dark' style={{ fontFamily: 'poppins', fontSize: '24px' }}>{item}</p>
                                        {item.content && <p className='pb-1 px-3' style={{ fontFamily: 'poppins', fontSize: '12px' }}>{item.content}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-1 "></div>
                </div>
            </div>
            <section id='kontak-section-detail-produk'>
                <Footer></Footer>
            </section>
        </Fragment>
    );
}

export default Index;


