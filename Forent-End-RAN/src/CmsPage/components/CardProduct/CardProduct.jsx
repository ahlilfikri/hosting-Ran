import './CardProduct.css'
const port = `${import.meta.env.VITE_BASE_URL}/`;
import axios from 'axios';
import { useState, useEffect } from 'react'; 


const CardProduct = () => {
    const [data, setData] = useState(null);
    const [lastUpdate, setLastUpdate] = useState(null);
    const [lastAdd, setLastAdd] = useState(null);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString('id-ID', options);
        return formattedDate;
    };


    const getDataProduct = async () => {
        try{
            const response = await axios.get(`${port}ofp`);
            const dataApi = response.data.payload.data;
            const totalData = dataApi.length;

            setData(totalData)

        }catch(error){
            console.log(error.message);
        }
    }

    const getLeattest = async () => {
        try{
            const response = await axios.get(`${port}ofp//latest`);
            const dataApi = response.data.payload.data;
            setLastUpdate(dataApi.lastUpdate.updatedAt);
            setLastAdd(dataApi.lastAdd.createdAt);  

        }catch(error){
            console.log(error.message);
        }
    }

    useEffect(()=>{
        getDataProduct();
        getLeattest();
    }, [data])

    return(
        <>
            <div className="set-card-product">
                <h3>
                    <div className="card-product">
                        <div className="card-product-body">
                            <div className="card-product-title">Total Product</div>
                            <div className="card-product-value">{data}</div>
                        </div>
                    </div>
                </h3>
                <table
                 style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    fontSize: '1rem',
                    color: '#000',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    padding: '1rem',
                    marginTop: '1rem'
                 }}
                >
                    <tbody>
                        <tr>
                            <td>Terakhir di tambah:</td>
                            <td>{lastAdd ? formatDate(lastAdd) : 'Loading...'}</td>
                        </tr>
                        <tr>
                            <td>Terakhir di update:</td>
                            <td>{lastUpdate ? formatDate(lastUpdate) : 'Loading...'}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default CardProduct;
