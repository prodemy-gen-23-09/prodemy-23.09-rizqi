import TableUsers from "../../components/Admin/TableUsers";
import BannerImage from "../../components/User/BannerImage";
import { getAllUsers } from "../../service/Admin/api";

function Users() {
  const { data } = getAllUsers();
  return (
    <div>
      <BannerImage title="Admin" />
      <div className="flex my-10 mx-16 justify-center">
        {data?.length === 0 ? (
          <div className="flex">No Data Found</div>
        ) : (
          <TableUsers users={data} />
        )}
      </div>
    </div>
  );
}

export default Users;
