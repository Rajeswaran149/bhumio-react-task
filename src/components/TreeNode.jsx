import {  TreeNode as TreeChild } from 'react-organizational-chart';

export const ChartDiv = ({children}) => {
    return (
      <div  
        style={{
          padding : '4px 16px',
          border : '1px solid black',
          borderRadius : '4px',
          display : 'inline-block'
        }}
      >
        {children}
      </div>
    )
  }
  

export const TreeNode = ({node}) => {
    return(
      <TreeChild label={<ChartDiv>{node.Name}</ChartDiv>} >
        {node.children && Object.values(node.children).map(childNode => <TreeNode key={childNode.id} node ={childNode}/>)}
      </TreeChild>
    )
}