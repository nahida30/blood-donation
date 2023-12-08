import { useEffect, useState } from "react";

const AllUsers = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://blood-donation-server-pi.vercel.app/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    console.log(users);
    return (
        <div>
            <h1>{users.length}</h1>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Name</th>
        <th>BloodGroup</th>
        <th>District</th>
        <th>Upazila</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
  {
    users.map(user => <tr key={user._id}>
        <th>{user.name}</th>
        <td>{user.bloodGroup}</td>
        <td>{user.district}</td>
        <td>{user.upazila}</td>
        <td>Active</td>
      </tr>)
  }
      
     
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default AllUsers;