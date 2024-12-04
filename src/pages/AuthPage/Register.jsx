import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
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
                  value="Value"
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
