import { assets } from "../assets/assets";

export default function Header() {
  return (
    <div className="relative">
      <div className="absolute left-6 bottom-6 w-3/5 p-6 text-white font-extrabold">
        <h3 className="text-5xl mb-4">Order your favourite food here</h3>
        <p className="text-xl font-mono">
          Whether you're craving a gourmet meal or a quick snack, we've got you
          covered with options from your favorite local restaurants. Enjoy easy
          ordering and quick delivery, all at the touch of a button with Quick
          Bite.
        </p>
        <button className="my-4 py-2 px-6 text-xl bg-white rounded-3xl text-black font-light">
          View Menu
        </button>
      </div>
      <img src={assets.header_img} alt="" />
    </div>
  );
}
