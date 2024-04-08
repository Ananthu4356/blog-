import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar>
            <Toolbar>
                    <Typography variant='h4' color={'none'}>BLOG APP</Typography>
                    <Button variant='contained' color='error' size='small'><Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home
                    </Link></Button><br></br>
                    <Button variant='contained' color='success'>
                    <Link to={'/add'} style={{textDecoration:'none',color:'white'}}>ADD Blog
                    </Link></Button><br></br>
            </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
