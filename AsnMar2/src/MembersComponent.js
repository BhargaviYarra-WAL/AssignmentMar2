import { useEffect, useState } from "react"
const MembersComponent = () => {
    let [email, setEmail] =useState()
    let [username, setUsername] = useState()
    let [password, setpassword] = useState()
    useEffect( ()=> {
        if ( parseInt(localStorage.getItem("loggedIn"))) {
            let userInfo= localStorage.getItem("loggeduser")
            let allinfo = JSON.parse(localStorage.getItem("info"))
            for (let i = 0; i < allinfo.length; i++) {
                if (userInfo== allinfo[i].username) {
                    setUsername(allinfo[i].username)
                    setpassword(allinfo[i].password)
                    setEmail(allinfo[i].email)
                }
            }
        }
    }, [] );
    
    if(parseInt(localStorage.getItem("loggedIn"))){
        return (
            <div className="Members">
            <h2>All Details</h2>
            <p>Email : {email}</p>
            <p>Username : {username}</p>
            <p>Pasword: {password}</p>
            </div>
        )
    }  
}
export default MembersComponent;