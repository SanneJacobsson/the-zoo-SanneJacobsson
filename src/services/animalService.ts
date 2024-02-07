import axios from "axios";
import { IAnimal } from "../models/IAnimal";

export const getAnimals = async () => {
  const response = await axios.get<IAnimal[]>(
    "https://animals.azurewebsites.net/api/animals"
  );
  console.log(response.data);

  return response.data;
};
