import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logoImg from '../assets/aave-aave-logo.png'
const Nav = () => {
  const navigate = useNavigate()
    let data = localStorage.getItem('users')
data = JSON.parse(data)
const logoutFun=()=>{
    localStorage.clear('users')
    navigate('/')
}
  return (

    <div className='navDiv'>
        <ul>
            
            {!data?<><li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/admin'>Admin</Link></li>
            </>:
            <>
           
            <li><Link to='/admin/product'>Product</Link></li>
            <li><Link to='/admin/addProduct'>Add Product</Link></li>
            <li className='logoutBtn' onClick={logoutFun}>Logout ({data.name} )</li>
            </>
            }
        </ul>
    </div>
  )
}

export default Nav