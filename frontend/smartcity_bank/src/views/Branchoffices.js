import '../index.css'

import { useEffect, useState } from "react"

import BranchOfficesList from "../components/BranchOfficesList"
import React from 'react'
import axios from "axios"

const Branchoffices = () => {

  const [branches, setBranches] = useState([])
  useEffect(() => { getBranches() }, [])

  const getBranches = async () => {
    await axios.get(process.env.REACT_APP_API_URL+"/branchoffice", []).then(response => {
        setBranches(response.data);
    })
  }

  return (
    <>
      <BranchOfficesList data={branches} />
    </>
  )
}

export default Branchoffices;
