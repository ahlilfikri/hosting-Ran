/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
const port = `${import.meta.env.VITE_BASE_URL}/`;
import { useParams } from 'react-router-dom';
// import Sibar from '../../components/Sidebar/Sidebar';
import axios from 'axios';


const KegiatanPerPage = () => {
    const { id } = useParams();
    const [Kegiatan, setKegiatan] = useState(null);


    if (!sessionStorage.getItem('token')) {
        return (
            <div className="container-fluid" style={{ width: '100%', height: '100vh' }}>
                <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',height: '100vh',}}>
                    <div className="d-block text-center"
                    style={{width: '50%',margin: 'auto',padding: '20px',borderRadius: '10px',backgroundColor: '#f8d7da',color: '#721c24',border: '1px solid #f5c6cb',}}>
                        <p>
                            silahkan login terlebih dahulu
                        </p>
                        <button className="btn btn-primary" onClick={() => window.location.href = '/login/cms'}>Login</button>
                    </div>
                </div>
            </div>
        );
    }




    useEffect(() => {
        const getDataProduct = async () => {
            try {
                const response = await axios.get(`${port}media/${id}`);
                const dataApi = response.data.payload.data;
                setKegiatan(dataApi);
                console.log(dataApi);
            } catch (error) {
                console.log(error.message);
            }
        };
        getDataProduct();
    }, [id]);

    if (!Kegiatan) {
        return <div>Loading...</div>;
    }

    
    return(
        <div className="container-fluid" style={{ width: '100%', height: '100vh' }}>
            <div className="row">
                <div className="col-2">
                    {/* <Sibar /> */}
                </div>
                <div className="col" style={{ padding: '20px', paddingTop: '1%', overflowY: 'hidden', height: '100vh' }}>
                    
                    <div className="container">
                        <div className="row"
                                style={{borderRadius: '10px',
                                        backgroundColor: '#eeeeee',
                                        color: '#721c24',
                                        padding: '30px',
                                        margin: '10px'}}
                        >
                            <div className="col-12 d-flex justify-content-start">
                                {/* tombol kembali */}
                                
                                <h3>
                                    Detail Kegiatan
                                </h3>
                            </div>

                            <div className="col-6 text-end">
                                {
                                    Kegiatan.image.map((image, index) => {
                                        return(
                                            <img key={index} src={`${import.meta.env.VITE_BASE_URL}/assets/${encodeURIComponent(image)}`} alt={Kegiatan.title} style={{width:'100%',height:'400px',margin:'5px', }}/>
                                        )
                                    })
                                }
                                
                            </div>
                            <div className="col-6">
                                <h2>{Kegiatan.title}</h2>
                                <p>{Kegiatan.content}</p>
                            </div>
                            
                        </div>
                        <button className="btn btn-primary ms-2" onClick={() => window.location.href = '/kegiatan/CMS'} style={{borderRadius: '10px',}}>
                            Kembali
                        </button>
                        <button className="btn btn-success ms-2" onClick={() => console.log('lanjut nanti')} style={{borderRadius: '10px',}}>
                            Prewiew
                        </button>
                        
                    </div>
                   
                    
                </div>
            </div>
            
        </div>
        
    )



}

export default KegiatanPerPage;
