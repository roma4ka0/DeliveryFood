import styles from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../Store/cartSlice";

const CartItem = (props) => {
  const { id, name, price, quantity } = props.item;
  const dispatch = useDispatch();
  const AddItemHandler = () => {
    const newItem = {
      id: id,
      name: name,
      price: price,
    };

    dispatch(addItem(newItem));
  };
  const RemoveItemHandler = () => {
    const itemToRemove = {
      id: id,
      name: name,
      price: price,
    };

    dispatch(removeItem(itemToRemove));
  };

  return (
    <section>
      <section className={styles.itemContainer}>
        <p className={styles.Name}>{name}</p>
        <p className={styles.Price}>{price} $</p>
        <section>
          <button className={styles.AddItem} onClick={AddItemHandler}>
            +
          </button>
          <p className={styles.Count}>{quantity}</p>
          <button className={styles.RemoveItem} onClick={RemoveItemHandler}>
            -
          </button>
        </section>
      </section>
      <hr />
    </section>
  );
};

export default CartItem;
