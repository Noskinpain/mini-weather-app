import {useState} from "react";

const SearchBar = () => {

  const [term, setTerm] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setTerm(term)
    console.log(term)
  }
  return (
    <div className="mt-4 px-6">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <input
            className="w-[32rem] bg-white  h-12 rounded-lg pl-2 placeholder:text-black outline-none"
            type="text"
            placeholder="enter city name"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button className="bg-blue-400 w-24 h-12 text-white font-bold rounded-lg">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
