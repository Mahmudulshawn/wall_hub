"use client";
import { Button } from "@/components/ui/button";
import { account } from "@/lib/appwrite";

const Home = () => {
  const ping = async () => {
    try {
      const user = await account.get();
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="">
      <Button onClick={ping}>Ping</Button>
    </div>
  );
};

export default Home;
