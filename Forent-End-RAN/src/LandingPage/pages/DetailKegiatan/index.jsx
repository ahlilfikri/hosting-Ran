import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ImageError from '../../../assets/error.png';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


const port = `${import.meta.env.VITE_BASE_URL}/`;

const Index = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [image, setImage] = useState();

    const GetFromAPI = async () => {
        try {
            const response = await axios.get(`${port}media/${id}`);
            setData(response.data.payload.data);
        } catch (error) {
            console.log(error.message);
        }
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
            setImage(`${import.meta.env.VITE_BASE_URL}/assets/${encodeURIComponent
                (data.image[0] ? data.image[0] : ImageError)}`);
        }
    }, [data]);

    console.log(data);

    return (
        <Fragment>
            <Navbar sectionId={'kontak-section-detail-kegiatan'}></Navbar>
            <div className="container-fluid my-5 text-dark">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-12 col-md-4">
                        <div className="wrap-img" style={{ borderRadius: '0.5vw', maxHeight: '419px', maxWidth: '636px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={image} style={{ borderRadius: '0.5vw', maxHeight: '100%', width: 'auto', maxWidth: '100%', height: 'auto', overflow: 'hidden' }} onError={(e) => { e.target.src = ImageError; }} />
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <p className='mt-3 mt-md-0' style={{ fontSize: '40px', color: 'black' }}>{data.title}</p>
                        <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}>{data.createdAt}</p>
                        <p style={{ fontSize: '15px', color: 'black' }}>{data.content}</p>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-md-2"></div>
                </div>
            </div>
            <p className='text-dark ms-1 ms-sm-5 ps-1 ps-md-5 pt-0 pt-sm-5' style={{ fontSize: '30px', fontWeight: '600' }}>Gambar Terkait</p>
            <div className="wrap-img mb-5 d-none d-md-flex" style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1rem',
                borderRadius: '0.5vw',
                maxHeight: 'max-content',
                maxWidth: '100vw',
                alignItems: 'center'
            }}>
                {data.image?.map((item, index) => {
                    const imageSrc = `${import.meta.env.VITE_BASE_URL}/assets/${encodeURIComponent(item)}`;
                    return (
                        <img onClick={() => handleClick(index)} key={index} src={imageSrc} style={{
                            borderRadius: '0.5vw',
                            maxHeight: '300px',
                            width: 'auto',
                            maxWidth: '30vw',
                            height: 'auto',
                            overflow: 'hidden'
                        }} onError={(e) => { e.target.src = ImageError; }} className='mx-3' />
                    )
                })}
            </div>
            <div className="container mb-5 d-block d-md-none">
                <div className="row">
                    {data.image?.map((item, index) => {
                        const imageSrc = `${import.meta.env.VITE_BASE_URL}/assets/${encodeURIComponent(item)}`;
                        return (
                            <div className="col-12 col-md-6">
                                <img onClick={() => handleClick(index)} key={index} src={imageSrc} style={{
                                    borderRadius: '0.5vw',
                                    width: '80vw',
                                    height: '80vw',
                                    overflow: 'hidden',
                                }} onError={(e) => { e.target.src = ImageError; }} className='ms-auto ms-xl-3 my-1' />
                            </div>
                        )
                    })}
                </div>
            </div>
            <section id='kontak-section-detail-kegiatan'>
                <Footer></Footer>
            </section>
        </Fragment>
    );
}

export default Index; 
