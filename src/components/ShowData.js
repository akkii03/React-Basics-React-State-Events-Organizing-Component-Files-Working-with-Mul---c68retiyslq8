import React from 'react'

export default function ShowData(props) {

  return (
    <div>
        <li key={props.i}>{props.value}</li>
    </div>
  )
}
