import React from 'react'

function FrontPage(props) {
    return (
        <>
            <div id='FrontPage' className="container-fluid">
                <div className="container">
                    <h1 style={{ color: 'white' }} className='py-5 pb-0'>Unsplash Images</h1>
                    <p style={{ color: 'white' }} className='py-0 my-0'>The internet’s source of freely-usable images.</p>
                    <p style={{ color: 'white' }} className='py-0 my-0'>Powered by creators everywhere.</p>
                    <div className="my-5 d-flex form-inputs">
                        <input id="SearchItem" className="form-control" type="text" placeholder="Search any product..." />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FrontPage
