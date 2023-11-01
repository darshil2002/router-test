import React from 'react'
import { useNavigate } from "react-router-dom";

const Contact = (props) => {

    const navigate = useNavigate();

    console.log(props)
    setTimeout(() => {
        // console.log(history)
        navigate('/support');
      }, 2000);
    return(
        <div>
            <p>new cont" page"</p>
        </div>
    )
}
export default Contact;