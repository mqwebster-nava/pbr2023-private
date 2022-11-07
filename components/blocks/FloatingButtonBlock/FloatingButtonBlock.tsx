import { Button } from "components/atom/Button/Button";

interface FloatingButtonInterface {
  id: string;
  buttonText: string;
  buttonPath: string;
}

const FloatingButtonBlock = ({id, buttonText, buttonPath}:FloatingButtonInterface) =>{
    return ( 
    <section className={``}>
    <div className="responsive-container">
        <Button href={buttonPath} variant={"dark"} analyticsLabel="floating-action-button">{buttonText}</Button>
      </div>
      </section>
    )
}

export default FloatingButtonBlock;