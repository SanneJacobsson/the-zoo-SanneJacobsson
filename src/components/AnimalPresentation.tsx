import { useNavigate } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import { errorImage } from "../functions/errorImage";

interface IAnimalPresenationProps {
  animal: IAnimal;
}

export const AnimalPresentation = (props: IAnimalPresenationProps) => {
  const navigate = useNavigate();

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

  return (
    <div className={hungryClass}>
      <h3>{props.animal.name}</h3>
      <div className="animalImgContainer">
        <img
          src={props.animal.imageUrl}
          alt={props.animal.name}
          onError={errorImage}
        />
      </div>
      <button
        onClick={() => {
          navigate("/animal/" + props.animal.id);
        }}
      >
        Läs mer
      </button>
    </div>
  );
};
