
import { Children } from "react";
// TODO move as much to tailwind
export interface CardsGridInterface {

}

const CardsGrid: React.FC<CardsGridInterface> = ({

  children,
}) => {
  return (
    <div className="m-3xl flex flex-wrap ">
      {Children.toArray(children).map((child)=>(
      <div className="m-md">{child}</div>
      ))
      }
    </div>
  );
};
export default CardsGrid;
