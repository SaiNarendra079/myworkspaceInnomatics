import { useState } from "react";

const AgeValidation =()=>{
  const[validAge,setValidAge]=useState(true)

  //first way if else in conditional rendering
  // if(validAge){
  //   return(
  //     <div>You can vote</div>
  //   )
  // }
  // else{
  //   return(
  //     <div>You cannot vote</div>
  //   )
  // }

  //2-element variable
  // let age;
  // if(validAge){
  //   age = <div>You can vote</div>
  // }
  // else{
  //   age= <div>You cannot vote</div>
  // }
  // return <>{age}</>

  //3-ternary Operator
  // return <>{validAge ? <div>You can vote</div> : <div>You cannot vote</div>}</>

  //4-short circuit--short circuit uses AND operator
  return(
    <>{validAge && <div>You can vote</div>}</>
  )

  }

  export default AgeValidation;