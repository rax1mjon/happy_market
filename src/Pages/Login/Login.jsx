import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onClickFunc = (query) => {
    navigate("/" + query);
  };

  return (
    <>
      <div className="flex">
        <span>navigate :</span>
        <ul className="flex gap-3">
          <li className="cursor-pointer" onClick={() => onClickFunc("home")}>
            home
          </li>
          <li
            className="cursor-pointer"
            onClick={() => onClickFunc("searching/example")}
          >
            searching
          </li>
          <li className="cursor-pointer" onClick={() => onClickFunc("product/machine")}>
            product
          </li>
        </ul>
      </div>
    </>
  );
};

export default Login;
