import {useState} from "react";


interface submitProps{
  handleSubmit: (term: string) => void
}

const SearchBar = ({handleSubmit}: submitProps) => {

  const [term, setTerm] = useState("")


  

  return (
    <div className="mt-4 px-6">
      <form onSubmit= {(e) => { e.preventDefault(); handleSubmit(term); }}>
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
