import { Button, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const BlogAdd = () => {
  
  return (
    <div style={{paddingTop:"80px"}}>
        <Typography variant='h2'>
          <h3>BLOG FORM</h3>
        </Typography>
        <TextField label='Blog Name' variant='outlined' /><br></br><br></br>
        <TextField label='Description' variant='outlined' /><br></br><br></br>
        <TextField label='Author Name' variant='outlined' /><br></br><br></br>

        <Button variant='contained' color='secondary' >submit</Button>
    </div>
  )
}


export default BlogAdd


