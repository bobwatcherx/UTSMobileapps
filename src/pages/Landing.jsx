
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
export default function Landing(){
	const [nbuku,setNbuku] = useState("")
	const [nharga,setNharga] = useState("")
	const [ndeskripsi,setNdeskripsi] = useState("")
	const [book,setBook] = useState([
	{
		nama:"matematika",
		harga:2000,
		deskripsi:"ini buku baru"
	}])
	let navigate = useNavigate()
	function btnlogout(){
		navigate("/")
		localStorage.removeItem("user")
	}
	function btnremove(index){
		let newtast = [...book]
		newtast.splice(index,1)
		setBook(newtast)
	}
	function btntambah(){
		setBook([...book,{
			nama:nbuku,
			harga:nharga,
			deskripsi:ndeskripsi
		}])
		console.log(book)
	}

	return(
		<div>
		<div style={styles.navbar}>
		<h1>Daftar Buku</h1>
		<button onClick={btnlogout}>Logout</button>
		</div>
		<div style={styles.list}>
		<h1>Input Buku</h1>
		<br/>
		<input placeholder="nama"
		onChange={(e)=>setNbuku(e.target.value)}
		/>
		<br/>
		<input placeholder="harga"
		onChange={(e)=>setNharga(e.target.value)}
		/>
		<br/>
		<input placeholder="deskripsi"
		onChange={(e)=>setNdeskripsi(e.target.value)}
		/>
		<br/>
		<button
		onClick={btntambah}
		style={{backgroundColor:"green",color:"white"}}
		>Tambah</button>
		</div>
		<hr  style={{border:"2px solid grey"}}/>
		<div>
		<h1>List Buku</h1>
		<br/>
			{book.map((p,index)=>(
				<div style={{
					backgroundColor:"purple",
					color:"white",
					margin:10,
					padding:10
				}}>
				<h1>{p.nama}</h1>
				<br/>
				harga : {p.harga}
				<br/>
				deskripsi :{p.deskripsi}
				<br/>
				<button
				onClick={()=>btnremove(index)}
				>delete</button>
				</div>
				))}
		</div>
		</div>
		)
}
const styles  = {
	list:{
		display:"flex",
		flexDirection:"column",
		justifyContent:"center",
		margin:20
	},
	navbar:{
		backgroundColor:"orange",
		color:"white",
		padding:10,
		display:"flex",
		flexDirection:"row",
		justifyContent:"space-between"
	}
}