import { useState } from "react";
import { errorImage } from "../functions/errorImage";
import { IAnimal } from "../models/IAnimal";

interface IShowAnimalDetails {
  animal: IAnimal;
  handleClick: () => void;
}

export const ShowAnimalDetails = (props: IShowAnimalDetails) => {
  const iAmFull = 0;
  const iAmLittleHungry = 1000 * 60 * 60 * 3;
  const iAmVeryHungry = 1000 * 60 * 60 * 4;
  const currentTime = new Date().getTime();

  const count = currentTime - Date.parse(props.animal.lastFed);
  let hungryClass = "";

  if (count > iAmVeryHungry) {
    hungryClass = "animalContainer";
  } else {
    if (count > iAmLittleHungry) {
      hungryClass = "animalContainerYellow";
    } else {
      if (count >= iAmFull) {
        hungryClass = "animalContainerTrue";
      }
    }
  }

  const isHungry = () => {
    const count = currentTime - Date.parse(props.animal.lastFed);
    if (count > iAmLittleHungry) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className={hungryClass}>
      <h3>{props.animal.name}</h3>
      <p>latinskt namn: {props.animal.latinName}</p>
      <div className="animalImgContainer">
        <img
          src={props.animal.imageUrl}
          alt={props.animal.name}
          onError={errorImage}
        />
      </div>
      <p>{props.animal.shortDescription}</p>
      <button onClick={props.handleClick} disabled={isHungry() === false}>
        Mata
      </button>
    </div>
  );
};
