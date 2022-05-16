import {useState,useEffect} from 'react';
import {useNavigate,Link} from 'react-router-dom';

export default function Register(){
	const [ceklogin,setCeklogin] = useState([])
	const [user,setUser] = useState("")
	const [pw,setPw] = useState("")

	let navigate = useNavigate()
	
	async function btnregister(){
		let body = {
			username:user,
			password:pw
		}
		await fetch("http://localhost:5000/data",{
			method:"POST",
			headers:{
 		Accept: 'application.json',
  		  'Content-Type': 'application/json'
  		},
			body:JSON.stringify(body)
		}).then(()=>{
			alert("User berhasil di buat")
			console.log("user created")
			navigate("/")
		})

	}
	return(
		<div>
		<div style={styles.rounded}>
		<h1>Register</h1>
		</div>
		<div style={styles.container}>
		<br/>
		<input placeholder="username"
		onChange={(e)=>setUser(e.target.value)}/>
		<br/>
		<input
		placeholder="password"
		type="password"
		onChange={(e)=>setPw(e.target.value)}/>
		<br/>
		<button style={styles.buttonsub}
		onClick={btnregister}
		>
		Register
		</button>
		</div>
		<Link to="/">Login sekarang</Link>
		</div>
		)
}
const styles  ={
	buttonsub:{
		backgroundColor:"green",
		color:"white",
		padding:10
	},
	rounded:{
		backgroundColor:"red",
		color:"white",
		padding:10,
		borderRadius:"0px 0px 50px 50px"
	},
	container:{
		display:"flex",
		flexDirection:"column",
		margin:20
	}
}