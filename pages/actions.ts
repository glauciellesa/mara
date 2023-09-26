"use server";

import User from "@/Models/User";
import db from "@/utils/db";

interface UserData {
  name: string;
  email: string;
  password: string;
}
const insertUser = async (data: UserData) => {
  const user = {
    name: data.name,
    email: data.email,
    password: data.password,
    isAdmin: false,
  };
  await db.connect();
  const { insertedId } = await User.create(user);
  await db.disconect();

  console.log(insertUser);

  return insertedId;
};

const actions = { insertUser };

export default actions;
