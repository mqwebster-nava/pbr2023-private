import FormInputButton from "components/atom/Button/FormInputButton";

const brandDirection = "/images/Nava-Brand Pattern-Direction1-Heavy-White-V01@4x 3.svg";
const brandTerrain = "/images/Nava-Brand Pattern-Terrain3-Medium-White-V01@4x 2.svg";


/*
TODO finish properly connecting it to Mailchimp and adding error/success text
*/
const NavaDigest = () => {
  return (
    <div className="pt-3xl relative">
      
    <div className="responsive-container z-10 relative">
      <div className="bg-sage-700 font-sans  pt-2xl ">
      <div className="font-sans text-white px-2xl">
        <div className=" w-full pt-lg flex pb-2xl flex-col md:flex-row">
          <div className="w-full md:w-1/2 ">
            <h3 className="font-sans type-preset-2 font-bold pb-lg">Stay in touch</h3>

            <p className={`2 font-sans mr-3xl type-preset-6  mb-md`}>
            Sign up for Nava’s newsletter to find out about open roles, new partnerships, and news from the broader civic tech community.
            </p>
          </div>
          <div className="w-full md:w-1/2 pt-md">
            <form
              action="https://navapbc.us10.list-manage.com/subscribe/post?u=c69eb1fd5475fa5122ef55965&amp;id=a994830182"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
            >
              <label htmlFor="email" hidden>Email</label>
              <div id="mc_embed_signup" className="flex gap-md w-full">
                <input
                  type="email"
                  name="EMAIL"
                  id="email"
                  placeholder="Your email address"
                  className=" required email text-black w-full p-md rounded-sm"
                />
                <div hidden={true}><input type="hidden" name="tags" value="12593337" /> </div>
               
                <div className="clear">
                  <FormInputButton
                    value="Sign up"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                  />
                </div>
              </div>
              {/* TODO figure out address for this */}
              <a  className="block underline" href={"/"}>
                View past newsletters
              </a>
              <div id="mce-responses" className="clear">
                  <div
                    className="response hidden"
                    id="mce-error-response"
                  ></div>
                  <div
                    className="response hidden"
                    id="mce-success-response" ></div>
                </div>
            </form>
          </div>
        </div>
     </div>
        <div className="w-full flex justify-end">
          <img src={brandTerrain} height={72} width={72}  alt="" />
          <img src={brandDirection} height={72} width={72} alt="" />
        </div>
      </div>
     
    </div>
    <div className="bg-navy-900 h-[200px] -z-10 -mt-[200px]"></div>
    </div>
  );
};

export default NavaDigest;
