import { menu_list } from "../assets/assets";

export default function ExploreMenu({ category, setCategory }) {
  function selectCategory(dishName) {
    setCategory((prev) => {
      return prev === dishName ? "All" : dishName;
    });
  }

  return (
    <div className="py-8">
      <h3 className="text-3xl font-extrabold mb-2">Explore our menu</h3>
      <p className="text-xl font-mono">
        Choose from a diverse menu featuring a delectable array of dishes
      </p>
      <div className="flex  overflow-x-scroll pt-6 my-2 hide-scrollbar">
        {menu_list.map((dish, index) => {
          return (
            <div
              key={index}
              className="flex flex-col flex-shrink-0 items-center mx-4 p-2"
              onClick={() => selectCategory(dish.menu_name)}
            >
              <img
                src={dish.menu_image}
                alt="NA"
                className="w-full h-auto  cursor-pointer rounded-full p-1"
                style={
                  category === dish.menu_name
                    ? { border: "solid", borderColor: "#dd6b20" }
                    : {}
                }
              />
              <h6 className="text-xl cursor-pointer mt-1">{dish.menu_name}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}
