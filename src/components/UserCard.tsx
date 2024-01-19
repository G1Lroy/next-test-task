import React from "react";
import { IUser } from "../types";
import Link from "next/link";
import { MockAvatars } from "@/constans";

type UserCartProps = {
  user: IUser;
};

const UserCard = ({ user }: UserCartProps) => {
  return (
    <li key={user.id} className="bg-neutral-900 rounded-md text-center p-2 hover:bg-neutral-800 transition">
      <Link title="Go to user page" href={`/${user.id}`}>
        <div className="flex justify-center items-center">
          <img className="object-cover rounded-full  w-14 h-14" src={MockAvatars[user.id - 1]} />
        </div>
        <div className="text-sm">
          <p>Name: {user.name}</p>
          <p>Company: {user.company.name}</p>
        </div>
      </Link>
    </li>
  );
};

export default UserCard;
