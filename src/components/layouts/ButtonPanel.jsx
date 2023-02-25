import React from 'react'
import { PrintFamilyTreeBtn } from '..'
import { AddFamilyBtn } from '../AddFamilyBtn'

export const ButtonPanel = () => {

  return (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: '5px',
            justifyContent: 'space-around',
            padding: '5px'
        }}
    >
        <AddFamilyBtn/>
        <PrintFamilyTreeBtn/>
    </div>
  )
}