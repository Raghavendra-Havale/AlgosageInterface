import PropTypes from "prop-types";

function Notifications({ message }) {
  return <div className="">{message}</div>;
}

export default Notifications;
Notifications.propTypes = {
  message: PropTypes.string,
};
