import React, { Fragment, useState, useEffect } from 'react'; 
import axios from 'axios';
import ImageError from '../../../assets/error.png';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from './1.png';
import Image2 from './2.png';
import Image3 from './3.png';
import Image4 from './4.png';
import Setting from './constant/SettingCarousel';
import './index.css';

const port = `${import.meta.env.VITE_BASE_URL}/`;

const Index = () => {
    const { id } = useParams();
    const [data, setData] = useState([
        { image: Image1 },
        { image: Image2 },
        { image: Image3 },
        { image: Image4 },
    ]);
    const [description, setDescription] = useState([
        { title: 'panjang', content: '100cm' },
        { title: 'lebar', content: '10cm' },
        { title: 'warna', content: 'putih' },
        { title: 'listrik', content: '100watt' },
    ]);
    const [spesification, setSpesification] = useState(
        "Tingkat Akurasi Tekanan Statis +-0/4kPa(+-3mmHg) Denyut nadi: dalam +-5% Rentang Pengukuran Tekanan: 5.3kPa-37.3kPa (40mmHg-280mmHg) Denyut nadi: 40-199 kali/menit Rentang tampilan manset: 0kPa-39.9kPa (0mmHg-299mmHg) Daya / Power DC 6V (1.5V 4 x AAA) (Tidak termasuk) Dimensi 115 x 96 x 59 mm"
    );
    const [content, setContent] = useState(true);
    const [val,setVal] = useState(0);
    const [wordData,setWordData]=useState(data[0])
    
    const handleContent = () => {
        setContent(!content);
    };

    const handleClick=(index)=>{
        console.log(index)
        setVal(index)
        const wordSlider=data[index];
        setWordData(wordSlider)
    };

    return (
        <Fragment>
            <div className="container-fluid mt-5">
                <div className="row pb-4">
                    <div className="col-md-1"></div>
                    <div className="col-12 col-md-10">
                        <div className="row p-3 mt-3">
                            <div className="col-12 col-md-6 pe-5">
                                <img src={wordData.image} style={{height:'450', width:'100%'}} onError={(e) => { e.target.src = ImageError; }}/> 
                                <div className="thumbnail d-flex justify-content-center">
                                    {data.map((item, i)=>(
                                        <img className='mx-1' key={i} alt="" src={item.image} onClick={()=>handleClick(i)} style={{ height: '5vw', width: '5vw',border:'1px solid grey', borderRadius: '0.5vw'}} onError={(e) => { e.target.src = ImageError; }}/>
                                    ))}
                                </div>
                            </div>
                            <div className="col-12 col-md-6 ps-5">
                                {data.title ? (
                                    <>
                                        <p>{data.title}</p>
                                    </>
                                ) : (
                                    <p>Tidak ada data</p>
                                )}
                                <p>Product Type:</p>                     
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
                <div className="row mt-5 pt-5" style={{backgroundColor:'#F4F4F4'}}>
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
                        <div className="row pb-5">
                            {content && description.map((item, index) => (
                                <div key={index} className="col-12 col-sm-4" style={{textAlign:'justify'}}>
                                    <div className="card mt-3 ">
                                        <p className='pt-1 px-3' style={{fontFamily:'poppins', fontSize:'24px'}}>{item.title}</p>
                                        <p className='pb-1 px-3' style={{fontFamily:'poppins', fontSize:'12px'}}>{item.content}</p>
                                    </div>
                                </div>
                            ))}
                            {!content &&
                                <div className="col-12">
                                    <p>{spesification}</p>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="col-md-1 "></div>
                </div>
            </div>
        </Fragment>
    );
}

export default Index; 


