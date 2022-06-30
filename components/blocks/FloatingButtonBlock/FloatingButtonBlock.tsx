import { Button } from "components/atom";




interface FloatingButtonInterface {
  id: string;
  buttonText: string;
  buttonPath: string;
}

const FloatingButtonBlock = ({id, buttonText, buttonPath}:FloatingButtonInterface) =>{
    return ( 
    <section className={``}>
    <div className="responsive-container">
        <Button href={buttonPath} variant={"dark"}>{buttonText}</Button>
      </div>
      </section>
    )
}

export default FloatingButtonBlock;