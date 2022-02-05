import { useState } from "react"


export default function ({data}){
    const [data_,setData] = useState(data[0])
    return (
        <div>

            <Card>
                <h2>Covid-19 Cases</h2>
                <h1>{data_?.TotalCases}</h1>
                
                <h2>Total Deaths</h2>
                <h1>{data_?.TotalDeaths}</h1>
                
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

function Card({children}){
    return (
        <div className="bg-white ring-1 ring-gray-200 m-4 p-4 rounded-md" >
            {children}
        </div>
    )
}