import { IAnimal } from "../models/IAnimal";

export const getAnimalsLS = (): IAnimal[] => {
  let lsAnimals = JSON.parse(localStorage.getItem("animals") || "[]");
  return lsAnimals;
};
