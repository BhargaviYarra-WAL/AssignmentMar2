import {  useFormik} from "formik"
const RegisterComponent = () => {
    let info = []
    const formik = useFormik({
        initialValues: {
            email: "abc@gmail.com",
            username: "",
            password: ""
        },
        onSubmit(values) {
            if (localStorage.getItem("info")) {
                info = JSON.parse(localStorage.getItem("info"))
                info.push(values)
                info = JSON.stringify(info)
                localStorage.setItem("info", info)
            }
            else {
                info.push(values)
                info = JSON.stringify(info)
                localStorage.setItem("info", info)
            }

        },
        validate() {
            const errors = {};
            if (formik.values.email.length < 5) {
                errors.email = "must contain greater than 5 characters";
            }
            else if (formik.values.email.length > 30) {
                errors.email = "must contain less than 30 characters"
            }
            if (formik.values.password.length < 4) {
                errors.password = "must contain greater than 4 characters";
            }
            else if (formik.values.password.length > 20) {
                errors.password = " must contain less than 20 characters";
            }
            if (formik.values.username.length < 5) {
                errors.username = "must contain greater than 5 characters";
            }
            else if (formik.values.username.length > 20) {
                errors.username = "must contain less than 20 characters";
            }
            return errors;
        },
    });
    return (
        <div className="RegisterComponent">
            <h2>Register Form</h2>
            <form  onSubmit={formik.handleSubmit} noValidate >
                <input type="email" name="email" placeholder="Email" value={formik.values.email} onChange={formik.handleChange}/>
                <div className="text-danger">
                    {formik.errors.email ? formik.errors.email : null}
                </div>
                <input type="text" name="username" placeholder="Username" value={formik.values.username} onChange={formik.handleChange}/>
                <div className="text-danger">
                    {formik.errors.username ? formik.errors.username : null}
                </div>
                <input type="password" name="password" placeholder="Password" value={formik.values.password}onChange={formik.handleChange}/>
                <div className="text-danger">
                    {formik.errors.password ? formik.errors.password : null}
                </div>
                <button className="btn1" >Register</button>
            </form>
        </div>
    )
}
export default RegisterComponent;