/* eslint-disable react/prop-types */
import Button from "./Button";

export default function TableUsers({ users }) {
  return (
    <>
      <table className="table-fixed w-full">
        <thead className="bg-color_home h-16 w-full">
          <tr>
            <th>No</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users?.map((users, index) => (
              <tr key={users.id} className="text-center">
                <td>{index + 1}</td>
                <td>{users.username}</td>
                <td>{users.email}</td>
                <td>{users.password}</td>
                <td>
                  <div className="flex gap-10 justify-center">
                    <Button
                      title="Detail"
                      onClick={() => console.log("Detail")}
                    />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
