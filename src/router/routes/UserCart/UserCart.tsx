import { Link } from 'react-router-dom';
import './UserCart.css';

export default function UserCart() {
    return (
        <div className="details-wrapper">
            <header className="details-header">
                <Link to="/">
                    <button className="btn-header btn-arrow-back"></button>
                </Link>
                <h4>My Cart</h4>
                <button className="btn-header btn-favourite"></button>
            </header>
            <main className="details-main">
                <h3 className="items-total">3 Items</h3>
                <ul className="cart-item-list">
                    <li>
                        <article className="cart-item">
                            <img src="/plants/boston-ivy.png" alt="" className="plant-img-small" />
                            <h4 className="cart-item-name">Plant name</h4>
                            <p className="cart-item-description">Leafy, green, tropical foliage.</p>
                            <p className="cart-item-price">$32.0</p>
                            <p className="item-cart-rating">5.6</p>
                            <div className="cart-item-quantity">
                                <button className="increase-quantity">+</button>
                                <p className="cart-item-quantity-value">1</p>
                                <button className="decrease-quantity">-</button>
                            </div>
                        </article>
                    </li>
                    <li>
                        <article className="cart-item">
                            <img src="/plants/boston-ivy.png" alt="" className="plant-img-small" />
                            <h4 className="cart-item-name">Plant name</h4>
                            <p className="cart-item-description">Leafy, green, tropical foliage.</p>
                            <p className="cart-item-price">$32.0</p>
                            <p className="item-cart-rating">5.6</p>
                            <div className="cart-item-quantity">
                                <button className="increase-quantity">+</button>
                                <p className="cart-item-quantity-value">1</p>
                                <button className="decrease-quantity">-</button>
                            </div>
                        </article>
                    </li>
                    <li>
                        <article className="cart-item">
                            <img src="/plants/boston-ivy.png" alt="" className="plant-img-small" />
                            <h4 className="cart-item-name">Plant name</h4>
                            <p className="cart-item-description">Leafy, green, tropical foliage.</p>
                            <p className="cart-item-price">$32.0</p>
                            <p className="item-cart-rating">5.6</p>
                            <div className="cart-item-quantity">
                                <button className="increase-quantity">+</button>
                                <p className="cart-item-quantity-value">1</p>
                                <button className="decrease-quantity">-</button>
                            </div>
                        </article>
                    </li>
                </ul>
            </main>
            <footer className="details-footer">
                <div className="footer-estimate">
                    <p>
                        <span className="estimate-title">Subtotal:</span>
                        <span className="estimate-value">$140</span>
                    </p>
                    <p>
                        <span className="estimate-title">Delivery fee:</span>
                        <span className="estimate-value">$10</span>
                    </p>
                    <p>
                        <span className="estimate-title">Discount:</span>
                        <span className="estimate-value">15%</span>
                    </p>
                </div>
                <div className="footer-controls">
                    <p className="total-price">$127.5</p>
                    <button className="buy-now">Buy now</button>
                </div>
            </footer>
        </div>
    );
}