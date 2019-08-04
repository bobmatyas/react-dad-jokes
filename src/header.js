import React from 'react';

export const Header = () => {
  const dadPhotoList = ["01", "02", "03", "04", "05"];

  const getRandomDadPhoto = (dadPhotoList) => {
    let dadDataSrc = `./imgs/tv-dads/${dadPhotoList[Math.floor(Math.random() * dadPhotoList.length)]}.jpg`;
    return dadDataSrc;
  }

  const dadPhoto = getRandomDadPhoto(dadPhotoList);

  return (
    <div className="header">
      <div className="header__container">
        <img src={dadPhoto} alt="dad" className="header__dad__photo" />
        <h2 className="header__dad__text">Dad <span className="header__dad__text__arrow">></span></h2>
      </div>
    </div>
    )
}