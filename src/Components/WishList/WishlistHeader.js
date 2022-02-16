import { useData } from "../../Contexts/data-context";

const WishlistHeader = () => {
  const { wishList } = useData();
  return (
    <div className="wishHeader">
      <span>
        My Wishlist -{" "}
        <span>
          <b>{wishList.length} Items</b>
        </span>
      </span>
    </div>
  );
};

export default WishlistHeader;
