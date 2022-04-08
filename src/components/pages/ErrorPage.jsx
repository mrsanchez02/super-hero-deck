import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <h1>OOps page doesnt exist!</h1>
      <Link to={'/'}>Take me home!</Link>
    </div>
  )
}

export default ErrorPage
