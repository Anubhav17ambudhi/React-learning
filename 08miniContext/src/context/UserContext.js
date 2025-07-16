import React from 'react';

const UserContext = React.createContext();//creating a context
//same as hooks this is also a method stored in a variable

export default UserContext;

//as soon as context is created
//every context is a provider
//we use a wrapper in the context provider

//this is the example 
//all the components which we think needs this info by the context we can just wrap 
// them using this context easily 
//same as we use fragments to wrap multiple different types of components

// <UserContext>//this is the context provider which is used along with the context created
//    <login />
//    <Card >
//        <Data />
//    </Card>
// </UserContext>
