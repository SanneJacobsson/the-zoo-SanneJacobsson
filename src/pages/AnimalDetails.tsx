import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { useParams } from "react-router-dom";
import { getAnimalsLS } from "../services/getAnimalsLS";
import { ShowAnimalDetails } from "../components/ShowAnimalDetails";
import { setAnimalsLS } from "../services/setAnimalsLS";

export const AnimalDetails = () => {
  const animalsFromLs = getAnimalsLS();

  const [animal, setAnimal] = useState<IAnimal>();
  const [animals, setAnimals] = useState<IAnimal[]>([...animalsFromLs]);

  const { animalId } = useParams();

  if (!animal) {
    const clickedAnimal = animalsFromLs.find(
      (animal) => animal.id.toString() === animalId
    );
    setAnimal(clickedAnimal);
  }

  const feedAnimal = () => {
    const updatedList = animals.map((animal) => {
      if (animal.id.toString() === animalId) {
        return { ...animal, lastFed: new Date().toLocaleString() };
      } else {
        return animal;
      }
    });
    if (animal) setAnimal({ ...animal, lastFed: new Date().toLocaleString() });
    setAnimalsLS(updatedList);
  };
  return (
    <>
      {animal && <ShowAnimalDetails animal={animal} handleClick={feedAnimal} />}
    </>
  );
};
