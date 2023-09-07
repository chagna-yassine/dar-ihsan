import 'bootstrap/dist/css/bootstrap.min.css';
import "./cards.css";

const Cards = () => {
    return (
        <>
        <h1 className='info-title'>
            Direction
        </h1>
        <div className="card-group">
        <div className="card center">
            <div className="icon-container">
                <svg className='icon' xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
            </div>
            <div className="card-body">
            <h5 className="card-title card-title">Vice President</h5>
            <p className="card-text">Vice President de L'association</p>
            </div>
        </div>
        <div className="card center">
            <div className="icon-container">
                <svg className='icon' xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
            </div>
            <div className="card-body">
            <h5 className="card-title card-title">President</h5>
            <p className="card-text">President de L'association</p>
            </div>
        </div>
        <div className="card center">
            <div className="icon-container">
                <svg className='icon' xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
            </div>
            <div className="card-body">
            <h5 className="card-title card-title">Directeur</h5>
            <p className="card-text">Directeur General</p>
            </div>
        </div>
        </div>
        </>
    );
};

export default Cards;