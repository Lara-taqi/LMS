import { useState } from "react";
import Buttons from "./buttons";
import "./stylee.css";
function Search(){
const[Coursename,setCourse]=useState('');
    return(
        <>
        <section className="Search_bar">
        <div className="text-center">
        <div className="courseSearch"> 
            <input type="text" placeholder="Search Your Course Here " value={Coursename}  onChange={(e)=> setCourse(e.target.value)}></input>
              <Buttons className="Search">
               Search <i class="fa fa-paper-plane"></i>
              </Buttons>
        </div>
        <div className="Topic">
            <p>Popular Topic: </p>
            <a href="/">Business,</a>
            <a href="/"> Data Science, </a>
            <a href="/"> Digital Program,</a>
            <a href="/"> Finance</a>
        </div>
        </div>
        </section>
        </>
    )
}export default Search;