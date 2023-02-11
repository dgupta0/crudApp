import React from 'react'

export default function Contacts(props) {

    let tableData = props.table.map(data => {
        return (
            <tr>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>
                    <button
                        className='action edit'
                    >
                        Edit
                    </button>
                    <button
                        className='action delete'
                        onClick={() => { props.handleDelete(data.name) }}>
                        Delete
                    </button>
                </td>
            </tr>
        )
    })
    return (
        <div className="contactSection">
            <h2>Contact Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Deeti Gupta</td>
                        <td>deetigupta8@gmail.com</td>
                        <td>
                            <button className='action edit'>Edit</button>
                            <button className='action delete'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Deeti</td>
                        <td>deetigupta8@gmail.com</td>
                        <td>
                            <button className='action edit'>Edit</button>
                            <button className='action delete'>Delete</button>
                        </td>
                    </tr>
                    {...tableData}
                </tbody>
            </table>
        </div>

    )
}