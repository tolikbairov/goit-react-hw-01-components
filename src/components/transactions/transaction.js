import PropTypes from "prop-types";
import styles from "./transactions.module.css";
export default function Transactions({ items }) {
  return (
    <table className={styles.transactionhistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>

    // <ul className="friend-list">
    //   {friends.map((item) => (
    //     <li key={item.id}>
    //       <FriendItem
    //         name={item.name}
    //         avatar={item.avatar}
    //         isOnline={item.isOnline}
    //       />
    //     </li>
    //   ))}
    // </ul>
  );
}
Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
