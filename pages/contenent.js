import Asia from "../components/Asia"
import axios from "axios";

export default function Contenent({asia}){
    return (
        <div className="bg-gray-200 flex flex-col items-center">
            <Asia />
        </div>
    )
}

// export async function getStaticProps(){


// const asia = await getCountries('asia')
// const africa = await getCountries('africa')

//     return{
//         props:{
//             asia:asia,
//             africa,
//         }
//     }
// }


// async function getCountries(name='asia'){
//     var options = {
//         method: 'GET',
//         url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/'+name,
//         headers: {
//           'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
//           'x-rapidapi-key': 'aff1177afamsh1fb255402c24c5ap1be9e4jsn4efe400f2d7e'
//         }
//       };
      
//       const asia = await axios.request(options)
//       return asia.data
// }