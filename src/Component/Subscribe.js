import { useState } from "react";
import Buttons from "./buttons";
import "./stylee.css";
function Subscribe(){
const[email,setEmail]=useState('');
    return(
        <>
        <section className="sec_8">
        <div className="text-center col-lg-6 offset-lg-3 col-sm-12 col-xs-12 subscribe_content"> 
        <h3>Subscripbe to our newsletter,
             We don't make any spam.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor enim minim</p>
        </div>
        <div className="text-center">
        <div className="email_subscribe"> 
            <input type="text" placeholder="Enter Your Email Address" value={email}  onChange={(e)=> setEmail(e.target.value)}></input>
              <Buttons className="send-btn">
                <i class="fa fa-paper-plane"></i>
              </Buttons>
        </div>
        </div>
        </section>
        </>
    )
}export default Subscribe;