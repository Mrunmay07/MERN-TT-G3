import { useNavigate, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError(); // Object{}
  console.log(error);

  const navigate = useNavigate() // function
  
  function handleGoBack(){
    navigate(-2)
  }

  return (
    <>
      <h1>{error.data}</h1>
      <p>{error.status}</p>
      <h3>{error.statusText}</h3>
      <button onClick={handleGoBack}>GO BACK</button>
    </>
  );
}

export default ErrorPage;
