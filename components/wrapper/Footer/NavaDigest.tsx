import classNames from "classnames";
import FormInputButton from "components/atom/Button/FormInputButton";

const SignupBrand = "/images/Sign-up-Brand-pattern-V02.svg";

/*
TODO finish properly connecting it to Mailchimp and adding error/success text
*/
const NavaDigest = ({isBottomCTA=false}) => {

  const topPadding = classNames({
    "pt-xl md:pt-3xl": !isBottomCTA
  });
  return (
    <div className={`${topPadding} relative`}>
      <div className="responsive-container bg-sage-700 sm:bg-transparent">
          <div className="bg-sage-700 font-sans h-3xl sm:h-4xl "></div>
      </div>
  <div className="bg-sage-700 sm:bg-navy-900 ">
    <div className="responsive-container z-10 relative">
      <div className="bg-sage-700 font-sans  ">
      <div className="font-sans text-white  sm:px-2xl lg:px-4xl">
        <div className=" w-full flex pb-2xl flex-col md:flex-row">
          <div className="w-full md:w-1/2 ">
            <h3 className="font-sans type-preset-2 font-bold pb-lg -mt-[6px] md:-mt-[12px]">Stay in touch</h3>
            <p className={`2 font-sans mr-3xl type-preset-6  mb-md`}>
            Sign up for our newsletter to find out about career opportunities, new partnerships, and news from the broader civic tech community.
            </p>
          </div>
          <div className="w-full md:w-1/2 ">
        
            <form
            action="https://navapbc.us10.list-manage.com/subscribe/post" 
            method="post"
             target="_blank" 
    
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
            >
                <input type="hidden" name="u" value="c69eb1fd5475fa5122ef55965"/>
                <input type="hidden" name="id" value="a994830182"/>
                <input type="hidden" name="tags" value="12593337" /> 

              <label htmlFor="email" className="hidden">Email</label>
              <div id="mc_embed_signup" className="flex flex-col lg:flex-row gap-md w-full pt-sm md:pt-0">
                <input
                  type="email"
                  name="EMAIL"
                  id="email"
                  placeholder="Your email address"
                  className={`required email text-gray-900 w-full p-md h-[70px]`}
                />
                <div className="clear">
                  <FormInputButton
                    value="Sign up"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    isFullWidth={true}
                  />
                </div>
              </div>
            
            </form>
          </div>
        </div>
     </div>
        <div className="hidden sm:flex w-full justify-end">
          <img src={SignupBrand} height={72} width={144}  alt="" />
        </div>
      </div>
    </div>
</div>
    </div>
  );
};

export default NavaDigest;

