import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <div
        className="bg-[url('https://images.unsplash.com/photo-1493364391862-bb90969a4cc1?w=1920&auto=format&fit=crop&q=100&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGNsb3VkfGVufDB8fDB8fHww')] 
             bg-cover 
             bg-center 
             bg-no-repeat 
             h-full
             w-full"
      >
        <div className="flex justify-center items-center">
          <div className="w-[45rem] h-[45rem] bg-white my-14 rounded-lg bg-opacity-80">
          <SearchBar/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
