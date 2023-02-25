import React from 'react'
import { ButtonPanel } from './ButtonPanel'
import { FolderStructure } from './FolderStructure'

export const SidePanel = () => {

    return (
        <div 
            className='tree' 
            style={{
                border: '2px solid black',
                height: '100vh',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                flexDirection: 'column',
                flexWrap: 'nowrap'
            }}
        >
            <FolderStructure/>
            <ButtonPanel/>
        </div>
    )
}
