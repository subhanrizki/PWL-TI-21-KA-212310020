import React from 'react'

export default function Headers() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <span className="fs-4">IBI Kesatuan</span>
                </div>

                <ul className="nav nav-pills">
                    <li class="nav-item"><a class="nav-link active" aria-current="page">Home</a></li>
                    <li class="nav-item"><a class="nav-link">Features</a></li>
                </ul>
            </header>
        </div>
    )
}
