import { useState } from "react";
// set up state property
// capture the values
// if local data use that, else use initial data
// update localStorage when needed
// Don't forget to parse data from localStorage, and stringify new data getting stored
const useLocalStorage = (key, initialValue) => {



    const [storedValue, setStoredValue] = useState(() => {

        //get from local storage by key
        const item = window.localStorage.getItem(key);

        //Parse and return stored json, or, if undefined, return initialValue

        return item ? JSON.parse(item) : initialValue;


    });

    const setValue = value => {

        setStoredValue(value)

        window.localStorage.setItem(key, JSON.stringify(value));


    };

    return [storedValue, setValue];
};

export default useLocalStorage;