import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import "./cards.css";

const Cards = () => {
    const [ t , i18n ] = useTranslation("global");

    return (
        <>
        <h1 className='info-title'>
            {t("Direction.D-Title")}
        </h1>
        <div className="card-group">
        <div className="card center">
            <div className="card-icon-container">
                <svg className='icon' xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
            </div>
            <div className="card-body">
            <h5 className="card-title card-title">{t("Direction.N-V-P")}</h5>
            <p className="card-text">{t("Direction.Vice-President")}</p>
            <p className="card-text">{t("Direction.Vice-President-t")}</p>
            </div>
        </div>
        <div className="card center">
            <div className="card-icon-container">
                <svg className='icon' xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
            </div>
            <div className="card-body">
            <h5 className="card-title card-title">{t("Direction.N-D")}</h5>
            <p className="card-text">{t("Direction.Directeur")}</p>
            <p className="card-text">{t("Direction.Directeur-t")}</p>
            </div>
        </div>
        <div className="card center">
            <div className="card-icon-container">
                <svg className='icon' xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
            </div>
            <div className="card-body">
            <h5 className="card-title card-title">{t("Direction.N-F")}</h5>
            <p className="card-text">{t("Direction.Finance")}</p>
            <p className="card-text">{t("Direction.Finance-t")}</p>
            </div>
        </div>
        </div>
        </>
    );
};

export default Cards;