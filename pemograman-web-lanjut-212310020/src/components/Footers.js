import React from 'react'

export default function Footers() {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-body-secondary">&copy; 2024 Company, Inc</p>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><a className="nav-link px-2 text-body-secondary">Home</a></li>
                    <li className="nav-item"><a className="nav-link px-2 text-body-secondary">Features</a></li>
                    <li className="nav-item"><a className="nav-link px-2 text-body-secondary">Pricing</a></li>
                    <li className="nav-item"><a className="nav-link px-2 text-body-secondary">FAQs</a></li>
                    <li className="nav-item"><a className="nav-link px-2 text-body-secondary">About</a></li>
                </ul>
            </footer>
        </div>
    )
}
