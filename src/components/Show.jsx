import { useSelector, useDispatch } from "react-redux";

function Show() {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => {
    return state.items;
  });

  return (
    <>
      <div className="bg-red-600 p-3">
        <form className="flex gap-2">
          <input className="border-2" type="text" placeholder="type text..." />
          <button className="bg-blue-700 p-2 rounded-2xl">submit</button>
        </form>
      </div>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <h3>{item.caption}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default Show;
