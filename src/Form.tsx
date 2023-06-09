import FormInput from "./FormInput";
import { useState } from "react";

const Form = () => {
  const [userInfo, setUserInfo] = useState({
    email: "example@alea.com",
    age: 30,
    name: "John Doe",
    phone: {
      ext: "00387",
      number: "65/123-456",
    },
  });

  return (
    <div>
      <FormInput
        type="email"
        required
        name="email"
        placeHolder="your@email.com"
      />
      <FormInput type="number" name="age" />
      <FormInput type="text" required name="name" />
      <FormInput type="text" name="phone.ext" />
      <FormInput type="text" name="phone.number" />
      <FormInput type="submit" value="Submit" />
    </div>
  );
};

export default Form;
