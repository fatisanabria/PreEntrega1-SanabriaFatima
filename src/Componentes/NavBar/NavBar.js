import React from "react";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
    return (
        <header className="container-fluid g-0" style={{ backgroundColor: '#c6e5d2'}}>
            <div>
                <h1 className="text-center pt-5 pb-2 fw-bold fst-italic">Merlina's</h1>
            </div>
            <nav className="navbar navbar-expand-lg d-flex justify-content-center">
                <div className="">
                    <button className="navbar-toggler btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className="nav-link btn fst-italic" aria-current="page" href="#">Inicio</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn fst-italic" href="#">Vestimenta</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn fst-italic" href="#">Calzado</button>
                            </li>
                        </ul>
                        <span className="navbar-text ms-4">
                            <CartWidget/>
                        </span>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default NavBar;