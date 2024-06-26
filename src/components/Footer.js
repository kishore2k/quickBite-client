import { assets } from "../assets/assets";

export default function Footer() {
  return (
    <div className="font-mono bg-zinc-800 px-12 pt-12 pb-6 mt-6" id="Footer">
      <div className="flex justify-between lg:flex-row lg:text-left flex-col text-center">
        <div className="lg:w-4/6">
          <h1 className="text-4xl font-mono text-orange-600 font-medium">
            QuickBite
          </h1>
          <p className="text-xl text-white my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex lg:gap-4 lg:justify-normal justify-around">
            <img className="cursor-pointer" src={assets.facebook_icon} alt="" />
            <img className="cursor-pointer" src={assets.linkedin_icon} alt="" />
            <img className="cursor-pointer" src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="text-white px-3 flex flex-col lg:mt-0 mt-4">
          <h3 className="text-3xl font-bold lg:mb-4">COMPANY</h3>
          <span className="text-xl font-medium">Home</span>
          <span className="text-xl font-medium">About us</span>
          <span className="text-xl font-medium">Delivery</span>
          <span className="text-xl font-medium">Privacy Policy</span>
        </div>
        <div className="text-white px-3 flex flex-col lg:mt-0 mt-4">
          <h3 className="text-3xl font-bold lg:mb-4"> GET-IN-TOUCH</h3>
          <span className="text-xl font-medium">+1-234-567-4321</span>
          <span className="text-xl font-medium"> quickbite@gmail.com</span>
        </div>
      </div>
      <hr className="mt-8" />
      <p className="text-md mt-6 text-center text-gray-400 font-semibold">
        Copyright 2024 @ quickbite.com - All Right Reserved
      </p>
    </div>
  );
}
