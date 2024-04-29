import './CardBanner.css';
const port = `${import.meta.env.VITE_BASE_URL}/`;
import axios from 'axios';
import { useState, useEffect } from 'react'; 

const CardBanner = () => {
    const[data,setData] = useState(null);
    const [lastUpdate, setLastUpdate] = useState(null);
    const [lastAdd, setLastAdd] = useState(null);

    const getDataBanner = async ()=>{
        try{
            const response = await axios.get(`${port}banner`);
            const dataApi = response.data.payload.data;
            const totalData = dataApi.length;

            setData(totalData);

        }catch(error){
            console.log(error.message);
        }
    }

    const getLeattest = async ()=>{}

    useEffect(()=>{
        getDataBanner();
        getLeattest();
    }
    , [data])

    return(
        <>
            <div className="set-card-banner">
                <h3>
                    <div className="card-banner">
                        <div className="card-banner-body">
                            <div className="card-banner-title">Total Banner</div>
                            <div className="card-banner-value">{data}</div>
                        </div>
                    </div>
                </h3>
            </div>
        
        </>
    )
}

export default CardBanner;
