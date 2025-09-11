import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
const ItemListCategory = ({items}) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //if clicked on Add then dispatch an action 
  dispatch(addItem(item));// this action will be handled by cartSlice, this is action.payload
  //when we dispatch an action then this  {  payload: "pizza" }
}
  return (
    <div>
      {items?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 flex justify-between items-center "
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                - ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 relative flex flex-col items-center">
            <img
              className="w-24 h-16 object-cover rounded"
              src={CDN_URL + item?.card?.info?.imageId}
              alt="img"
            />
            <button className=" hover:bg-gray-200 p-2 bg-white shadow-lg rounded-lg absolute bottom-0 translate-y-1/2"
            onClick={()=>handleAddItem(item)}>
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemListCategory;
