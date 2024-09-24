import React, { useContext } from "react";
import { UserContext } from "./UserProvider";

const UpdateUser=()=>{
  // const {user,setUser}=useContext(UserContext);

  // const handleChange =()=>{
  //   setUser({...user,name: "Jane"});
  // };
  return(
    <>
     <UserContext.Consumer>
      {({user,setUser})=>(
        <div>
          <button onClick={()=>setUser({...user, name: "jane"})}>Button to Change Name</button>
        </div>
      )}
     </UserContext.Consumer>
    </>
  )
}
export default UpdateUser;