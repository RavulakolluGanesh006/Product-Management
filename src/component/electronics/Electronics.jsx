import axios from "axios";
import "./Electronics.css"
import Electronic from "./Electronic";
import { useState } from "react";
function Electronics(){
    let [electronicProducts, setElectronicProducts] = useState([]);
    const getElectronics=()=>
    {
        axios.get("http://localhost:3000/categories_electronics")
        .then((res)=>{
            console.log(res.data);
            setElectronicProducts(res.data);

        })
        .catch((err)=>{
            console.log(err);
            alert("Something went wrong to get electronics data");
        })

    }
    return(
        <div>
<h1>Electronic Component</h1>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem reprehenderit culpa aut ipsam minima vero inventore consectetur aspernatur temporibus itaque sit, unde beatae at quam provident ipsa eius voluptas nemo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatem sequi distinctio in expedita omnis eveniet mollitia atque sit consequatur ut eos, totam, esse aliquam est ea voluptates necessitatibus exercitationem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, voluptates. Numquam, accusantium laudantium quibusdam corrupti quidem molestias adipisci alias blanditiis est, voluptates dolorum reprehenderit unde autem tempora! Deleniti, delectus accusantium!</p>
     <button id="onButton" onClick={getElectronics}>Get Users</button>
     {
     electronicProducts.length>0?
     (<div>
        {electronicProducts.map(function (product) {
            return <Electronic product={product} />;
          })}
      </div>):(<h2> no electronic data</h2>)
      }
        </div>
    )
}
export default Electronics;