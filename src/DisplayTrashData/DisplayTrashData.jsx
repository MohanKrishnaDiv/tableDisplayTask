import React from 'react'

export default function DisplayTrashData({trash}) {
  return (
    <div>
      <h2> Deleted List</h2>
      <table>
        <tbody>
            {trash.map((item) => {
                return <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                    <td>{item.ip_address}</td>
                </tr>
            })}
        </tbody>
      </table>
    </div>
  )
}
