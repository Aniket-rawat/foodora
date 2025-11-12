import React from 'react'

const Title = ({ title1, title2, titleStyles, title1Styles, paraStyles }) => {
    return (
        <div className={`${titleStyles} pb-1`}>
            <h2 className={`${title1Styles} font-bold mb-4`}>
                {title1}
                <span className='text-amber-600 font-medium'> {title2}</span>
            </h2>
            <p className={`${paraStyles} hidden`}>
                Our food products are crafted with the finest ingredients to
                deliver exceptional taste and quality.
            </p>
        </div>
    )
}

export default Title
