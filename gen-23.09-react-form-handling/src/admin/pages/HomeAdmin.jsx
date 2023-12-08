/* eslint-disable no-unused-vars */
import BannerImage from "../../components/BannerImage";
import BannerService from "../../components/BannerService";
import Button from "../components/Button";
import Overlay from "../components/Overlay";
import TableAdmin from "../components/TableAdmin";
import { useState } from "react";
import { getAllProducts } from "../service/api";

function HomeAdmin() {
  const [isModalDataOpen, setModalDataOpen] = useState(false);
  const { data, isLoading, isError, mutate } = getAllProducts();

  const openModal = () => {
    setModalDataOpen(true);
  };

  const closeModal = () => {
    setModalDataOpen(false);
  };

  if (isLoading) {
    return <div className="flex min-h-screen">Loading...</div>;
  }

  if (isError) {
    return <div className="flex min-h-screen">Error loading data</div>;
  }

  return (
    <>
      <BannerImage title="Admin" />
      <div className="flex justify-end mx-20 mt-10 ">
        <Button onClick={openModal} title="Add New Data" />
      </div>
      <div className="flex my-10 mx-20 justify-center">
        {data?.length === 0 ? (
          <div className="flex">No Data Found</div>
        ) : (
          <TableAdmin products={data} condition />
        )}
      </div>
      <BannerService />
      {isModalDataOpen && <Overlay closeModal={closeModal} />}
    </>
  );
}

export default HomeAdmin;
