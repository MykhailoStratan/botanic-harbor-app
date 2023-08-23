import { Link } from "react-router-dom";
import './PlantDetails.css';

export default function PlantDetails() {
    return (
        <div className="details-wrapper">
            <header className="details-header">
                <Link to="/">
                    <button className="btn-details-header btn-arrow-back"></button>
                </Link>
                <h4>Plant Details</h4>
                <button className="btn-details-header btn-favourite"></button>
            </header>
            <main className="details-main">
                <ul className="plant-img-column">
                    <li><img src="/plants/boston-ivy.png" alt="" className="plant-img-small" /></li>
                    <li><img src="/plants/boston-ivy.png" alt="" className="plant-img-small" /></li>
                    <li><img src="/plants/boston-ivy.png" alt="" className="plant-img-small" /></li>
                </ul>
                <img src="/plants/boston-ivy.png" alt="" className="plant-img-large" />
                <p className="details-item-rating">
                    <img src="/star-icon.svg" alt="star" className="rating-image" />(4.8)
                </p>
            </main>
            <footer className="details-footer">
                <div className="footer-description">
                    <h3>Plant name</h3><span>$0.00</span>
                    <p className="plant-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores rem nobis aliquid ipsam veritatis non facilis quisquam esse a tempore tenetur.</p>
                    <div className="plant-tip-group">
                        <div className="plant-tip">
                            <img src="/brightness-icon.svg" alt="" className="plant-tip-img" />
                            <p className="planit-tip-description">Bright, indirect light</p>
                        </div>
                        <div className="plant-tip">
                            <img src="/temperature-icon.svg" alt="" className="plant-tip-img" />
                            <p className="planit-tip-description">Bright, indirect light</p>
                        </div>
                        <div className="plant-tip">
                            <img src="/watering-icon.svg" alt="" className="plant-tip-img" />
                            <p className="planit-tip-description">Bright, indirect light</p>
                        </div>
                    </div>
                </div>
                <div className="footer-controls">
                    <button className="btn-add-to-cart">
                        <img src="/cart-icon.svg" alt="" className="card-img" />Add to cart</button>
                    <button className="buy-now">Buy now</button>
                </div>
            </footer>
        </div>
    );
}