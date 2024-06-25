import { assets } from "../assets/assets";

export default function Header() {
  return (
    <div className="relative">
      <div className="absolute left-6 bottom-6 w-3/5 p-6 text-white font-extrabold">
        <h3 className="md:text-5xl sm:text-3xl text-xl mb-4 sm:inline-block hidden">
          Order your favourite food here
        </h3>
        <p className="text-xl font-mono xl:inline-block hidden">
          Whether you're craving a gourmet meal or a quick snack, we've got you
          covered with options from your favorite local restaurants. Enjoy easy
          ordering and quick delivery, all at the touch of a button with Quick
          Bite.
        </p>
        <button
          className="lg:my-4 lg:py-2 lg:px-6 lg:text-xl my-1 py-1 px-3 bg-white rounded-3xl 
        text-black font-light sm:inline-block hidden"
        >
          View Menu
        </button>
      </div>
      <img src={assets.header_img} alt="" />
    </div>
  );
}
