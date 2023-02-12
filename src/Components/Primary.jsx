import React from 'react'
import Input from "./Input"
import Contacts from "./Contacts"

export default function Primary() {
    const [form, setForm] = React.useState([
        {
            name: "Deeti",
            email: "deetigupta8@gmail.com"
        },
        {
            name: "Tinmin",
            email: "tinmin@yahoo.com"

        }
    ])
    const [edit, setEdit] = React.useState(false)
    const [editedName, setEditedName] = React.useState("")
    const [editedEmail, setEditedEmail] = React.useState("")
    const [updateIndex, setUpdateIndex] = React.useState(0)

    function addContact(name, email) {
        if (name !== "" && email !== "") {
            setForm(prev => (
                [...prev, { name: name, email: email }]
            ))
        }

    }

    function editContact(name) {
        let recordToEdit = form.filter((el, i) => {
            if (el.name === name) {
                setUpdateIndex(i)
                return el
            }
        })
        setEdit(true)
        setEditedName(recordToEdit[0].name)
        setEditedEmail(recordToEdit[0].email)
    }

    function handleCancel() {
        setEdit(false)
    }
    function handleUpdate(updatedName, updatedEmail) {
        setForm(prevForm => {
            let newForm = []
            for (let i = 0; i < prevForm.length; i++) {
                if (i === updateIndex) {
                    newForm.push({ name: updatedName, email: updatedEmail })
                } else {
                    newForm.push(prevForm[i])
                }
            }
            return newForm
        })
        setEdit(false)
    }
    function deleteContact(name) {
        debugger;
        setForm(prevForm => prevForm.filter(contact =>
            contact.name !== name
        ))
    }

    return (
        <div className="primary">
            <Input
                handleContact={addContact}
                editState={edit}
                editedName={editedName}
                setEditedName={setEditedName}
                editedEmail={editedEmail}
                setEditedEmail={setEditedEmail}
                handleCancel={handleCancel}
                handleUpdate={handleUpdate}
            />
            <Contacts
                table={form}
                handleDelete={deleteContact}
                handleEdit={editContact} />
        </div>

    )
}