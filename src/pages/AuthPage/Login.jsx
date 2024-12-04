import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
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

    // DONE:login user

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
                    Do not Have Account?{" "}
                    <Link to="/register" className="btn btn-sm btn-link">
                      Register Here
                    </Link>{" "}
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
