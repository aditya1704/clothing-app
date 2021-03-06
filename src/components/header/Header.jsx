import React from 'react'
import {Link }from 'react-router-dom'
import {connect} from 'react-redux'

import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.scss'
import {auth} from '../../firebase/firebase-utilities'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
const Header = ({currentUser,hidden}) => {
    return (
        <div className='header'>
            <Link to='/' className='logo-container'><Logo className='logo'/></Link>
            <div className='options'>
                {currentUser?<span className='option'>{currentUser.displayName}</span>:<span></span>}
                <Link to='/shop' className='option'>Shop</Link>
                {currentUser ? 
                <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
                }
                <CartIcon/>
            </div>
            {
                hidden ? null: <CartDropdown/>
            }
        </div>
    )
}

const mapStateToProps =({user:{currentUser},cart:{hidden}})=>({
    currentUser,
    hidden
});


export default connect(mapStateToProps)(Header)
