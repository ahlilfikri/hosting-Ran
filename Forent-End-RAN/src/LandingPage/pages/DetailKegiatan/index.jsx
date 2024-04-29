import React, { Fragment, useState, useEffect } from 'react'; 
import axios from 'axios';
import ImageError from '../../../assets/error.png';


const port = `${import.meta.env.VITE_BASE_URL}/`;

const Index = () => {
    const [data, setData] = useState([]);

    const GetFromAPI = async () => {
        try {
            const response = await axios.get(`${port}media `);
            setData(response.data.payload.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        GetFromAPI();
    }, []);
    
    const imageSrc = `${import.meta.env.VITE_BASE_URL}/assets/${encodeURIComponent(data.image ? data.image : ImageError)}`;

    return (
        <Fragment>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-12 col-md-6">
                        <img src={imageSrc} alt="" style={{ height: '343px', width: '100%' }} onError={(e) => { e.target.src = ImageError; }}/>
                    </div>
                    <div className="col-12 col-md-4">
                        <p style={{ fontSize: '40px' }}>Mitra Kami</p>
                        <p style={{ fontSize: '20px', fontWeight:'bold' }}>Mitra Kami</p>
                        <p style={{ fontSize: '15px' }}>Mitra Kami</p>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </Fragment>
    );
}

export default Index; 
