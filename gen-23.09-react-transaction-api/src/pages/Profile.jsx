import BannerImage from "../components/User/BannerImage";
import { useSelector } from "react-redux";
export default function Profile() {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  return (
    <>
      <BannerImage title="Profile" />
    </>
  );
}
