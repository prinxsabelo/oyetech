import React from 'react'

const ButtonLink = (props:any) => {
  return (
    <button className={`bg-primary px-4 py-3 uppercase
                   text-white rounded-lg font-medium ${props.className}`}>{props.children}</button>
  )
}

export default ButtonLink