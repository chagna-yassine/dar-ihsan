import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import "./state.css"

const State = () => {
    const [ t , i18n ] = useTranslation("global");

    return (
        <>
            <h1 className='info-title'>
                {t("State.State-Title")}
            </h1>
            <div className="card mb-3 mainInfo-container">
                <div className="row g-0 info-container">
                    <div className="col-md-11">
                        <div className="card-body text">
                            <p className="card-text">{t("State.Employees1")}</p>
                            {/* <p className="card-text">{t("State.Employees2")}</p> */}
                            <p className="card-text">{t("State.Employees3")}</p>
                        </div>
                    </div>
                    {/* <div className="col-md-4 icon-container">
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                    </div> */}
                </div>
            </div>
            <div className="card mb-3 mainInfo-container">
                <div className="row g-0 info-container">
                    <div className="col-md-11">
                        <div className="card-body text">
                            <p className="card-text">{t("State.Part1")}</p>
                            <p className="card-text">{t("State.Part2")}</p>
                            {/* <p className="card-text">{t("State.Part3")}</p> */}
                            <p className="card-text">{t("State.Part4")}</p>
                            <p className="card-text">{t("State.Part5")}</p>
                        </div>
                    </div>
                    {/* <div className="col-md-4 icon-container">
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default State;