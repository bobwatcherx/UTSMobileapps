import {useState,useEffect} from 'react';
import {useNavigate,Link} from 'react-router-dom';

export default function Login(){
	const [ceklogin,setCeklogin] = useState([])
	const [user,setUser] = useState("")
	const [pw,setPw] = useState("")

	let navigate = useNavigate()
	useEffect(()=>{
		getfetch()
	},[])
	async function getfetch(){
		await fetch("http://localhost:5000/data")
		.then((res)=>res.json())
		.then((data)=>{
			setCeklogin(data)
		})
	}
	function btncek(){
		if(user === ceklogin.username && pw == ceklogin.password){
			alert("Login Berhasil")
			localStorage.setItem("user",JSON.stringify({user:user,pw:pw}))
			navigate("/landing")
		}
		else if(user === "" && pw ===""){
			alert("username kosong dan password kosong")
		}
		else{
			alert("salah username dan password")
		}
	}
	return(
		<div>
		<div style={styles.rounded}>
		<h1>Login</h1>
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
		<button
		onClick={btncek}
		 style={styles.buttonsub}>
		Login
		</button>
		</div>
		<Link to="/register">Register akun</Link>
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
		backgroundColor:"purple",
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