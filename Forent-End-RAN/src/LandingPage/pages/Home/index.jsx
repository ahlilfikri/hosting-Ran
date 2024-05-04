
import { Component, Fragment} from 'react';
const port = `${import.meta.env.VITE_BASE_URL}/`;
import axios from 'axios';
import AboutUs from './session/AboutUs'
import Mitra from './session/Mitra';
import Kategori from './session/Kategori';
import Product from './session/ProdukTerbaru';
import Kegiatan from './session/Kegiatan';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

class Index extends Component {    
    componentDidMount() {
        this.contVisitor();
    }
    
    contVisitor = async () => {
        try {
            const response = await axios.post(`${port}visit/visitor-count`);
        } catch (error) {
            console.log(error.message);
        }
    };

    render() {
        return (
            <Fragment>
                <Navbar sectionId="kontak-section" />
                <section id='tentangKami-section'>
                    <AboutUs />
                </section>
                <Mitra />
                <Kategori />
                <Product />
                <Kegiatan />
                <section id="kontak-section">
                    <Footer></Footer>
                </section>
            </Fragment>
        );
    }
}

export default Index;
