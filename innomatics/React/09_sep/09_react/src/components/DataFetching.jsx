import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const DataFetching=()=>{

  const [data,setData]=useState([])
  const[loading,setLoading]=useState(true)
  

    useEffect(()=>{
      const fetchData = async ()=>{
        try{
          const response = await axios.get("https://fakestoreapi.com/products");
          console.log(response.data);
          setData(response.data);
          setLoading(false);
        }
        catch(error){
          console.log("Error occured: ", error)
          setLoading(false);
        }
      };
      fetchData();

    },[]);

    if(loading) return <h3>loading....</h3>
    return(
      <div>
        <h1>Products List</h1>

        <ul>
          {data.map((post)=>(
              <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    )
}

export default DataFetching