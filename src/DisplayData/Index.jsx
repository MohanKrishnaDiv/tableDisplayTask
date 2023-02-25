import React from 'react'

export default function Index({userData,sendRemoveList,search,dropdown}) {

  const filteredData = dropdown ? userData.filter((value) => ( (value.first_name.toLowerCase().includes(search.toLowerCase())
  || value.last_name.toLowerCase().includes(search.toLowerCase())
  || value.email.toLowerCase().includes(search.toLowerCase())
  || value.ip_address.includes(search))
  && value.gender.toLowerCase()===(dropdown))) : userData;
        
  return (
    <div>
        <table>
            <tbody>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>IP Address</th>
                    
                </tr>

            {filteredData.map((item,index) => {
                return <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                    <td>{item.ip_address}</td>
                    <td className='removeBtn' onClick={() => sendRemoveList(item.id,index)}>remove</td>
                </tr>
            })}
        </tbody>
      </table>
    </div>
  )
}
