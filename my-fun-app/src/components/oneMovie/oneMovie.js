import react, { useState } from 'react';

function OneMovie() {

  async function getOneMovie() {
    const data = await fetch(`https://api.themoviedb.org/https://api.themoviedb.org/3/movie/popular?api_key=7a72b6558ac960d91c238471d0b9c4a5`)
    console.log(data)
  }


  return (
    <>
      <div>hey</div>
    </>
  )
}

export default OneMovie