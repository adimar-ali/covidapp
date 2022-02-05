import axios from "axios";
import { useEffect, useState } from "react";
import Country from "./Country";

export default function Asia({name ='asia',...props}){

    const [data,setData] = useState([])

    useEffect(async()=>{
        const res = await getCountries(name )
        console.log(res);
        setData(res)
    },[])

    return (
        <div className="max-h-xl max-w-2xl w-full bg-gray-100 p-x-5 m-3 rounded-xl">
            <div className="p-4">
                <h1>Asia</h1>
            </div>
            {
                data?.map(d=><Country data={d} key={d.id}/>)
            }
        </div>
    )
}



async function getCountries(name='asia'){
    var options = {
        method: 'GET',
        url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/'+name,
        headers: {
          'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
          'x-rapidapi-key': 'aff1177afamsh1fb255402c24c5ap1be9e4jsn4efe400f2d7e'
        }
      };
      
      const asia = await axios.request(options)
      return asia.data
}