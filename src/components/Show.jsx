import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchItems } from "../store/slices/thunks/FetchThunk";
import Names from "./Names";

function Show() {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector((state) => {
    return state.items;
  });

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  let content;

  if (isLoading) {
    content = <div>loading...</div>;
  } else if (error) {
    content = <div>error...</div>;
  } else {
    content = (
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <h3>{item.caption}</h3>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="bg-red-600 p-3">
        <form className="flex gap-2">
          <input className="border-2" type="text" placeholder="type text..." />
          <button className="bg-blue-700 p-2 rounded-2xl">submit</button>
        </form>
        <div className="bg-blue-500 p-3 rounded max-w-80">{content}</div>
        <Names />
      </div>
    </>
  );
}

export default Show;
