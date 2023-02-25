import React, { createContext, useContext, useState, useEffect } from 'react'

const TreeStateCTX = createContext(null)

export const TreeStateContext = ({ children }) => {

    const treeState = useState({})
    useEffect(() => {
        console.log(JSON.stringify(treeState).length);
    }, [treeState]);

    return (
        <TreeStateCTX.Provider value={treeState} >
            {children}
        </TreeStateCTX.Provider>
    )
}

export const useTreeState = () => useContext(TreeStateCTX)
