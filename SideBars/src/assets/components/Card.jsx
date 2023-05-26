import React from 'react'
import Imagen from './ImgComponent'
import CardBody from './CardBody'
const Card = () => {
    return (
        <>
            <div className='container mt-5'>
                <div className="card col-md-5 col-lg-4 mx-auto shadow"> 
                    <Imagen />
                    <CardBody />
                </div>
            </div>
        </>
    )
}

export default Card