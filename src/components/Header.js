import React from 'react'

const Header = ({title}) => {
  return (
    <div className='header'>
      <div className='inner-one'>
        <div className='sub-inner-one'>
          <div className='sub-inner-one-inner'>
            <i className="fas fa-dollar-sign fa-7x"></i>
          </div>
        </div>
      </div>
    </div>
    // < h1 className='text-center header' > {title}</h1 >
  )
}
export default Header

  
Header.defaultProps = {
  title: 'Budget Tracker'
}
