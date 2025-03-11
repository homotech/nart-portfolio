import { ReactSortable } from "react-sortablejs";
import { useState } from "react";

interface ItemType {
  id: number;
  name: string;
}
const Draggable = () => {
  const [shoppingList, setShoppingList] = useState<ItemType[]>([
    { id: 1, name: "eggs" },
    { id: 2, name: "bread" },
    { id: 3, name: "beer" },
  ]);

  const moveItems = ({
    index,
    direction,
  }: {
    index: number;
    direction: string;
  }) => {
    console.log(direction);
  };
  return (
    <ReactSortable list={shoppingList} setList={setShoppingList}>
      {shoppingList.map((item, index) => (
        <div key={item.id} className="">
          {item.name}
          <button
            className="px-4 py-2 hover:bg-black hover:text-white mx-2"
            onClick={() => moveItems({ index, direction: "up" })}
          >
            Up
          </button>
          <button
            className="px-4 py-2 hover:bg-black hover:text-white mx-2"
            onClick={() => moveItems({ index, direction: "down" })}
          >
            Down
          </button>
        </div>
      ))}
    </ReactSortable>
  );
};
export default Draggable;
