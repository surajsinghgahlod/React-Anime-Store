import React from 'react'

export const AnimeInfo = (props) => {
    const {title,images:{jpg:{large_image_url}},source,rank,score,popularity,members,status,rating,duration}=props.animeInfo
  return (
    <>
        <div className="anime-content">
            <h3>{title}</h3><br />
            <img src={large_image_url} alt="" /><br /><br />
            <div className="info">
                <h3><i class='bx bx-trophy'></i> Rank : {rank}</h3>
                <h3><i class='bx bx-star'></i> Rating : {rating}</h3>
                <h3><i class='bx bx-table'></i> Score : {score}</h3>
                <h3><i class='bx bx-party'></i> Popularity : {popularity}</h3>
                <br /> <hr />
                <h4><i class='bx bxs-user-detail'></i> Members : {members}</h4>
                <h4><i class='bx bx-link'></i> Source : {source}</h4>
                <h4><i class='bx bx-stopwatch'></i> Duration : {duration}</h4>
                <h4><i class='bx bx-history'></i> Status : {status}</h4>
            </div>
        </div>
    </>
  )
}
