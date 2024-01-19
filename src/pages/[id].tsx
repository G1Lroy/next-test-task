import { GetServerSideProps } from "next";

import Link from "next/link";
import { IUser } from "@/types";
import UserProfile from "@/components/userProfile";
import { getUser } from "@/apiService";

type UserPageProps = {
  user: IUser;
};

const UserPage = ({ user }: UserPageProps) => {
  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="relative">
      <Link className="absolute left-10 bg-neutral-700 p-3 rounded-md hover:bg-neutral-600 transition" href="/">
        ← Back
      </Link>
      <UserProfile user={user} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<UserPageProps> = async ({ params }) => {
  const id = params?.id;

  if (!id) {
    return { notFound: true };
  }

  const singleUser = await getUser(id as string);

  return { props: { user: singleUser } };
};

export default UserPage;
