import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import "./contact.css";

const Contact = () => {
    const [ t , i18n ] = useTranslation("global");

    return (
        <div className="card mb-3 contact" id='contact'>
            <div className="row g-0">
                <div className="col-md-4">
                    <div className="card-body">
                        <h1 className="conatct-title1">{t("Contact.Contact-Title")}</h1>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="conatct-title">{t("Contact.Email")}</h5>
                        <h5 className="conatct-title">{t("Contact.Tele")}</h5>
                        <h5 className="conatct-title">{t("Contact.C-B")}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;