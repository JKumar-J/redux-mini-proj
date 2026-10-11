import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/feature/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(setQuery(text));
    setText("");
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="flex gap-5 p-10">
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          required
          className="w-full rounded border-2 px-4 py-3 text-2xl outline-none"
          type="text"
          placeholder="search anything..."
        />

        <button
          type="submit"
          className="cursor-pointer rounded border-2 px-4 py-3 text-2xl outline-none active:scale-95"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
