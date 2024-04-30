import ImageError from '../../../../../assets/error.png';
import React, { Fragment, useState, useEffect } from 'react';
import Navbar from '../../../../components/Navbar/Navbar';
import axios from 'axios';
import Footer from '../../../../components/Footer/Footer';
import { Link } from 'react-router-dom';

const port = `${import.meta.env.VITE_BASE_URL}/`;

const Index = () => {
    const [data, setData] = useState([]);
    const [kategori, setKategori] = useState([]);
    const [sortBy, setSortBy] = useState('');
    const [selectSort, setSelectSort] = useState("none");
    const [searchQuery, setSearchQuery] = useState('');
    const [loadState, setLoadState] = useState('');
    const [kategoriSort, setKategoriSort] = useState('none');

    const GetFromKategoriApi = async () => {
        try {
            const response = await axios.get(`${port}kategori`);
            setKategori(response.data.payload.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    const GetFromProductApi = async () => {
        try {
            setLoadState('load')
            let response;
            if (searchQuery == '') {
                response = await axios.get(`${port}ofp/search/-1/${selectSort}/${kategoriSort}`);
            } else {
                response = await axios.get(`${port}ofp/search/${searchQuery}/${selectSort}/${kategoriSort}`);
            }

            setData(response.data.payload.data);
            setLoadState('success')
        } catch (error) {
            console.log(error.message);
            setLoadState('fail')
        }
    };

    const handleSortChange = async (event) => {
        const selectedSortBy = event.target.value;
        setSelectSort(selectedSortBy);
        if (selectedSortBy === 'none') {
            setSortBy("none");
        } else if (selectedSortBy === 'latest') {
            setSortBy(`latest`);
        } else if (selectedSortBy === 'oldest') {
            setSortBy(`oldest`);
        }
    };

    const handleSearch = async (event) => {
        const search = event.target.value;
        setSearchQuery(search);
        if (search === '') {
            setSearchQuery('');
        }
    }

    const handleKategori = async (event) => {
        const category = event.target.textContent;
        if (kategoriSort == category) {
            setKategoriSort('none');
        } else {
            setKategoriSort(category);
        }
    }


    useEffect(() => {
        GetFromKategoriApi();
    }, []);

    useEffect(() => {
        GetFromProductApi();
    }, [sortBy, searchQuery, kategoriSort]);

    console.log(data);
    return (
        <Fragment>
            <Navbar sectionId={'kontak-section-product'}></Navbar>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-8 col-sm-2">
                        <h3>Produk</h3>
                    </div>
                    <div className="col-12 col-sm-8 " >
                        <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                            <label htmlFor="sort" className="pe-2">Sort By :</label>
                            <select className="p-2" id="sort" onChange={handleSortChange} value={selectSort} style={{ background: 'white', color: 'black', borderRadius: '0.5vw', border: '1 px solid #959595' }}>
                                <option value="none" disabled>Choose Sort</option>
                                <option value="none">None</option>
                                <option value="latest">Latest Product</option>
                                <option value="oldest">Oldest Product</option>
                                <option value="top">Top Product</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-8 col-sm-2 mt-3">
                        <div className="search d-flex align-items-center">
                            <input className="py-2" type="text" value={searchQuery} onChange={handleSearch} placeholder={`Search Products...`} style={{ border: '1.5px solid #d8d5d5', background: 'white', borderRadius: '0.5vw', borderRight: 'none', borderTopRightRadius: '0', borderBottomRightRadius: '0', maxWidth: '80%', color: 'black' }} />
                            <i className="fa-solid fa-magnifying-glass" style={{ border: '1.5px solid #d8d5d5', borderTopRightRadius: '0.5vw', borderBottomRightRadius: '0.5vw', padding: '12px 10px 12px 0', borderLeft: 'none' }}></i>
                        </div>
                        <h3 className='mt-5'>All Categories</h3>
                        {kategori.map((item, index) => {
                            const categoryStyle = {
                                cursor: 'pointer',
                                overflow: 'hidden',
                                backgroundColor: kategoriSort === item.nama ? '#C7C7C7' : '#F3F3F3',
                                borderRadius: '0.3vw'
                            };
                            return (
                                <p
                                    key={index}
                                    onClick={handleKategori}
                                    value={item.nama}
                                    className="text-center p-1"
                                    style={categoryStyle}>
                                    {item.nama}
                                </p>
                            );
                        })}
                        <h3 className='mt-5'>Brands</h3>
                    </div>
                    <div className="col-12 col-sm-8 mt-3">
                        <div className="row">
                            {loadState === 'load' && <p>Loading...</p>}
                            {loadState === 'success' && data && data.map((item, index) => {
                                const imageSrc = `${import.meta.env.VITE_BASE_URL}/assets/${encodeURIComponent(item.image)}`;
                                return (
                                    <div key={index} className="col-6 col-md-3">
                                        <Link to={`/detail-produk/${item._id}`}>
                                            <div className="image-container" style={{ overflow: 'hidden', height: '68%' }}>
                                                <img src={imageSrc} alt="" style={{ height: '100%', width: '100%', objectFit: 'cover', border: '1px solid #d8d5d5' }} onError={(e) => { e.target.src = ImageError; }} />
                                            </div>
                                            <div id="content-produkTerbaru" className="content" style={{}}>
                                                <p style={{ fontFamily: 'poppins', fontWeight: 'bold', fontSize: '20px' }}>{item.title}</p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                            {loadState === 'success' && data.length == 0 && <p>Data Tidak Ditemukan</p>}
                            {loadState === 'fail' && <p>Failed to fetch data.</p>}
                        </div>
                    </div>
                    <div className="col-sm-1">


                    </div>

                </div>
            </div>
            <section id='kontak-section-product'>
                <Footer />
            </section>
        </Fragment>
    );
}

export default Index; 
