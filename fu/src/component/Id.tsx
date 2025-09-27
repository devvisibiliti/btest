import { useEffect, useState } from "react"

 export default function Id(){
    const [value, setValue] = useState([])

    useEffect(()=>{
        const re = async ()=>{
            const res = await fetch('/api/ge',)
            const data = await res.json();
            setValue(data)
           


        };
        re()

    },[])


    return(
        
        <ul>
            {value.map((dg)=>{
 <li>key={dg.id}
                <h1>{dg.title}</h1>
                <h2>{dg.description}</h2>
            </li>
            })
           
 }
 
        </ul>

    )


}