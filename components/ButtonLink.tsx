import React from 'react'

const ButtonLink = (props:any) => {
  return (
    <a href='' className={`bg-primary px-4 py-3 uppercase hover:bg-yellow-600 wow fadeIn
                   text-white rounded-lg font-bold tracking-wide ${props.className}`}>{props.children}</a>
  )
}

export default ButtonLink