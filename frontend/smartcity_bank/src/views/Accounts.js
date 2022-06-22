import '../index.css'

import {useEffect, useState} from "react"
import AccountGrid from '../components/AccountGrid'
import React from 'react'
import axios from "axios"

import {Dialog} from '@mui/material'
import {DialogActions} from '@mui/material'
import {DialogContent} from '@mui/material'
import {DialogTitle} from '@mui/material'
import {TextField} from '@mui/material'
import {Button} from '@mui/material'

function Accounts() {
  const [accounts, setAccounts] = useState([])
  useEffect(() => { getAccounts() }, [])

  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [iban, setIBAN] = useState("")

  const getAccounts = async () => {
    await axios.get(process.env.REACT_APP_API_URL+"/account", []).then(response => {
        setAccounts(response.data);
    })
  }
  
  const handleChange = (event) => {
    if(event.target.name === "name")
      setName(event.target.value)
    else if(event.target.name === "iban")
      setIBAN(event.target.value)
  }
  
  const handleSubmit = async() => {
    const url = window.env.REACT_APP_API_URL+"/account/"
    
    if(name === "" || iban === ""){
      setOpen(false)
      return
    }

    await axios.post(url, {
      "name": name,
      "IBAN": iban,
      "credit": 0
    }, {withCredentials: true})
      .then(res => {
        console.log(res)
      })
    setOpen(false)
  }

  return (
    <>
      <AccountGrid data={accounts} />

      <Button sx={{marginLeft: 5}}variant="contained" size="small" onClick={() => {setOpen(true)}}>Neues Konto</Button>
      
      <Dialog open={open} onClose={() => {setOpen(false)}} fullWidth="md" sx={{padding:5}}>
          <DialogTitle>Neues Konto</DialogTitle>
          <DialogContent>
            <TextField
              required
              autoFocus
              variant="standard"
              margin="dense"
              name="name"
              onChange={handleChange}
              label="Kontoname"
              fullWidth
            />
            <TextField
              required
              variant="standard"
              margin="dense"
              name="iban"
              onChange={handleChange}
              label="IBAN"
              fullWidth
              rows={4}
              helperText="z.B. DE 4323 2344 3242"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSubmit}>Erstellen</Button>
          </DialogActions>
        </Dialog>
    </>
  )
}

export default Accounts;
