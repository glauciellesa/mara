import Product from "@/Models/Product";
import User from "@/Models/User";
import data from "@/utils/data";
import db from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await db.disconect();
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await db.disconect();
  res.send({ message: "seeded successfully" });
};

export default handler;
