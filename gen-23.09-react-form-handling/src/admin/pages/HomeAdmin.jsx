import BannerImage from "../../components/BannerImage";
import BannerService from "../../components/BannerService";
import TableAdmin from "../components/TableAdmin";

function HomeAdmin() {
  return (
    <div>
      <BannerImage title="Admin" />
      <div className="flex justify-end mx-20 mt-10 ">
        <button
          className="bg-color1_selected hover:bg-color_home hover:text-color1_selected p-3 rounded-md text-color_home"
          onClick={() => console.log("Button Di Click")}
        >
          Add New Data
        </button>
      </div>
      <div className="flex my-10 mx-20 justify-center">
        <TableAdmin />
      </div>
      <BannerService />
    </div>
  );
}

export default HomeAdmin;
