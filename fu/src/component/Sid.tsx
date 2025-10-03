import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

export default function Sid(){

    const {id} = useParams()
    interface CollType {
        title: string;
        description: string;
        // add other properties if needed
    }

    const [coll, setColl] = useState<CollType | null>(null)
    const [form, setForm] = useState({title:'', description:''})
    const []
    useEffect(()=>{
        ( async()=>{
            try{
                const res = await fetch(`/api/ge/${id}`);
                const data = await res.json()
                setColl(data)
                setForm({
                    title:data.title ?? '',
                    description:data.description ?? ''
                })


        }catch(err)  {
            console.error("something went wrong", err);
        }

        }
            

    )()
        
    },[id])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.currentTarget
        setForm(prev=>({
             ...prev, [name]:value
        }
           

        )
            
            
        )
    }
    const handleSubmit = async ()=>{
        const res = await fetch(`/api/update/${id}`,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(up)
        })

    }

    return (
        <>
        <ul>
            {coll &&(
                <>
                <li>{coll?.title}</li>
            <li>{coll?.description}</li>
                </>
                

            ) }
        </ul>

        <form onSubmit={handleSubmit}>

            <div>
                <label>Title</label>
                <input name="title" value={form?.title} onChange={handleChange}></input>
            </div>
            <div>
                <label>Description</label>
                <input name="description" value={form?.description} onChange={handleChange}></input>
            </div>
        </form>
        
        
        </>
 
        )

}