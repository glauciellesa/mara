import axios from "axios";

const getProduct = async (id: string) => {
  console.log("to aqu");

  const { data } = await axios.get(`/api/products/${id}`);
  return data;
};

const service = { getProduct };

export default service;
