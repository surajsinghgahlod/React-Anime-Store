import React, { useEffect, useState } from "react";
import './Components/style.css';
import { AnimeList } from "./Components/AnimeList";
import { AnimeInfo } from "./Components/AnimeContent";
import { AddToList } from "./Components/AddToList";
import { RemoveFromList } from "./Components/RemoveAnime";

function App() {

  // GETTING LOCAL STORAGE 
  const getLocalItems = () => {
    let list = localStorage.getItem('myAnimeList');

    if(list){
      return JSON.parse(localStorage.getItem('myAnimeList'));
    }else {
      return[];
    }
  }

  const [search,setSearch]=useState('Naruto')
  const [animeData,setAnimeData]=useState();
  const [animeInfo,setAnimeInfo]=useState()
  const [myAnimeList,setMyAnimeList]=useState(getLocalItems())

  const addTo=(anime)=>{
    const index=myAnimeList.findIndex((myanime)=>{
        return myanime.mal_id === anime.mal_id
    })
    if(index < 0){
      const newArray=[...myAnimeList,anime]
      setMyAnimeList(newArray);
    }
    
  }
  const removeFrom=(anime)=>{
    const newArray=myAnimeList.filter((myanime)=>{
      return myanime.mal_id !== anime.mal_id
    })
    setMyAnimeList(newArray)
  }
  const getData=async()=>{
      const res=await fetch(`https://api.jikan.moe/v4/anime`)
      const resData= await res.json();
      setAnimeData(resData.data)
  }
  useEffect(()=>{
    getData()
  },[search]);

  useEffect(() => {
    localStorage.setItem("myAnimeList", JSON.stringify(myAnimeList));
  }, [myAnimeList]);

  return (
    <>
      {/* HEADER SECTION  */}
        <div className="header">
          <h1> MY<span className="anime-logo-head">ANIME</span></h1>
          <div className="search-box">
              <input type="search" placeholder="Search your anime" 
              onChange={(e)=>setSearch(e.target.value)}

              />
          {/* <!-- User --> */}
            <a href="" class="user">
            </a>
          </div>
        </div>

      {/* ANIME CONTAINER  */}
        <div className="container">
          <div className="animeInfo">
           {animeInfo && <AnimeInfo animeInfo={animeInfo}/>}
          </div>
          <div className="anime-row">
          {/* POPULAR ANIME ROW  */}
            <h2 className="text-heading">POPULAR ANIMES</h2>
            <div className="row">
                <AnimeList 
                  animelist={animeData}
                  setAnimeInfo={setAnimeInfo}
                  animeComponent={AddToList}
                  handleList={(anime)=>addTo(anime)}
                />
            </div>
            <br />
            {/* WATCH LATER LIST ROW  */}
            <h2 className="text-heading">WATCH LATER LIST</h2>
            <div className="row">
                <AnimeList 
                  animelist={myAnimeList}
                  setAnimeInfo={setAnimeInfo}
                  animeComponent={RemoveFromList}
                  handleList={(anime)=>removeFrom(anime)}
                />
            </div>
          </div>
        </div>
    </>
  );
}

export default App;
