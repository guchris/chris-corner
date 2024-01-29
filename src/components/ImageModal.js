import React from 'react';

const ImageModal = ({ imageUrl, onClose }) => {
    return (
        <div className="image-modal-overlay" onClick={onClose}>
            <div className="image-modal-content">
                <span className="image-modal-close-btn" onClick={onClose}>&times;</span>
                <img src={imageUrl} alt="Large Image" />
            </div>
        </div>
    );
};

export default ImageModal;