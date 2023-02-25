import React, { createContext, useContext } from 'react'
import { useState } from 'react'

const SelectedNodeContext = createContext(null)

export const SelectionContext = ({children}) => {

    const selectedNodeState = useState(null)

    return (
        <SelectedNodeContext.Provider value={selectedNodeState} >
            {children}
        </SelectedNodeContext.Provider>
    )
}

export const useSelectedNodeState = () => {
    return useContext(SelectedNodeContext)
}