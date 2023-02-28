import React from 'react'

export default function Index({userData,sendRemoveList,search,dropdown,handleStarredList}) {

  const filteredData = userData.filter((value) => ( (value.first_name.toLowerCase().includes(search.toLowerCase())
  || value.last_name.toLowerCase().includes(search.toLowerCase())
  || value.email.toLowerCase().includes(search.toLowerCase())
  || value.ip_address.includes(search))));

  const updatedData = dropdown ? filteredData.filter((items) =>(items.gender.toLowerCase()===dropdown)) : filteredData;
        
  return (
    <div>
        <table>
            <tbody>
                <tr>
                    <th></th>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>IP Address</th>
                    
                </tr>

            {updatedData.map((item,index) => {
                return <tr key={item.id}>
                    <td><input type="checkbox" className='star' value={item} onClick={() => handleStarredList(item.id, index)}/></td>
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
