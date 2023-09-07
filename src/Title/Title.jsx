import 'bootstrap/dist/css/bootstrap.min.css';
import "./title.css"
import img from '../Images/main/bg2.jpeg';
import { useTranslation } from 'react-i18next';

const Title = () => {
    const [ t , i18n ] = useTranslation("global");
    
    return (
        <div className="card mb-3 main-container" id='home'>
            <div className="row g-0 title">
                <div className="col-md-4">
                    <div className="card-body">
                        <h1 className="main-title">{t("Title.Main-Title")}</h1>
                        <h1 className="main-title">{t("Title.Sub-Title")}</h1>
                    </div>
                </div>
                <div className="col-md-8 image">
                    <img src={img} className="img-fluid rounded-start" alt="..." />
                </div>
            </div>
        </div>
    );
};

export default Title;