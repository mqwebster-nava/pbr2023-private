import { Button } from "../../atom/Button/Button";

const Newsletter = () => {
  return (
    <div className=" bg-navy-50 font-sans">
      <div className="responsive-container py-2xl text-black">
        <h3 className="font-sans text-lg  text-bold">Get The Newsletter </h3>
        <p className={`font-sans pt-lg text-base  mb-md`}>
          Find out about open roles, new partnerships, and news from the broader
          civic tech community.
        </p>
        <div className="my-xl ">
          <label htmlFor="newsletter-sign-up" className="block">
            email
          </label>
          <input id="newsletter-sign-up" type="text"></input>
        </div>
        <Button href={null} variant="black">
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default Newsletter;
