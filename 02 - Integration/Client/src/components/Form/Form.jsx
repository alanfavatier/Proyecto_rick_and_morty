import { useState } from "react";
import validator from "./validation";
import style from "./Form.module.css"



const Form = (props) => {
    const {login} = props
    const [errors, setErrors] = useState({})
   
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setErrors(validator({...userData, [e.target.name]: e.target.value}))
    setUserData({...userData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login(userData)
  }

  return (
    <div  >
      <form className={style.formContainer} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Email</label>
          <input className={style.formInput} name='email' type="text" placeholder="Email..." value={userData.email} onChange={handleChange}  />
          {errors.e1 ? (
          <p className={style.error}>{errors.e1}</p>
          ) : errors.e2 ? (
            <p>{errors.e2}</p>
            ) : (
                <p>{errors.e3}</p>
            )}
        </div>
        <div>
        <label htmlFor="">Password </label>
        <input className={style.formInput} name='password' type="password" placeholder="Password..." value={userData.password} onChange={handleChange}  />
        {errors.p1 ? (
          <p className={style.error}>{errors.p1}</p>
          ) : (
            <p>{errors.p2}</p>
            )
        }
        </div>
        <button className={style.formButton}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
