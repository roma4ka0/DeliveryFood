import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import Close from "../../Images/Close.png";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { clearCart } from "../../Store/cartSlice";
import { useDispatch } from "react-redux";

const Cart = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(props.isOpen);
  const cartItems = useSelector((state) => state.cart.items);
  const amount = useSelector((state) => state.cart.totalAmount);

  const dispatch = useDispatch();
  useEffect(() => {
    setIsModalOpen(props.isOpen);
  }, [props.isOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
    props.onCloseCart();
  };

  const closeModalAndClear = () => {
    setIsModalOpen(false);
    props.onCloseCart();
    dispatch(clearCart());
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onHideCart={closeModal} isOpen={isModalOpen}>
          <section className={styles.CartMainContainer}>
            <section className={styles.ModalHeader}>
              <h1>Кошик</h1>
              <button onClick={closeModal}>
                <img src={Close} />
              </button>
            </section>
            <section></section>
            <ul>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={{
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity,
                  }}
                />
              ))}
            </ul>
            {cartItems.length > 0 ? (
              <section className={styles.buttonsModal}>
                <p className={styles.Amount}>{amount} $</p>
                <section>
                  <button className={styles.ConfirmOrder}>
                    Оформити замовлення
                  </button>
                  <button
                    className={styles.CancelOrder}
                    onClick={closeModalAndClear}
                  >
                    Відміна
                  </button>
                </section>
              </section>
            ) : (
              <p className={styles.CartEmpty}>Кошик порожній</p>
            )}
          </section>
        </Modal>
      )}
    </div>
  );
};

export default Cart;
