import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

export default function Sid(){

    const {id} = useParams()
    const [coll, setColl] = useState()
    useEffect(()=>{
        ( async()=>{
            try{
                const res = await fetch(`/api/ge/${id}`);
                const data = await res.json()
                setColl(data)


        }catch(err)  {
            return "something went wrong"
        }

        }
            

    )()
        
    },[id])

    return (
 <ul>
            {coll &&(
                <>
                <li>{coll.title}</li>
            <li>{coll.description}</li>
                </>
                

            ) }
        </ul>
        )

}