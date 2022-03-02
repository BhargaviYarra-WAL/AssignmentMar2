import { useFormik } from "formik";
const LoginComponent= () => {
    const formik = useFormik({
        initialValues : {
            username : "",
            password : ""
        },
        validate(){
            const errors = {}
            if (formik.values.username.length < 5) {
                errors.username = "must contain greater than 5 characters";
            }
            else if (formik.values.username.length > 20) {
                errors.username = "must contain less than 20 characters";
            }
            if (formik.values.password.length < 4) {
                errors.password = "must contain greater than 4 characters";
            }
            else if (formik.values.password.length > 20) {
                errors.password = " must contain less than 20 characters";
            }
            return errors
        },
        onSubmit(values){
            if(localStorage.getItem("info")){
                let logininfo = JSON.parse(localStorage.getItem("info"))
                for(let i=0; i<logininfo.length; i++){
                    if(  formik.values.username == logininfo[i].username){
                        if(  formik.values.password==logininfo[i].password){
                            localStorage.setItem("loggedIn",parseInt(1))
                            alert("You are Loggedin")
                            localStorage.setItem("loggeduser", logininfo[i].username)
                        }
                        else{
                            alert("Invalid Details")
                        }
                    }
                }
            }
            else{
                alert("None")
            }
        }

    })
    return(
        <div className="LoginComponent">
            <h2>Login Form</h2>
            <form onSubmit={formik.handleSubmit} noValidate >
                <input  type="text" value={formik.values.username} name="username" placeholder="Username" onChange={formik.handleChange}/>
                <div className="text-danger">
                {formik.errors.username ? formik.errors.username : null}
                </div>

                <input type="password" value={formik.values.password} name="password" placeholder="Password" onChange={formik.handleChange}/>
                <div className="text-danger">
                    {formik.errors.password ? formik.errors.password : null}
                </div>
                <button className="btn1" >Login</button>
            </form>
        </div>
    )
}
export default LoginComponent;