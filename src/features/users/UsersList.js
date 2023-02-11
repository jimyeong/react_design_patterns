import React from "react";
import { useSelect } from "../../hooks/useSelect";
import { Link } from "react-router-dom";
import { selectAllUsers } from "../users/usersSlice";
import { useSelector } from "react-redux";

export const UserList = () => {
  const users = useSelector(selectAllUsers);

  const renderUsers = users.map((user, key) => (
    <li key={key}>
      <Link to={`/user/${user.id}`}>{user.name}</Link>
    </li>
  ));

  return (
    <section>
      <h2>Users</h2>
      <ul>{renderUsers}</ul>
    </section>
  );
};
