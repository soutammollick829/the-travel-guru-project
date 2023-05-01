import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {

    const {registerUser} = useContext(AuthContext)

    const [error , setError] = useState('')

    const handelRegister =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);
        if(!/"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/.test(password)) {
            setError(`Please enter 8 characters`)
            return;
        }

        registerUser(email , password)
        .then(result => {
            const user = result.user;
            form.reset('')
            console.log(user);
        })
        .catch(error =>{
            console.error(error);
        })
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Create an account!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div>
                <p className="text-red-400">{error}</p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-warning border-0 hover:bg-amber-500">Register</button>
            </div>
            <div>
                Already have an account? <Link to='/login'><span className="text-warning font-bold">Login</span></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
