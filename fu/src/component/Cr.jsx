// import { useState } from "react"


// export default function Cr(){
//     const [vara, setVara] = useState({
//         ct:'',
//         cd:''
//     })

    
//     async function handleChange(e){
//         const {name, value} = e.target
//         // setVara((prev)=>({...prev,[name]:value}))
//         setVara((prev)=>{
//             return {...prev, [name]:value}
//         })


//     }
    
//     return(
//         <>
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>CT</label>
//                 <input placeholder={"ct"} name = "ct" value={vara.cd} onChange={handleChange}></input>
//             </div>
//              <div>
//                 <label>CD</label>
//                 <input placeholder={"cd"} name = "cd" value={vara.ct} onChange={handleChange}></input>
//             </div>
//             <button type="submit">S</button>
//         </form>
        
//         </>
//     )
// }