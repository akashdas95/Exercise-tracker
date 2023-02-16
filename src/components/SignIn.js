import React,{ useState } from 'react';

const SignIn = () => {
    const [userCheck,setUserCheck] = useState('');
    const [passCheck,setPassCheck] = useState('');


    const onChangeUserName = (event) =>{
      setUserCheck(event.target.value);
    }

    const onChangePassword = (event) =>{
      setPassCheck(event.target.value);
    }
    const checkUser = () =>{
        console.log(userCheck);
        console.log(passCheck);
       
    }

  return (
    <>
      <div className="sign">
          <h1>Sign In</h1>
          <input type="text" placeholder='username' onChange={onChangeUserName}/>
          <input type="password" placeholder='password'  onChange={onChangePassword}/>
          <button onClick= {checkUser} className='btn btn-primary'>sign in</button>
      </div>
    </>
  )
}

export default SignIn;