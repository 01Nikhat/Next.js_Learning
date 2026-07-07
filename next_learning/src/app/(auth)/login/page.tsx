import React from "react"
import styles from "./login.module.css"
const LoginContactPage = ()=>{
  return(
    <div className={styles.login}>LoginContact Page</div>
  )
}
export default LoginContactPage;

//server compoment are render on server by default

//if you want to render a component on the client , you can use the "use client"
//server actions are function that run the server and can be used to perform 
//they can be defined in server and can be called from client component