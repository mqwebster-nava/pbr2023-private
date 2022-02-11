
import { Children } from "react";
// TODO move as much to tailwind
export interface CardsGridInterface {
  title: string;
}

const CardsGrid: React.FC<CardsGridInterface> = ({
  title,
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
