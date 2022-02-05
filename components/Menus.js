import Link from "next/link";


export default function Menus(){
    return (
        <div className="flex">
           <Alink href='/'>Home</Alink>
            <Alink href='/countries'>Countries</Alink>
            <Alink href='/contenent'>Contenent</Alink>
            <Alink href='/news'>News</Alink>
        </div>
    )
}

function Alink({...props}){
    return <div className="m-2 cursor-pointer">
        <Link href={props?.href}><p className="text-xl text-blue-400">{props.children}</p></Link>
    </div>
}