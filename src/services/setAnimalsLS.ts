import { IAnimal } from "../models/IAnimal";

export const setAnimalsLS = (animals: IAnimal[]) => {
  localStorage.setItem("animals", JSON.stringify(animals) || "[]");
};
