import { useEffect, useState } from "react";
import "./Recommendation.css";
const getData=(url)=>{
    return fetch(url).then((res)=>res.json());
}
 export default function Recommendation(){
const [data,setData]=useState([]);
    useEffect(()=>{
        getData("http://localhost:3000/api/data").then((res)=>
        {
            // console.log(res);
            setData(res);
        });
    },[])
 return (
   <>
     <div style={{ width: "90%",margin:"auto" }}>
       <h1 style={{ marginLeft: "40px", fontSize: "25px", fontWeight: "400" ,margin:"5px 0"}}>
         Free ReCommendations
       </h1>
       <div className="main-prod">
         {data &&
           data.map((prod) => (
             <div
               className="prod"
               key={prod.id}
               style={{
                 display: "flex",
                 flexDirection: "column",
                 alignItems: "center",
               }}
             >
               <img src={prod.image} alt="error" />

               <p style={{ fontWeight: "bold" }}> ₹{prod.price}</p>
               <p style={{ height: "50px" }}>{prod.desc}</p>
               <p>{prod.loc}</p>
             </div>
           ))}
       </div>
     </div>
   </>
 );
}