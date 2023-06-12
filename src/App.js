import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./Components/Cards/Cards";
import Filters from "./Components/Filters/Filters";
import React, { useState, useEffect } from "react";
import Pagination from "./Components/Pagination/Pagination";
import Search from "./Components/Search/Search";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Episode from "./Pages/Episode";
import Location from "./Pages/Location";
import CardDetails from "./Components/Cards/CardDetails";

function App(){
  return(
    <Router>
      <div className="App">
      <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<CardDetails/>}/>

        <Route path="/episodes" element={<Episode/>}/>
        <Route path="/episodes/:id" element={<CardDetails/>}/>

        <Route path="/location" element={<Location/>}/>
        <Route path="/location/:id" element={<CardDetails/>}/>
      </Routes>
    </Router>
  )
}

function Home() {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, setFetchedData] = useState([]);
  let [search ,setSearch] = useState('')
  let [status,setStatus]=useState('')
  let [gender,setGender]=useState('')
  let [species,setSpecies]=useState('')
  let { info, results } = fetchedData;
  // console.log(info)
  // console.log(results)
  let api = ` https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
    })();
  }, [api]);
  return (
    <div className="App">
      <h1 className="text-center mb-4">Characters</h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />

      <div className="container">
        <div className="row">
            <Filters setStatus={setStatus} setPageNumber={setPageNumber} setGender={setGender} setSpecies={setSpecies} />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} info={info} />
    </div>
  );
}

export default App;
