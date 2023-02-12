import React from 'react'

export default function Input(props) {
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")

    function onNameChanged(e) {
        if (props.editState) {
            props.setEditedName(e.target.value)
        } else {
            setName(e.target.value)
        }
    }

    function getEmail(e) {
        if (props.editState) {
            props.setEditedEmail(e.target.value)
        } else {
            setEmail(e.target.value)
        }
    }
    return (
        <div className='inputSection'>
            <h2 className="title">Input a Contact</h2>
            <form>
                <input required
                    type="name"
                    value={props.editState ? props.editedName : name}
                    onChange={onNameChanged}
                    placeholder='Fullname'>
                </input>
                <input required
                    type="email"
                    value={props.editState ? props.editedEmail : email}
                    onChange={getEmail}
                    placeholder='Email'>
                </input>
                {props.editState ?
                    <div className="editBtns">
                        <button
                            type="button"
                            className="edit"
                            onClick=
                            {() => props.handleUpdate(props.editedName, props.editedEmail)}>
                            Update
                        </button>
                        <button
                            type="button"
                            className="cancel"
                            onClick={props.handleCancel}>
                            Cancel
                        </button>
                    </div>
                    :
                    (
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
                    )
                }

            </form>
        </div>


    )
}