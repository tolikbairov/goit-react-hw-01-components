import PropTypes from "prop-types";
import FriendItem from "../friend-item/friendItem";
import styles from "./friend-list.module.css";
export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendlist}>
      {friends.map((item) => (
        <li key={item.id}>
          <FriendItem
            name={item.name}
            avatar={item.avatar}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
