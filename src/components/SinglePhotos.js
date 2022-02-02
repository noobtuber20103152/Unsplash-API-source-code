import React from 'react'
function SinglePhotos(props) {
    return (
        <div className="col-md-2 my-2 mx-2 d-flex justify-content-center align-items-end">
            <a className='d-flex flex-column align-items-center' href={props.downloadlink} target="_blank" download>
                <img className='Images' src={props.src} style={{ objectFit: 'contain' }} alt="" />
                <button type="button" className="btn btn-sm mx-2 my-1 btn-primary position-relative">Likes<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> {props.likes} <span className="visually-hidden">unread messages</span>
                </span>
                </button>
            </a>
        </div>

    )
}

export default SinglePhotos
