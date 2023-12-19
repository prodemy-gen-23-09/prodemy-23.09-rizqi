import imagepayment from "../assets/payment.svg";
import { Link } from "react-router-dom";

export default function Overview() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={imagepayment} alt="Payment" width={800} />
      <h1>
        Return To
        <Link to="/">
          <span className="text-blue-700"> Home</span>
        </Link>
      </h1>
    </div>
  );
}
