import axios from "axios";

export default function Asia({data}){

    console.log(data);

    return (
        <div>
            <h1>Asia</h1>

        </div>
    )
}

export async function getStaticProps(){

var options = {
  method: 'GET',
  url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/asia',
  headers: {
    'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
    'x-rapidapi-key': 'aff1177afamsh1fb255402c24c5ap1be9e4jsn4efe400f2d7e'
  }
};

const res = await axios.request(options)

// console.log(res);

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
    return {
        props:{
            data:res.data
        }
    }
}