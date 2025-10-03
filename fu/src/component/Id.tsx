import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'

// type Item = {id: string | number;
//     title:string;
//     description:string

// }

type Item = {
    _id: string | number;
    title: string;
    description: string;
};

export default function Id() {
    const [value, setValue] = useState<Item[]>([]);

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
            {value.map(item => (
                <li key={item._id}>
                    <Link to={`/ge/${item._id}`}>{item.title}</Link>
                    <br />
                    <Link to={`/ge/${item._id}`}>{item.description}</Link>
                    <br />
                    <button>
                        <Link to={`/ge/${item._id}`}>Edit</Link>
                    </button>
                </li>
            ))}
 
        </ul>

    )


}















