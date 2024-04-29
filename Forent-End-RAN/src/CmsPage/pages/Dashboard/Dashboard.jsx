import React from 'react';
import './Dashboard.css';
import CardProduct from '../../components/CardProduct/CardProduct';
import CardKategori from '../../components/CardKategori/CardKategori';
import CardBanner from '../../components/CardBanner/CardBanner';
import CardVisitor from '../../components/CardVisitor/CardVisitor';
import Sidebar from '../../components/SideBar/Sidebar';

const DashboardCms = () => {
    if (!sessionStorage.getItem('token')) {
        // Handle invalid/expired token
        return (
            <div className="container-fluid" style={{ width: '100%', height: '100vh' }}>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-center p-4 bg-danger text-white rounded-lg">
                        <p>Silahkan login terlebih dahulu</p>
                        {/* Login Button */}
                        <button className="btn btn-primary" onClick={() => window.location.href = '/login/cms'}>Login</button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container-fluid" style={{ width: '100%', height: '100vh' ,
            padding: '20px', paddingTop: '1%', overflowY: 'hidden', 
            }}>
                <div className="row">
                    <div className="col-2">
                        <Sidebar />
                    </div>
                    <div className="col dashboard-content">
                        <div className="row">
                            <div className="col-md-3 mb-4">
                                <CardProduct />
                            </div>
                            <div className="col-md-3 mb-4">
                                <CardKategori />
                            </div>
                            <div className="col-md-3 mb-4">
                                <CardBanner />
                            </div>
                            <div className="col-md-3 mb-4">
                                <CardVisitor />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardCms;
