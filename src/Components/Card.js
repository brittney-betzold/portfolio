import React from 'react';
import './Card.css'
function Card({ title, body }) {
    return (
        <div className="container">
            <div className='card-container '>
                <div className="image-container">
                </div>
                <div className="card-content">
                    <div className="card-title">
                        <h3>{title}</h3>
                    </div>
                    <div className="card-body">
                        <p>{body}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card