import { useEffect, useState } from "react";

const AllRequest = () => {
    const [request, setRequest] = useState([])
    useEffect(() => {
        fetch('https://blood-donation-server-pi.vercel.app/request')
        .then(res => res.json())
        .then(data => setRequest(data))

    }, [])
    return (
        <div className="py-20">
            <h1>{request.length}</h1> 

            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Name</th>
        <th>District</th>
        <th>Upazila</th>
        <th>Hospital</th>
        <th>Address</th>
        <th>Donation Date</th>
        <th>Request Message</th>
        <th>Request Status</th>
      </tr>
    </thead>
    <tbody>
  {
    request.map(user => <tr key={user._id}>
        <th>{user.recipient_name}</th>
        <td>{user.district}</td>
        <td>{user.upazila}</td>
        <td>{user.hospital_name}</td>
        <td>{user.address}</td>
        <td>{user.donation_date}</td>
        <td>{user.request_message}</td>
        <td>{user.status}</td>
      </tr>)
  }
      
     
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default AllRequest;