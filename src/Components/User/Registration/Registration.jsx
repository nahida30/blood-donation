/* eslint-disable no-unused-vars */
// import toast from "react-hot-toast";

import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import {useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Registration = () => {
    const { createUser } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();
    const location = useLocation();

    const handleRegistration = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value;
        const image = form.image.value;
        const bloodGroup = form.bloodGroup.value;
        const district = form.district.value;
        const upazila = form.upazila.value;
       

        console.log(
            email,
            password,
            confirm_password,
            name,
            image,
            bloodGroup,
            district,
            upazila
        );

        createUser(email, password)
        .then(res=> {
            console.log(res.user)
            const userinfo = {
                name: name,
                email: email,
                image: image,
                bloodGroup: bloodGroup,
                district: district,
                upazila: upazila
            }
            axiosPublic.post('/users', userinfo)
            .then(res => {
                if(res.data.insertedId){
                    navigate(location?.state?location.state:'/')
                    event.target.reset()
                    Swal.fire({
                        icon: 'success',
                        title: 'Congratulations...',
                        text: 'Registration Successfull',
                    })

                }
            })
            
            
        })
        .catch(error => {
            
            toast.error('Email or password does not match')
        })
        .catch(error => console.log(error))
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-2xl flex text-center justify-center font-bold mt-3">Register</h1>
                        <form onSubmit={handleRegistration} className="card-body">
                            {/* First row */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="name" placeholder="name" className="input input-bordered" name="name" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                                </div>
                            </div>

                            {/* Second row */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image Url</span>
                                    </label>
                                    <input type="text" placeholder="image" className="input input-bordered" name="image" required />
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Blood Group</span>
                                </label>
                                <select className="select select-bordered" name="bloodGroup" required>
                                    <option value="" disabled selected>
                                        Select Blood Group
                                    </option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                                </div>
                            </div>

                            {/* Third row */}
                            <div className="grid grid-cols-2 gap-4">
                            <label className="label">
                                    <span className="label-text">District</span>
                                </label>
                                <input type="text" placeholder="district" className="input input-bordered" name="district" required />
                                <label className="label">
                                    <span className="label-text">Upazila</span>
                                </label>
                                <input type="text" placeholder="upazila" className="input input-bordered" name="upazila" required />
                            </div>

                            {/* Fourth row */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                            </div>

                            {/* Fifth row */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="confirm_password" className="input input-bordered" name="confirm_password" required />
                            </div>

                            {/* Submit button */}
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-outline">
                                    Register
                                </button>
                            </div>
                            <h1>
                                Already Have an Account??<a href="/login" className="text-blue-800">
                                    Login Here
                                </a>
                            </h1>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
