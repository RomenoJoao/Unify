import React from 'react'
import '../components/styles/search.css'
import { IconButton } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
export default function SearchBar() {
  return (
    <div className='corpusb'>
         <div className='corpus1'>
          <IconButton>
            <SearchIcon />
          </IconButton>
          
            <input className='pesquisaF' type="text" placeholder='Pesquisar' />
        </div>
    </div>
  )
}
