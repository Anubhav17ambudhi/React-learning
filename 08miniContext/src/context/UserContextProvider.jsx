import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user,setUser] = React.useState(null);
    return(
       <UserContext.Provider value = {{user,setUser}}>//we gave the prop in the provider by using value
        {children}
       </UserContext.Provider>
    )
}

export default UserContextProvider;