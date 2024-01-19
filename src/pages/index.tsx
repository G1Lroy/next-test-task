import { IUser } from "@/types";
import UserList from "../components/UserList";
import { getUserList } from "@/apiService";
import { motion } from "framer-motion";

type HomePageProps = {
  users: IUser[];
};

const Home = ({ users }: HomePageProps) => {
  if (!users) {
    return <div>Users list not found</div>;
  }
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-5">
      <h1 className="text-center text-2xl">User service</h1>
      <UserList users={users} />
    </motion.div>
  );
};

export async function getServerSideProps() {
  const users = await getUserList();

  return {
    props: {
      users,
    },
  };
}

export default Home;
