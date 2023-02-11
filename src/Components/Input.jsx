import React from 'react'

export default function Input(props) {
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    function getName(e) {
        setName(e.target.value)
    }

    function getEmail(e) {
        setEmail(e.target.value)
    }
    return (
        <div className='inputSection'>
            <h2>Input a Contact</h2>
            <form>
                <input required
                    type="name"
                    value={name}
                    onChange={getName}
                    placeholder='Fullname'>
                </input>
                <input required
                    type="email"
                    value={email}
                    onChange={getEmail}
                    placeholder='Email'>
                </input>
                <button
                    type="button"
                    className='addContactBtn'
                    onClick={() => {
                        props.handleContact(name, email)
                        setEmail("")
                        setName("")
                    }}>
                    Add Contact
                </button>
            </form>
        </div>


    )
}