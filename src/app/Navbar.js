import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchNotifications,
  selectAllNotifications,
} from "../features/notifications/notificationSlice";

export const Navbar = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(selectAllNotifications);
  const unreadNotifications = notifications.filter((n) => !n.read).length;
  let unreadNotificationsBadge;
  if (unreadNotifications > 0) {
    unreadNotificationsBadge = (
      <span className="badge">({unreadNotifications})</span>
    );
  }
  const fetchnewNotification = () => {
    dispatch(fetchNotifications());
  };
  return (
    <nav>
      <section>
        <h1 style={{ fontSize: "28px" }}>React Laboratory</h1>
        <hr />
        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Posts</Link>
            <Link to="/users">Users</Link>
            <Link to="notifications">
              Notifications {unreadNotificationsBadge}
            </Link>
          </div>
          <button className="btn button" onClick={fetchnewNotification}>
            Refresh Notifications
          </button>
        </div>
      </section>
    </nav>
  );
};
