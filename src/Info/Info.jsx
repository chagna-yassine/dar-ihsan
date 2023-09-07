import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../Images/main/bg.jpeg';

const Info = () => {
    return (
        <>
            <div className="card mb-3 main-container">
                <div className="row g-0 title">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Sub Title</p>
                        </div>
                    </div>
                    <div className="col-md-4 image">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                </div>
            </div>
            <div className="card mb-3 main-container">
                <div className="row g-0 title">
                    <div className="col-md-4 image">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Sub Title</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 main-container">
                <div className="row g-0 title">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Sub Title</p>
                        </div>
                    </div>
                    <div className="col-md-4 image">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Info;