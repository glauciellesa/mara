import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Glaucielle Sá",
      email: "adm@test.com",
      password: bcrypt.hashSync("123abc!"),
      isAdmin: true,
    },
    {
      name: "Diogo",
      email: "user@test.com",
      password: bcrypt.hashSync("123abc!"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "wide led trousers with darts",
      slug: "wide-led-trousers-with-darts",
      category: "Trouser",
      image: "trouser1.jpeg",
      price: 50,
      brand: "Zara",
      rating: 4.5,
      numReviews: 8,
      countInStock: 2,
      description:
        "High-waist trousers with front darts. Featuring front pockets and rear false welt pockets. Wide-leg design. Front zip fly, inner button and metal hook fastening.",
    },
    {
      name: "bodysuit with square cut neckline",
      slug: "bodysuit-with-square-cut-neckline",
      category: "bodysuit",
      image: "bodysuit1.jpeg",
      price: 20,
      brand: "Zara",
      rating: 5,
      numReviews: 4,
      countInStock: 10,
      description:
        "Square-neck bodysuit with wide straps. Snap-button fastening at the bottom.",
    },
    {
      name: "cotton trousers with belt",
      slug: "cotton-trousers-with-belt",
      category: "trousers",
      image: "trousers2.jpeg",
      price: 50,
      brand: "Zara",
      rating: 4.8,
      numReviews: 8,
      countInStock: 15,
      description:
        "Mid-waist trousers made of cotton. Belt loops. Side pockets. An adjustable belt with metal buckle. Front darts detail. Metal hook, button and zip fastening at the front.",
    },
    {
      name: "tailored waistcoat",
      slug: "tailored-waistcoat",
      category: "tailored",
      image: "tailored1.jpeg",
      price: 30,
      brand: "Zara",
      rating: 3.8,
      numReviews: 9,
      countInStock: 5,
      description:
        "V-neck waistcoat. Featuring false jetted pockets and button fastening on the front.",
    },
    {
      name: "straight fit trousers",
      slug: "straight-fit-trousers",
      category: "trousers",
      image: "trousers3.jpeg",
      price: 25.9,
      brand: "Zara",
      rating: 4.8,
      numReviews: 7,
      countInStock: 34,
      description:
        "High-waist trousers with front pockets and false rear welt pockets. Straight-leg design. Front zip fly, inside button and metal hook fastening.",
    },
    {
      name: "flowing waistcoat with belt",
      slug: "flowing-waistcoat-with-belt",
      category: "waistcoat",
      image: "waistcoat.jpeg",
      price: 35,
      brand: "Zara",
      rating: 2.8,
      numReviews: 2,
      countInStock: 4,
      description:
        "Lapel collar waistcoat. Front flap pockets. Matching belt fastening.",
    },
    {
      name: "linen blend jumpsuit with belt",
      slug: "linen-blend-jumpsuit-with-belt",
      category: "jumpsuit",
      image: "jumpsuit1.jpeg",
      price: 55,
      brand: "Zara",
      rating: 4.8,
      numReviews: 6,
      countInStock: 34,
      description:
        "Jumpsuit made of a linen blend. Johnny collar and long sleeves with shoulder tabs. Front pockets. Buckled belt detail. Straight leg design with turn-up hems. Front zip fly and top button fastening.",
    },
    {
      name: "high waist trousers",
      slug: "high-waist-trousers",
      category: "trousers",
      image: "trousers4.jpeg",
      price: 29.9,
      brand: "Zara",
      rating: 4.8,
      numReviews: 7,
      countInStock: 24,
      description:
        "High-waist trousers with seam detail on the front and back. Front welt pockets. Front zip fly, inside button and metal hook fastening.",
    },
    {
      name: "contrast semi sheer shirt",
      slug: "contrast-semi-sheer-shirt",
      category: "shirt",
      image: "shirt1.jpeg",
      price: 29.9,
      brand: "Zara",
      rating: 4.8,
      numReviews: 7,
      countInStock: 24,
      description:
        "Collared shirt with long sleeves. Faux fur appliqué detail. Fastens down the front with golden buttons.",
    },
    {
      name: "lapelles fitted blazer",
      slug: "lapelles-fitted-blazer",
      category: "blazer",
      image: "blazer1.jpeg",
      price: 49.9,
      brand: "Zara",
      rating: 5,
      numReviews: 7,
      countInStock: 14,
      description:
        "Lapelless blazer with long sleeves and shoulder pads. Front welt pockets. Metal hook fastening at the front.",
    },
  ],
};

export default data;
