import React, { createContext } from 'react';

const Context = createContext({});

const Provider = (props) => {

  return (
    <Context.Provider value={props.contexts}>
      {props.children}
    </Context.Provider>
  );
}

export {Context, Provider};