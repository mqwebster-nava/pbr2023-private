import FormInputButton from "components/atom/Button/FormInputButton";
import { useState } from "react";

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
            Sign up for our newsletter to find out about career opportunities, new partnerships, and news from the broader civic tech community.
            </p>
          </div>
          <div className="w-full md:w-1/2 pt-md">
        
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
              <div id="mc_embed_signup" className="flex gap-md w-full">
                <input
                  type="email"
                  name="EMAIL"
                  id="email"
                  placeholder="Your email address"
                  className={`required email text-black w-full p-md rounded-sm`}
                />
                <div className="clear">
                  <FormInputButton
                    value="Sign up"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                  />
                </div>
              </div>
              {/* <div id="response">
                  {hasError && <div
                    className="text-red-400"
                    id="error-response"
                  > Error submitting form</div> } 
                 {hasCompleted && <div
                    className="response"
                    id="mce-success-response" > Thank you for subscribing</div>}
                </div> */}
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
    <div className="bg-navy-900 h-[222px] -z-10 -mt-[222px]"></div>
    </div>
  );
};

export default NavaDigest;

