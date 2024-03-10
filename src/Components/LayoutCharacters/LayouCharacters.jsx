import React from 'react'

export const LayouCharacters = ({children}) => {
  return (
    <div className='container d-flex flex-column align-items-center'>
        
        {children}
        <button>Back</button>
        <strong>Page</strong>
        <button>Next</button>
    
    </div>
  )
}
