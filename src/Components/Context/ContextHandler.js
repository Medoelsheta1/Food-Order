
import React from "react"

const ContextHandler = React.createContext({
        items: [],
        totalprice: 0,
        addItem: (item) =>{},
        removeItem: (id) =>{}
});


export default ContextHandler;