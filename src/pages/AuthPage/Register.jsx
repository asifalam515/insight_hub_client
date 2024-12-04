import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";
const Register = () => {
  const { createUser } = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    // getting all the form data here inside data
    const name = data.name;
    const photo = data.photo;
    const email = data.email;
    const password = data.password;

    // DONE:create account
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
        console.log(user);
        // send it to DB
        axios.post("http://localhost:5000/users", user).then((res) => {
          console.log(res.data);
        });

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Account Created",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    // TODO: send it to database
    // console.log(data);
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  {...register("photo")}
                  type="text"
                  placeholder="photo"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },

                    pattern: {
                      value:
                        /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9]).+$/,
                      message:
                        "Password must contain at least one uppercase letter, one special character, and one number",
                    },
                  })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <p className="text-sm text-red-600">
                  {" "}
                  {errors.password?.message}{" "}
                </p>
                <label className="label">
                  <p>
                    Already Have Account?{" "}
                    <Link to="/login" className="btn btn-sm btn-link">
                      Login Here
                    </Link>{" "}
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
