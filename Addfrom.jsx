import { TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Addfrom = () => {
    var [users,setUsers] = useState([])

    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res)=>{
        console.log(res.data)
        setUsers(res.data)
      })
      .catch(err=>console.log(err))
    },[])
    return (
      <div style={{paddingTop:"80px"}}>
        <TableHead>
            <TableRow>
                <TableCell><h3>id</h3></TableCell>
                <TableCell><h3>title</h3></TableCell>
                </TableRow>
        </TableHead>
        <TableBody>
            {users.map((val,i)=>{
              return(
              <TableRow>
                  <TableCell>{val.id}</TableCell>
                  <TableCell>{val.title}</TableCell>
              </TableRow>
              )
            })}
        </TableBody>
        
    
      
    </div>
  )
}

export default Addfrom

