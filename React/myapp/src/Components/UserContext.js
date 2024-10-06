import React from 'react';
const UserContext = React.createContext();
export const UserProvided = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

export default UserContext;