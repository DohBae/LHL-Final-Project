import { createContext, useState } from 'react';

// Create a Context
export const classContext = createContext();

// Create a Component wrapper from Context.Provider
export default function ClassProvider(props) {

  // Here is our Shared State Object
  const [classData, setClassData] = useState(undefined);
  const[classNames, setClassNames] = useState("");
  // Functions to change  the counter state item
  const setClassStateAddingNotes = function () {

    fetch(`/classes`).then(
      res => res.json())
      .then(data => setClassData(data)) 
  }

  const setClassNameAddingNote = function (name) {
    setClassNames(name)
    
  }


  // This list can get long with a lot of functions.  Reducer may be a better choice
  const providerData = { classData, classNames, setClassNames, setClassStateAddingNotes, setClassNameAddingNote };

  // We can now use this as a component to wrap anything 
  // that needs our state
  return (
    <classContext.Provider value={providerData}>
      {props.children}
    </classContext.Provider>
  );
};