import { assets } from "../assets/assets";

export default function DownloadApp() {
  return (
    <div
      id="DownloadApp"
      className="flex flex-col items-center py-4 mt-4 text-center"
    >
      <h2 className="text-4xl font-semibold text-gray-700">
        For Better Experience Download The QuickBite App
      </h2>
      <div className="flex py-4 gap-6 md:flex-row flex-col">
        <img className="cursor-pointer" src={assets.play_store} alt="" />
        <img className="cursor-pointer" src={assets.play_store} alt="" />
      </div>
    </div>
  );
}
