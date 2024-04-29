import React, { Fragment, useState, useEffect } from 'react'; 
import axios from 'axios';
import ImageError from '../../../../../assets/error.png';

const port = `${import.meta.env.VITE_BASE_URL}/`;

const Index = () => {
    const [data, setData] = useState([]);

    const GetFromAPI = async () => {
        try {
            const response = await axios.get(`${port}mitra`);
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
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-12 col-sm-3 text-center">
                        <p style={{ position: 'relative', top: '50%', transform: 'translate(0,-50%)', fontSize: '35px' }}>Mitra Kami</p>
                    </div>
                    <div className="col-12 col-sm-8">
                        <div className="row p-3 mt-3">
                            {data.map((item, index) => {
                                const imageSrc = `${import.meta.env.VITE_BASE_URL}/assets/${encodeURIComponent(item.image)}`;
                                return(
                                <div key={index} className="col-6 col-md-3">
                                    <img src={imageSrc} alt="" style={{ width: '100%' }} onError={(e) => { e.target.src = ImageError; }}/>

                                </div>
                            )})}
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
            </div>
        </Fragment>
    );
}

export default Index; 
