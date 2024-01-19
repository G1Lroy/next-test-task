import React from "react";
import { IUser } from "../types";
import { MockAvatars } from "../constans";
import { useAppContext } from "@/context";

type UserProfileProps = {
  user: IUser;
};

const UserProfile = ({ user }: UserProfileProps) => {
  // Context logic
  const { viewedUsers, markUserAsViewed } = useAppContext();
  const isViewed = viewedUsers.includes(user.id);
  const handleViewedToggle = () => markUserAsViewed(user.id);

  // recursive render all nested fields
  const renderFields = (data: IUser) => {
    return Object.entries(data).map(([key, value]) => {
      const isObject = typeof value === "object" && Object.keys(value).length > 0;

      return (
        <div key={key} className="mb-2">
          {isObject ? (
            <>
              <p key={key} className="font-bold text-black text-center">
                {key.toUpperCase()}
              </p>
              {renderFields(value)}
            </>
          ) : (
            <div key={key} className="flex  text-gray-600">
              <p className="w-1/4 font-bold">{key}:</p>
              <p className="w-3/4">{value}</p>
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-neutral-100 rounded-md relative">
      <h1 className="text-3xl font-semibold mb-4 text-black">{user.name}</h1>

      {/* context */}
      <label title="Context" className="text-black text-xl cursor-pointer select-none absolute top-7 right-10">
        Viewed: <input type="checkbox" checked={isViewed} onChange={handleViewedToggle} />
      </label>
      {/*  */}

      <div className=" w-52 absolute right-10 shadow-xl">
        <img className="" loading="lazy" src={MockAvatars[user.id - 1]} />
      </div>
      {renderFields(user)}
    </div>
  );
};

export default UserProfile;
