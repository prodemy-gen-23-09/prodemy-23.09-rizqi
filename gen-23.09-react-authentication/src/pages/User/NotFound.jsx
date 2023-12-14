import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <img src="/src/assets/404.png" width={800} />
      <Link to="/">
        <div className="text-black hover:text-color1_selected">
          Return Back To Home
        </div>
      </Link>
    </div>
  );
}

export default NotFound;
