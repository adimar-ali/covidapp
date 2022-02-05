
export default function Country({data,...props}){
    return (
        <div className="hover:shadow-md cursor-pointer border-b-gray-100  p-2 m-2 bg-white flex items-center rounded-md">
            <Fld name='Country' data={data} key='text-blue-500 font-bold'/>
            <Fld name='Total Cases' data={data}/>
            <Fld name='Total Deaths' data={data}/>
            <Fld name='Total Recovered' data={data}/>
        </div>
    )
}

function Fld({key,val,name,data}){
    return <div className="m-1">
        <p className={key}>{name}</p>
        <small className={val}>{data[name.replace(' ','')]}</small>
    </div>
}