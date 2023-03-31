import React from 'react'
import Header from '../Components/Header'
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
    const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const user_url = "http://localhost:2404";
    const handle = (data) => {
      axios.post(`${user_url}/signup`, data).then(
        (response) => {
          console.log(response);
  
          toast.success("Registered Successfully !", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          console.log("sucess");
  
          const { accessToken } = response.data;
          localStorage.setItem("token", accessToken);
  
        },
        (error) => {
          console.log(error);
          console.log("error");
          toast.error("Check email id/password", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      );
    };
  
    const handleError = (errors) => {};
  return (
    <div>
        <ToastContainer/>
        <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                  <form onSubmit={handleSubmit(handle, handleError)}>

                    <h2 className="fw-bold mb-2 text-uppercase">Sign up</h2>
                    
                    <div className="form-outline form-white mb-4">
                      <input type="text" id="typeTextX" className="form-control form-control-lg" {...register("firstName")} />
                      <label className="form-label" htmlFor="typeEmailX">First Name</label>
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input type="text" id="typeTextX" className="form-control form-control-lg" {...register("lastName")}/>
                      <label className="form-label" htmlFor="typeEmailX">Last Name</label>
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input type="email" id="typeEmailX" className="form-control form-control-lg" {...register("emailId")} />
                      <label className="form-label" htmlFor="typeEmailX">Email</label>
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input type="password" id="typePasswordX" className="form-control form-control-lg" {...register("password")} />
                      <label className="form-label" htmlFor="typePasswordX">Password</label>
                    </div>
                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Signup</button>
                    </form>
                  </div>
                  <div>
                    <p className="mb-0">Already have an account? <a href="/login" className="text-white-50 fw-bold">Login</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup