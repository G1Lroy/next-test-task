import React from "react";
import { IUser } from "../types";
import UserCard from "./UserCard";

type UserListProps = {
  users: IUser[];
};

const UserList = ({ users }: UserListProps) => {
  return (
    <>
      <ul className="grid grid-cols-5 gap-3 p-5">
        {users.map((user) => (
          <UserCard user={user} />
        ))}
      </ul>
    </>
  );
};

export default UserList;
