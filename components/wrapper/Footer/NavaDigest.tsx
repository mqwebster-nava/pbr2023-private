import brandDirection from "public/images/Nava-Brand Pattern-Direction1-Heavy-White-V01@4x 3.svg";
import brandTerrain from "public/images/Nava-Brand Pattern-Terrain3-Medium-White-V01@4x 2.svg";
import { Button } from "components/atom";
import Image from "next/image";
import FormInputButton from "components/atom/Button/FormInputButton";


/*
TODO finish properly connecting it to Mailchimp and adding error/success text
*/
const NavaDigest = () => {
  return (
    <div className=" bg-sage-400 font-sans">
      <div className="responsive-container text-white pt-2xl">
        <div className=" w-full pt-lg flex pb-2xl flex-col md:flex-row">
          <div className="w-full md:w-1/2 ">
            <h3 className="font-sans type-preset-2 font-bold pb-lg">Nava Digest</h3>

            <p className={`2 font-sans mr-3xl type-preset-6  mb-md`}>
              Get Nava updates on new open roles, government partnerships,
              learnings, and news from the broader civic tech community.
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
              <div id="mc_embed_signup" className="flex gap-md w-full">
                <input
                  type="email"
                  name="EMAIL"
                  id="mce-EMAIL"
                  placeholder="Your email address"
                  className=" required email text-black w-full p-md rounded-sm"
                />
                <div hidden={true}><input type="hidden" name="tags" value="12593337" /> </div>
               
                <div className="clear">
                  <FormInputButton
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                  />
                </div>
              </div>
              <label htmlFor="newsletter-sign-up" className="block underline">
                View past newsletters
              </label>
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
            <script
              type="text/javascript"
              src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
            ></script>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <Image src={brandTerrain} height={100} width={100} alt="" />
          <Image src={brandDirection} height={100} width={100} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavaDigest;
