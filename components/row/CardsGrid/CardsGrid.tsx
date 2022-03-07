
import { Children } from "react";
// TODO move as much to tailwind
export interface CardsGridInterface {

}

const CardsGrid: React.FC<CardsGridInterface> = ({

  children,
}) => {
  return (
    <div className="responsive-container flex flex-wrap gap-md">
      {children}
    </div>
  );
};
export default CardsGrid;
