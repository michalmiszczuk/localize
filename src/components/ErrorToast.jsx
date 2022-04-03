import React from 'react';

function ErrorToast({ errorMsg }) {
    return (
        <div className='error-toast__container'>
            {errorMsg}
        </div>
    );
}

export default ErrorToast;