import '../index.css'

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import React from 'react'
import axios from "axios"

import { Button } from '@mui/material'
import {Dialog} from '@mui/material'
import {DialogActions} from '@mui/material'
import {DialogContent} from '@mui/material'
import {DialogTitle} from '@mui/material'
import {TextField} from '@mui/material'
import { Card, CardContent, Divider, Typography } from "@mui/material"

import TransactionsList from '../components/TransactionsList'

function AccountDetails() {
  
  const [transactions, setTransactions] = useState([])
  useEffect(() => { getTransactions() })

  const {id} = useParams()
  const [name, setName] = useState("")
  const [iban, setIBAN] = useState("")
  const [balance, setBalance] = useState(0)
  const [open, setOpen] = useState(false)
  const [amount, setAmount] = useState(0)
  const [purposeofuse, setPurposeofuse] = useState("")
  const [receiver, setReceiver] = useState(0)

  useEffect(() => { getAccount() })

  const getAccount = async () => {
    await axios.get(process.env.REACT_APP_API_URL+"/account/"+id, []).then(response => {
        setName(response.data.name)
        setIBAN(response.data.IBAN)
        setBalance(response.data.credit)
    })
  }

  const getTransactions = async () => {
    await axios.get(process.env.REACT_APP_API_URL+"/account/"+id+"/transaction", []).then(response => {
      response.data.reverse()
      setTransactions(response.data);
    })
  }

  const newTransaction = async () => {
    const url = process.env.REACT_APP_API_URL+"/account/"+id+"/transaction"
    
    if(purposeofuse === "" || amount < 1) {
      setOpen(false)
      return
    }

    await axios.post(url, {
      "amount": parseInt(amount),
      "purposeofuse": purposeofuse,
      "ReceiverId": receiver
    }, {withCredentials: true})
      .then(res => {
        console.log(res)
      })
    setOpen(false)
  }

  const getCard = async () => {
    const url = process.env.REACT_APP_API_URL+"/account/"+id+"/card"
    
    await axios.post(url, {
    }, {withCredentials: true})
      .then(res => {
        console.log(res)
      })
  }

  const handleChange = (event) => {
    if(event.target.name === "receiver")
      setReceiver(event.target.value)
    else if(event.target.name === "amount")
      setAmount(event.target.value)
    else if(event.target.name === "purposeofuse")
      setPurposeofuse(event.target.value)
  }

  return (
      <>
        <Card elevation={0} sx={{margin: 5}}>
          <CardContent>
            <Typography variant="h4">{name}</Typography>
            <Typography color="text.secondary" fontSize={20}>{iban}</Typography>
            <Divider/>
            <br/>
            <Button sx={{marginRight: 2}} variant="contained" size="small" onClick={() => {setOpen(true)}}>Überweisung</Button>
            <Button variant="contained" size="small" onClick={getCard}>Karte</Button>
          </CardContent>
        </Card>
        <Card elevation={0} sx={{margin: 5}}>
          <CardContent>
            <Typography sx={{paddingBottom: 2}} fontSize={25}>{"Kontostand: "+balance}</Typography>
            <Divider/>
            <TransactionsList data={transactions}></TransactionsList>
          </CardContent>
        </Card>

        <Dialog open={open} onClose={() => {setOpen(false)}} fullWidth="md" sx={{padding:5}}>
          <DialogTitle>Überweisung</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              variant="standard"
              margin="dense"
              name="receiver"
              onChange={handleChange}
              label="Empfänger"
              fullWidth
            />
            <TextField
              variant="standard"
              margin="dense"
              name="amount"
              type="number"
              onChange={handleChange}
              label="Betrag"
              fullWidth
            />
            <TextField
              variant="standard"
              margin="dense"
              name="purposeofuse"
              onChange={handleChange}
              label="Verwendungszweck"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={newTransaction}>Senden</Button>
          </DialogActions>
        </Dialog>

      </>
    );
  }
  
  export default AccountDetails;