import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";
import Logo from "@/components/common/logo";
import { useNavigate } from "react-router-dom";
// import { postJwtLogin } from "@/helper/backend_helper";
import { Formik, Form, Field } from "formik";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";

interface ContactFormProps {
  onSubmit: (values: ContactFormValues) => void;
}

interface ContactFormValues {
  email: string;
  password: string;
}

const ContactFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required").min(6),
});

type Props = {};

export const Login = (props: Props) => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (values: any) => {
    try {
      // { email: "admin@admin.com", password: "11223344" }
      // const response = await postJwtLogin(values);
      // if (response.data.data.user.role.name !== "admin") {
      //   return toast.error('You have entered an invalid email address or password', {
      //     position: "top-right",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "light",
      //   });
      // }

      // login(response.data.data);
      login({ data: "ok" });
      navigate("/");
    } catch (error) {
      // if (error.response.status === 400) {
      //   toast.error(error.response.data.errors[0].detail, {
      //     position: "top-right",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "light",
      //   });
    }
  };

  return (
    <body className="login">
      <div className="container sm:px-10">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="block xl:grid grid-cols-2 gap-4">
          <div className="hidden xl:flex flex-col min-h-screen">
            <div className="my-auto">
              <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                A few more clicks to
                <br />
                sign in to your account.
              </div>
            </div>
          </div>

          <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
            <div className="flex items-center flex-col gap-10 my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
              <a href="" className=" intro-x ">
                <Logo />
              </a>
              <h6 className="intro-x font-roboto text-2xl xl:text-3xl text-center xl:text-left display-center">
                Welcome Back
              </h6>

              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={ContactFormSchema}
                onSubmit={(values, { setSubmitting }) => {
                  handleLogin(values);
                  setSubmitting(false);
                }}
              >
                {({ errors, touched, isSubmitting }) => (
                  <Form>
                    <div className="intro-x flex flex-col gap-10">
                      <div className="text-red-500">
                        <Field
                          fullWidth
                          name="email"
                          type="text"
                          as={TextField}
                          label="Email"
                          variant="standard"
                          error={touched.email && !!errors.email}
                          helperText={touched.email && errors.email}
                          className="login__input"
                        />
                      </div>
                      <div className="text-red-500">
                        <Field
                          type="password"
                          name="password"
                          fullWidth
                          as={TextField}
                          label="Password"
                          variant="standard"
                          error={touched.password && !!errors.password}
                          helperText={touched.password && errors.password}
                          className="login__input  input--lg"
                        />
                      </div>
                    </div>

                    <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                      <button
                        className="button button--lg w-full xl:w-100 h-full xl:h-100 bg-black text-white xl:mr-3 rounded-lg"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Sign In
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};
