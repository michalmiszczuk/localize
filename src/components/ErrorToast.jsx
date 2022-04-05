import React from 'react';

function ErrorToast({ errorMsg, onClose }) {
    return (
        <div className='error-toast'>
            <div className='error-toast__error-msg'>{errorMsg}</div>
            <button className='btn btn__toast-close' onClick={onClose}>close</button>
        </div>
    );
}

export default ErrorToast;