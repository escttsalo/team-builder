import React from 'react';

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' +  mm + '-' + dd;

export default function Form(props){
    const { update, submit, values } = props;

    const updateForm = e => {
        console.log(e.target.value)
    } 

    return (
        <form className='form container'>
            <div className='form-group inputs'>

                {/* Username input field*/}
                <label>Username
                    <input 
                        type='text'
                        placeholder='R. Belmont'
                        name='username'
                        value={values.username}
                        onChange={null}
                    />
                </label>

                {/* Email input field */}
                <label>Email
                    <input 
                        type='email'
                        name='email'
                        placeholder='somevato@gmail.com'
                        value={values.email}
                        onChange={null}
                    />
                </label>

                {/* Dropdown input field*/}
                <label>Role
                    <select value={values.role} name='role' onChange={null}>
                        <option value=''>---Select a Role---</option>
                        <option value='Backend'>Backend</option>
                        <option value='Frontend'>Frontend</option>
                        <option value='Designer'>Designer</option>
                        <option value='Lead'>Lead</option>
                        <option value='Quality'>Quality</option>
                    </select>
                </label>

                {/* Date since input field*/}
                <label>Date
                    <input 
                        type='date'
                        name='date'
                        placeholder={today}
                        // value={today}
                        onChange={updateForm}
                    />
                </label>
                <div className='submit'>
                    <button disabled={!values.username || !values.email || !values.role}>submit</button>
                </div>
            </div>
        </form>
    )
}