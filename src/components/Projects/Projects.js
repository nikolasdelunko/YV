import React from 'react'
import {Box} from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react';


export default function Projects() {
    const [data, setData] = useState()

    const getInfo = async() => {
        const res =  await axios.get('http://localhost:3009/projects')
        return setData(res.data)
    }

    useEffect(() => {
        getInfo()
    }, [])
    console.log('AAAAAA', data)
  return (
    <Box>
    <h1>Projects</h1>
    </Box>
  )
}
