import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import './Buttons.css'

const NavButtons = props => (
  <span>
    <Link to={(props.prev ? props.prev : '')} className={(!props.showPrev && 'display-none')}>
      <button className='Button'>&larr;</button>
    </Link>
    <Link to={(props.next ? props.next : '')} className={(!props.showNext && 'display-none')}>
      <button className='Button'>&rarr;</button>
    </Link>
  </span>
)

NavButtons.propTypes = {
  next: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  prev: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  showPrev: PropTypes.bool.isRequired,
  showNext: PropTypes.bool.isRequired
}

export default NavButtons