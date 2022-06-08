import FormInputButton from "components/atom/Button/FormInputButton";
import { useState } from "react";

const brandDirection = "/images/Nava-Brand Pattern-Direction1-Heavy-White-V01@4x 3.svg";
const brandTerrain = "/images/Nava-Brand Pattern-Terrain3-Medium-White-V01@4x 2.svg";


/*
TODO finish properly connecting it to Mailchimp and adding error/success text
*/
const NavaDigest = () => {

  const [email, setEmail] = useState("");
  const [hasError, setHasError] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleChange = (event) =>{
    let val = event.target.value;
    setEmail(val);
    if(hasError) setHasError(false);
  }

  const handleSubmit = (event) =>{
    console.log("Submit")
   if( validateEmail(email) ){
      
      fetch('https://navapbc.us10.list-manage.com/subscribe/post?u=c69eb1fd5475fa5122ef55965&amp;id=a994830182', {
        method: 'post',
        body : JSON.stringify({
          EMAIL: email,
          tags:"12593337",
          subscribe:"Subscribe"
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => setHasCompleted(true)).catch((e)=>{console.log(e); setHasError(true);}).catch((e)=>{console.log(e); setHasError(true);});
   }

  }
  return (
    <div className="pt-3xl relative">
    <div className="responsive-container z-10 relative">
      <div className="bg-sage-700 font-sans  pt-2xl ">
      <div className="font-sans text-white px-2xl">
        <div className=" w-full pt-lg flex pb-2xl flex-col md:flex-row">
          <div className="w-full md:w-1/2 ">
            <h3 className="font-sans type-preset-2 font-bold pb-lg">Stay in touch</h3>

            <p className={`2 font-sans mr-3xl type-preset-6  mb-md`}>
            Sign up for Nava’s newsletter to find out about career opportunities, new partnerships, and news from the broader civic tech community.
            </p>
          </div>
          <div className="w-full md:w-1/2 pt-md">
          <iframe name="dummyframe" id="dummyframe" className="hidden"></iframe>
            <form
              action=""
              target="dummyframe"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
            >
              <label htmlFor="email">Email</label>
              <div id="mc_embed_signup" className="flex gap-md w-full">
                <input
                 onChange={handleChange}
                  type="email"
                  name="EMAIL"
                  id="email"
                  placeholder="Your email address"
                  className={`required email text-black w-full p-md rounded-sm`}
                />
                <div hidden={true}><input type="hidden" name="tags" value="12593337" /> </div>
               
                <div className="clear">
                  <FormInputButton
                    value="Sign up"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    onClick={handleSubmit}
                  />
                </div>
              </div>
              <div id="response">
                  {hasError && <div
                    className="text-red-400"
                    id="error-response"
                  > Error submitting form</div> } 
                 {hasCompleted && <div
                    className="response"
                    id="mce-success-response" > Thank you for subscribing</div>}
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
