import 'bootstrap/dist/css/bootstrap.min.css';
import "./contact.css";

const Contact = () => {
    return (
        <div className="card mb-3 contact" id='contact'>
            <div className="row g-0">
                <div className="col-md-4">
                    <div className="card-body">
                        <h1 className="conatct-title1">Contact</h1>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="conatct-title">Email : email@gmail.com</h5>
                        <h5 className="conatct-title">Telephone : 06000000</h5>
                        <h5 className="conatct-title">RIB : 123456789123456</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;