import PropTypes from "prop-types";
import styles from "./friend-item.module.css";
export default function FriendItem({ avatar, name, isOnline }) {
  return (
    <>
      <span
        className={styles.status + (isOnline ? ` ${styles.isOnline}` : "")}
      ></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="Аватар пользователя"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </>
  );
}
FriendItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
// Profile.propTypes = {
//   src: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   stats: PropTypes.shape({
//     followers: PropTypes.number,
//     views: PropTypes.number,
//     likes: PropTypes.number,
//   }),
// };
