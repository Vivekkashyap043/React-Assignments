import React from 'react'
import User from './User';
function UserList() {

  let users = [
    {
      id: 1,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
    },
    {
      id: 2,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
    },
    {
      id: 3,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg",
    },
    {
      id: 4,
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: "https://reqres.in/img/faces/10-image.jpg",
    },
    {
      id: 5,
      email: "george.edwards@reqres.in",
      first_name: "George",
      last_name: "Edwards",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
    },
    {
      id: 6,
      email: "rachel.howell@reqres.in",
      first_name: "Rachel",
      last_name: "Howell",
      avatar: "https://reqres.in/img/faces/12-image.jpg",
    },
  ];
  return (
    <div className="d-flex justify-content-between m-5">
      <div className="container">
      <div className="row">
        <div className="col">
          <User userData={users[0]} />
        </div>
        <div className="col">
          <User userData={users[1]} />
        </div>
        <div className="col">
          <User userData={users[2]} />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <User userData={users[3]} />
        </div>
        <div className="col">
          <User userData={users[4]} />
        </div>
        <div className="col">
          <User userData={users[5]} />
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default UserList


