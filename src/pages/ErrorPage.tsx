import { FC } from "react";
import { Link } from "react-router-dom";
import img from "../assets/page-not-found.png";

const ErrorPage: FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 font-roboto text-white flex justify-center items-center flex-col gap-16">
      <img src={img} alt="404" />
      <Link to={"/"} className="bg-sky-500 rounded-md px-6 py-2">
        {" "}
        Back
      </Link>
    </div>
  );
};

export default ErrorPage;
