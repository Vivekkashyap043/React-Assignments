import React from 'react'

function UserList(props) {
  return (
    <div>
        <h1 className="display-3 text-center text-info mt-5">List of registered Users</h1>
      <table className="table text-center table-warning">
        <thead>
          <tr>
            <th>Username</th>
            <th>Date of birth</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {
            props.users.map((user,index)=><tr key={index}>
              <td>{user.username}</td>
              <td>{user.dob}</td>
              <td>{user.city}</td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}

export default UserList
