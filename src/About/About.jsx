import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import "./about.css";
import img from '../Images/main/bg.jpeg';

const About = () => {
    const [ t , i18n ] = useTranslation("global");

    return (
        <section id='about'>
        <h1 className='info-title'>
            {t("About.About-Title")}
        </h1>
        <div className="card mb-3 about-container">
            <div className="row g-0 title">
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="main-text">{t("About.Type")}</h5>
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
                        <h4 className="main-text">{t("About.Service")}</h4>
                    </div>
                </div>
                <div className="col-md-4 image">
                    <img src={img} className="img-fluid rounded-start" alt="..." />
                </div>
            </div>
        </div>
        </section>
    );
};

export default About;