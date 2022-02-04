import logo from "../assets/images/logo-1.svg";
import gIcon from "../assets/icons/gIcon.png";
import fIcon from "../assets/icons/fIcon.png";
import cryptocurrencyIcon from "../assets/icons/cryptocurrencyIcon.png";
import Image from "next/image";
function Login() {
  return (
    <div className=" flex flex-col item-center justify-center min-h-screen w-full ">
      <div className="flex flex-col justify-items-center mb-16">
        <Image
          className=" w-52 mb-5"
          src={logo}
          layout="intrinsic"
          alt="coinat"
          width="200"
          height="200"
        />
      </div>

      <div className="flex flex-col items-center justify-evenly">
        {/* Facebook button */}
        <button
          className="bg-[#3b82f6] h-15 px-6 mb-10 w-15
        text-gray-800 font-bold text-lg p-x-2 py-1 rounded-lg  transition-colors duration-150 focus:shadow-outline hover:bg-gray-300
        space-x-2"
        >
          <p className=" flex items-center justify-items-center">
            Login with Facebook{" "}
            <span className="px-2">
              <Image src={fIcon} alt="google icon" layout="intrinsic" />
            </span>
          </p>
        </button>

        {/* google button*/}
        <button
          className="bg-[#3b82f6] h-15 px-10 mb-10 w-15
        text-gray-800 font-bold text-lg pb-2 pt-2 rounded-lg  transition-colors duration-150 focus:shadow-outline hover:bg-gray-300
        space-x-2"
        >
          <p className=" flex items-center justify-items-center ">
            Login with Google
            <span className="px-2">
              <Image
                src={gIcon}
                alt="g icon"
                layout="intrinsic"
                height={35}
                width={35}
              />
            </span>
          </p>
        </button>

        {/* Username and password*/}
        <button
          className="bg-[#3b82f6] h-15 px-10 mb-10 w-15
        text-gray-800 font-bold text-lg pb-2 pt-2 rounded-lg  transition-colors duration-150 focus:shadow-outline hover:bg-gray-300
        space-x-2"
        >
          <p className=" flex items-center justify-items-center ">
            Login with Username
            <span>
              <Image
                src={cryptocurrencyIcon}
                alt="cryptocurrency-icon"
                layout="intrinsic"
                height={35}
                width={35}
                className="pl-6"
              />
            </span>
          </p>
        </button>
      </div>
    </div>
  );
}

export default Login;
