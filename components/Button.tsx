interface ButtonType {
  children: string;
}

const Button = (buttonType: ButtonType) => {
  return (
    <button className="bg-gradient-to-r from-gray-500 to-black rounded-full p-2 ">
      {buttonType.children}
    </button>
  );
};

export default Button;
