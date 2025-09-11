import { shimmer_card } from "../utils/constants";

const CardShimmer = () => {
    return (
        <div className="shimmer-card">
      <div className="shimmer-img stroke animate"></div>
      <div className="shimmer-title stroke animate"></div>
      <div className="shimmer-tags stroke animate "></div>
      <div className="shimmer-details stroke animate "></div>
    </div>
    )
}

const Shimmer = () => {
    return (
        <div className="shimmer-container">
            {/* creates an array of shimmer_card length, fills it with zeros, and then maps over the array to create a new CardShimmer component for each iteration, assigning a unique key prop to each component. */}
            {new Array(shimmer_card).fill(0).map((e, index) => <CardShimmer key={index.toString()+ 1} />)}
        </div>
    )
}
export default Shimmer