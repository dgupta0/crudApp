import React from 'react'
import Input from "./Input"
import Contacts from "./Contacts"

export default function Primary() {
    const [form, setForm] = React.useState([])
    function addContact(name, email) {
        if (name !== "" && email !== "") {
            setForm(prev => (
                [...prev, { name: name, email: email }]
            ))
        }

    }
    function deleteContact(name) {
        setForm(prevForm => prevForm.filter(contact => {
            contact.name !== name
        }))
    }

    return (
        <div className="primary">
            <Input
                handleContact={addContact} />
            <Contacts table={form}
                handleDelete={deleteContact} />
        </div>

    )
}