import { useEffect, useState } from "react"
import axios from "axios"

import { Link, Typography } from "@mui/material"

const CheckAuthPage = (props) => {
	const [auth, setAuth] = useState(false)

	const isAuth = async() => {
			const url = process.env.REACT_APP_API_URL + "/auth"
			await axios.get(url, {withCredentials: true})
			.then(() => {
					setAuth(true)
					})
	}

	useEffect(() => {isAuth()}, [])

	if(auth) {
			return (
			<>
					{props.page}
			</>
	)
	}
	else {
			return (
				<div className="content">
					<Typography variant="h5" align="center">401: Keinen Zugriff</Typography>
					<hr/>
					<Typography color={"text.secondary"} align="center">
						Überprüfe ob du angemeldet bist.
						<br/>
						<Link underline="none" href="/">Zur Hauptseite</Link>
					</Typography>
				</div>
			)
	}
}

export default CheckAuthPage