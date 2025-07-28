import { useFetchNames } from "../store/Store";

function Names() {
  const { data, error, isLoading } = useFetchNames();
  console.log(data, error, isLoading);

  return (
    <>
      <div>nothing for now!</div>
    </>
  );
}

export default Names;
