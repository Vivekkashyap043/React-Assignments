import { useState, useEffect } from 'react';
import UserCount from './UserCount';
function Users(){

  let [users, setUsers] = useState([]);
  let [userCount, setUserCount] = useState(0);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data => setUsers(data));
  }, []);

function updateUserCount(){
  setUserCount(userCount+1);
  }
  return (
    <div>
        <UserCount userCount={userCount}/>
    <div className="container text-center mt-4">
      <div className="row">
        {users.slice(0, 10).map(user => (
          <div key={user.id} className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.email}</p>
                <p className="card-text">{user.phone}</p>
                <button type="button" class="btn btn-outline-secondary" onClick={updateUserCount}>Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>

  );
};

export default Users;
