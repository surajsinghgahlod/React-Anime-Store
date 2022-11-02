import React from 'react'

export const AnimeList = ({ animelist,setAnimeInfo,animeComponent,handleList}) => {
  const AddToList=animeComponent;
  return (
    <>
      {
        animelist ? (
          animelist.map((anime, index) => {
            return (
              <div className="card" key={index} onClick={()=>setAnimeInfo(anime)}>
                <img className='anime-img' src={anime.images.jpg.large_image_url} alt="animeImage" />
                <div className="anime-info">
                  <h4>{anime.title}</h4>
                  {/* OVERLAY CONTENT  */}
                  <div className="overlay" onClick={()=>handleList(anime)}>
                      <h4>{anime.title_japanese}</h4>
                      <h3>SYNOPSIS</h3>
                      <div className="synopsis">
                        <p>{anime.synopsis}</p>
                      </div>
                      {/* OVERLAY BUTTONS  */}
                      <div className="watch-btn">
                      {/* PLAY BUTTON  */}
                        <div className="play-btn">
                          <p><i class="fa fa-2x fa-play-circle" aria-hidden="true"></i></p>
                        </div>
                      {/* ADD TO WATCH LIST BUTTON  */}
                        <div className="">
                          <AddToList/>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            )
          })
        ) : "Not Found"
      }

    </>
  )
}
