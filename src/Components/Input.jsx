import React from 'react'

export default function Input() {
    return (
        <div className='inputSection'>
            <h2>Input a Contact</h2>
            <form>
                <input type="name" placeholder='Fullname'></input>
                <input type="email" placeholder='Email'></input>
                <button className='addContactBtn'> Add Contact</button>

            </form>
        </div>


    )
}