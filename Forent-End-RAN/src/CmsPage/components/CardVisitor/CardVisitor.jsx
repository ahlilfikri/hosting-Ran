const port = `${import.meta.env.VITE_BASE_URL}/`;
import axios from 'axios';
import { useState, useEffect } from 'react'; 

const CardVisitor = () => {
    const [data, setData] = useState(null);

    const getDataVisitor = async () => {
        try {
            const response = await axios.get(`${port}visit/visitor-get`);
            setData(response.data.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getDataVisitor();
        const interval = setInterval(() => {
            getDataVisitor();
        }, 5000); // Polling data setiap 5 detik

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {data && (
                <div className="set-card-visitor">
                    <h3>
                        <div className="card-visitor">
                            <div className="card-visitor-body">
                                <div className="card-visitor-title">Total pengunjung</div>
                                <div className="card-visitor-value">{data / 2}</div>
                            </div>
                        </div>
                    </h3>
                </div>
            )}
        </>
    )
}

export default CardVisitor;
