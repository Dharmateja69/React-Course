import React, { useEffect, useState } from "react";
type Userlist = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
};

const UserList = () => {
  const [fetched, setfetched] = useState<Userlist[]>([]);
  useEffect(() => {
    const fecthdata = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const result: Userlist[] = await data.json();
      setfetched(result);
    };
    fecthdata();
  }, []);

  return (
    <div>
      <table className="table-auto border-collapse border border-gray-400 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">ID</th>
            <th className="border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">Username</th>
            <th className="border border-gray-400 px-4 py-2">Email</th>
            <th className="border border-gray-400 px-4 py-2">Street</th>
            <th className="border border-gray-400 px-4 py-2">Suite</th>
            <th className="border border-gray-400 px-4 py-2">City</th>
            <th className="border border-gray-400 px-4 py-2">Zipcode</th>
            <th className="border border-gray-400 px-4 py-2">Latitude</th>
            <th className="border border-gray-400 px-4 py-2">Longitude</th>
          </tr>
        </thead>
        <tbody>
          {fetched &&
            fetched.map((user) => (
              <tr key={user.id} className="bg-white">
                <td className="border border-gray-400 px-4 py-2">{user.id}</td>
                <td className="border border-gray-400 px-4 py-2">
                  {user.name}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {user.username}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {user.email}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {user.address.street}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {user.address.suite}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {user.address.city}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {user.address.zipcode}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {user.address.geo.lat}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {user.address.geo.lng}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
