/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import {useNavigate } from "react-router-dom";

const Login = () => {
  
  
    const {signInUser} = useContext(AuthContext)
    const nevigate = useNavigate();
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
        .then(res=> {
          toast.success('Logged in successfully!!');
          nevigate('/')
          
      })
      .catch(error => {
          
          toast.error('Email or password does not match')
      })
      .catch(error => console.log(error))
    }
    return (
        <div>
           
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center md:w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card md: w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name = "email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name= "password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          
          <input type="submit" className="btn btn-primary" value="Login" />
        </div>
      </form>
      <h1>Do not have any account?<a href="/register" className="text-blue-800">Register Here</a></h1>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Login;