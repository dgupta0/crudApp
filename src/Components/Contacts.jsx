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
                        onClick={() => { props.handleEdit(data.name) }}
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
            <h2 className="title">Contact Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {...tableData}
                </tbody>
            </table>
        </div>

    )
}