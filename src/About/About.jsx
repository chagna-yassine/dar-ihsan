import 'bootstrap/dist/css/bootstrap.min.css';
import "./about.css";
import img from '../Images/main/bg.jpeg';

const About = () => {
    return (
        <>
        <h1 className='info-title'>
            About
        </h1>
        <div className="card mb-3 about-container">
            <div className="row g-0 title">
                <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="about-title">Card title</h1>
                        <h4 className="main-text">Sub Title</h4>
                    </div>
                </div>
                <div className="col-md-4 image">
                    <img src={img} className="img-fluid rounded-start" alt="..." />
                </div>
            </div>
        </div>
        <div className="card mb-3 about-container">
            <div className="row g-0 title">
                <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="about-title">Card title</h1>
                        <h4 className="main-text">Sub Title</h4>
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

export default About;