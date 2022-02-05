import { useState } from "react"
import Menus from "./Menus"


export default function ({data}){
    const [data_,setData] = useState(data[0])
    return (
        <div>
            <Menus/>
            <Card className='shadow-md p-10 flex items-center flex-col'>
                <h2 className="text-blue-400 text-[30px] font-bold">Covid-19 Cases</h2>
                <h1 className="text-red-300">{data_?.TotalCases}</h1>
                
                <h2 className="text-red-900 text-[30px] font-bold">Total Deaths</h2>
                <h1 className="text-red-500">{data_?.TotalDeaths}</h1>
                
                <h2>Total Recovered</h2>
                <h1>{data_?.TotalRecovered}</h1>
            </Card>

            <Card>
                <h2 className="text-2xl font-bold ">Active Cases:</h2>
                <h1>{data_?.ActiveCases}</h1>
          
                <h2>New Cases:</h2>
                <h1>{data_?.NewCases}</h1>
          
                <h2>Total Cases:</h2>
                <h1>{data_?.TotalCases}</h1>

              

                <h2>Infection Risk:</h2>
                <h1>{data_?.Infection_Risk}</h1>

                <h2>Case Fatality Rate:</h2>
                <h1>{data_?.Case_Fatality_Rate}</h1>

                <h2>Serious Critical:</h2>
                <h1>{data_?.Serious_Critical}</h1>

            </Card>

            <Card>
                <h2>New Death:</h2>
                <h1>{data_?.NewDeaths}</h1>
             
                <h2>Total Death:</h2>
                <h1>{data_?.TotalDeaths}</h1>
             
            </Card>

            <Card>
                <h2>New Recovered:</h2>
                <h1>{data_?.NewRecovered}</h1>
       
                <h2>Total Recovered:</h2>
                <h1>{data_?.TotalRecovered}</h1>
            </Card>
        </div>
    )
}

function Card({children,...props}){
    return (
        <div {...props} className={"bg-white ring-1 ring-gray-200 m-4 p-4 rounded-md "+props?.className} >
            {children}
        </div>
    )
}