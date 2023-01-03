import Joi from "joi-browser";
import useForm from "../hooks/useForm";

const schema = {
  first_name: Joi.string().required().label("Fullname"),
  last_name: Joi.string().required().label("Last_Name"),
  email: Joi.string().required().label("E-mail"),
  gender: Joi.string().required().label("Gender"),
  ip_address: Joi.string().required().label("Country"),
};

const ClientsForm = ({ data, setData, selectedItem }) => {
  const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    ip_address: "",
  };
  const { values, renderInput, renderButton, handleSubmit } = useForm(
    initialState,
    schema,
    data,
    setData,
    selectedItem
  );

  return (
    <form onSubmit={handleSubmit}>
      {renderInput("First_Name", "first_name", values.first_name)}
      {renderInput("Last_Name", "last_name", values.last_name)}
      {renderInput("E-mail", "email", values.email)}
      {renderInput("Gender", "gender", values.gender)}
      {renderInput("Ip_address", "ip_address", values.ip_address)}
      {renderButton("Submit")}
    </form>
  );
};

export default ClientsForm;
