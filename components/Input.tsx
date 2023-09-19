interface InputType {
  type: string;
  placeholder: string;
}

const Input = (inputType: InputType) => {
  return (
    <div className="grid gap-2">
      <span className=" pl-3 text-sm ">{inputType.placeholder}</span>
      <input type={inputType.type} className="rounded-full p-2 text-base" />
    </div>
  );
};

export default Input;
