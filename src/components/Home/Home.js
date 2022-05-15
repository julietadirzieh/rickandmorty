import React, { useState, useEffect } from "react";
import "../../App.css";
import Search from "../Search/Search";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";

const Home = () => {
    let [pageNumber, updatePageNumber] = useState(1);
    let [fetchedData, updateFetchedData] = useState([]);
    let [search, setSearch] = useState("");
    let { info, results } = fetchedData;
  
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
  
    useEffect(() => {
      (async function () {
        let data = await fetch(api).then((res) => res.json());
        updateFetchedData(data);
      })();
    }, [api]);

    return (
      <div className="App">
        <h1 className="text-center mb-3">Personajes</h1>
        <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="row">
                <Card page="/personaje/" results={results} />
              </div>
            </div>
          </div>
        </div>
        <Pagination
          info={info}
          pageNumber={pageNumber}
          updatePageNumber={updatePageNumber}
        />
      </div>
    );
  };

export default Home;