import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { getAnimals } from "../services/animalService";
import { AnimalPresentation } from "../components/AnimalPresentation";
import { getAnimalsLS } from "../services/getAnimalsLS";
import { setAnimalsLS } from "../services/setAnimalsLS";

export const Animals = () => {
  const [animals, setAnimals] = useState<IAnimal[]>();

  useEffect(() => {
    if (animals) return;

    const getData = async () => {
      let lsAnimals = getAnimalsLS();

      if (lsAnimals?.length !== 0) {
        setAnimals(lsAnimals);
        console.log(lsAnimals);
      } else {
        const animalsData: IAnimal[] = await getAnimals();
        console.log("hej");

        if (shouldUpdateAnimals) {
          setAnimals(animalsData);
          setAnimalsLS(animalsData);
        }
      }
    };
    let shouldUpdateAnimals = true;

    getData();

    return () => {
      shouldUpdateAnimals = false;
    };
  }, [animals]);

  return (
    <>
      {animals?.map((animal) => {
        return <AnimalPresentation key={animal.id} animal={animal} />;
      })}
    </>
  );
};
