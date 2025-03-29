import PropTypes from "prop-types";

function Cards({ item = {} }) {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          {item.image ? (
            <img src={item.image} alt={item.name || "Product"} />
          ) : (
            <div className="h-40 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
              No Image
            </div>
          )}
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name || "No Name"}
            {item.category && (
              <div className="badge badge-secondary">{item.category}</div>
            )}
          </h2>
          <p>{item.title || "No description available"}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">
              ${item.price !== undefined ? item.price : "N/A"}
            </div>
            <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ✅ Define prop types
Cards.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};

export default Cards;
