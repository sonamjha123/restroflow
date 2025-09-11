import ItemListCategory from "./ItemListCategory"
const RestaurantCategory = (props) => {
  // const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
        props.setShowIndex();
    }
    return(
        <div>
         {/* Accordion Header */}
         <div className=" w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">{props.data?.title}({props.data?.itemCards?.length})</span>
          <span>⬇️</span>
          </div>
         
        {/* hide and show this Accordion body */}
        {!props.showItems && <ItemListCategory items={props.data?.itemCards}/>}
        </div>
        </div>
    )
}

export default RestaurantCategory