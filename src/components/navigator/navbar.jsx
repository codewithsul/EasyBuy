import React from 'react'
import './navbar.css'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import { IconButton, Badge } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Link , useLocation} from 'react-router-dom'



const Nav = ({ totalItems }) => {
  const location = useLocation()

  return (
    <div className='wrapper'>
        <div className='nav_list'>
            <ul>
                <li id='project_name'>
                    EasyBuy
                </li>
                <li id='tab'>
                  <Link to= '/' >Home</Link>
                </li>
                {/*<li id='tab2'>
                  <button className='dropdown'>products</button>
                  <MdOutlineArrowDropDown />
                  <ul className='categories'>
                    <li id='link'>
                      <a href='#Electronics'> Electronics </a>
                    </li>
                    <li id='link'>
                      <a href='#Home'>Clothes</a>
                    </li>
                    <li id='link'>
                      <a href='#Office '>Gadgets</a>
                    </li>
                  </ul>
                 </li>*/}
            </ul>
        </div>
        { location.pathname === '/' && (
        <div className='item-cart'>
          <Link to = '/cart'>
            <IconButton aria-label="Show cart items" color="inherit" >
                <Badge badgeContent={ totalItems } color="secondary">
                  < ShoppingCart />
                </Badge>
            </IconButton>
          </Link> 
        </div> )}
    </div>
  )
}

export default Nav