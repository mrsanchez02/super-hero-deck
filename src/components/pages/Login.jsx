import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import authContext from '../../context/authentication/authContext';

const Login = () => {

  const AuthContext = useContext(authContext);
  const {authenticated,userLogin,msg} = AuthContext;

  const navigate = useNavigate()

  const [loginData, setLoginData] = useState({
    email:'',
    password:''
  });

  const [error, setError] = useState(false);

  const {email, password} = loginData;

  useEffect(()=>{
    if(authenticated){
      navigate('/')
    }
  },[authenticated])

  const handleChange = e => {
    setLoginData({
      ...loginData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if(email.trim()===''||password.trim()===''){
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 2000);
      return
    }

    userLogin(loginData)

  }

  return (
    <div 
      className='container mt-3'
      style={{width: '24rem'}}
    >
      <form
        onSubmit={handleSubmit}
      >
        <h3 className='display-2 text-center'>Login</h3>
        <hr/>
        
        <div className="mb-3">
          <label className='form-label'>Email</label>
          <input 
            className='form-control' 
            type='email' 
            name='email' 
            placeholder='write your email here...'
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className='form-label'>Password</label>
          <input 
            className='form-control' 
            type='password' 
            name='password' 
            placeholder='Input your password here...'
            value={password}
            onChange={handleChange}
          />
        </div>
        <button
          className='btn btn-primary btn-lg'
          type='submit'
        >Send</button>
        {msg&&<p className='alert alert-warning text-center mt-5'>{msg}</p>}
        {error&&<p className='alert alert-danger text-center mt-5'> Todos los campos son obligatorios! </p>}
      </form>
    </div>
  )
}

export default Login
