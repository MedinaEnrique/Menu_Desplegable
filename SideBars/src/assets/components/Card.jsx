import React from 'react'
import Imagen from './ImgComponent'
import CardBody from './CardBody'
const Card = () => {
    return (
        <>
            <div className='container mt-5'>
                <div className="card mx-auto shadow justify-content-center d-flex align-items-center p-5"> 
                    <Imagen />
                    <CardBody />
                </div>
            </div>
        </>
    )
}

export default Card