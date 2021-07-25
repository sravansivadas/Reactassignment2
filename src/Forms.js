import React from "react";

import {useForm} from "react-hook-form";
const Form = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const fn = document.getElementById('fn')
        const ln = document.getElementById('ln')
        const em = document.getElementById('email')
        const sub = document.getElementById('sub')
        fn.innerHTML = "First Name: " + data.FirstName;
        ln.innerHTML = "Last Name: " + data.LastName;
        em.innerHTML = "E-Mail: " + data.Email;
        sub.innerHTML = "Subject: " + data.Subject;
          
    };

    return ( 
        <div className = "container" >
            <form onSubmit = { handleSubmit(onSubmit) }>
                <h1 className = "heading" > Registration </h1>
                <div>
                    <label htmlFor = "FirstName">First Name: { " " } </label>
                    <input {...register("FirstName") }
                        type = "text"
                        id = "FirstName" />
                </div>
                <div>
                    <label htmlFor = "LastName" >Last Name:</label>
                    <input {...register("LastName") }
                        type = "text"
                        id = "LastName" />
                </div>
                <div>
                    <label htmlFor = "Email" >Email:</label>
                    <input {...register("Email") }
                        type = "email"
                        id = "Email"  />
                </div>
                <div>
                    <label htmlFor = "Subject" >Subject:</label>
                    <select {...register("Subject") }
                        id = "Subject" >
                            <option value = "React" > React </option>
                            <option value = "Datamining" > DataMining </option> 
                            <option value = "oops" > OOPs </option>
                    </select>
                </div>
                <div>
                    <button type = "submit" > Submit </button> 
                </div>
            </form>
            <div className = "info" >
                <strong id = "fn" className = "text-center" > </strong> 
                <strong id = "ln" className = "text-center" > </strong> 
                <strong id = "email" className = "text-center" > </strong> 
                <strong id = "sub" className = "text-center" > </strong> 
            </div>

        </div>
        )
}
export default Form;