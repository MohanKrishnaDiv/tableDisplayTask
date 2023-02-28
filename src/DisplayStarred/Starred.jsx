import React from 'react'

export default function Starred({starred}) {
  return (
    <div>
            <h2> Starred List</h2>
      <table>
        <tbody>
            {starred.map((item) => {
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
