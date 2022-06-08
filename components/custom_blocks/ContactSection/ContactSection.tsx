import { LinkText } from "components/atom";
import FormInputButton from "components/atom/Button/FormInputButton";

const AddressBlock = ({ title, addrLine1, addrLine2, number }) => {
  return (
    <div className="py-xl">
      <b>{title}</b> <br />
      {addrLine1} <br />
      {addrLine2}
      <br />
      {number}
    </div>
  );
};

const ContactSection = () => {


  const submitForm=()=>{

  }
  return (
    <section className="responsive-container flex flex-col md:flex-row py-3xl">
      <div className="w-full md:w-3/4 pr-0 md:pr-5xl">
        <h3 className="type-preset-4 font-bold">
          Tell us about your agency, project, challenges, or ideas. We’ll get
          back to you as soon as possible.
        </h3>
        <form action="https://formspree.io/f/xknpbovg" method="POST">
        
          <div className="py-md">
            <label className=" type-preset-7 pb-sm" htmlFor="name">
              Name
            </label>
            <br />
            <input
              className="border border-gray-900 p-md w-full"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="py-md">
            <label className="type-preset-7 pb-sm" htmlFor="mail">
              Email
            </label>
            <br />
            <input
              className="border border-gray-900 p-md w-full"
              type="email"
              id="mail"
              name="reply_mail"
              required
            />
          </div>
          <div>
            <label className={" type-preset-7 pb-sm"} htmlFor="Message">
              Message
            </label>
            <br />
            <textarea
              rows={7}
              className="border border-gray-900 w-full"
              id="Message"
              name="user_message"
              required
            ></textarea>
          </div>
          <div className="pt-sm">
            <FormInputButton value={"Send"} name={"send"} id={"send"} onClick={submitForm} />
          </div>
        </form>
      </div>
      <div className="w-full md:w-1/4 pt-2xl md:pt-0">
        <p className="type-preset-5 font-black">Our Offices</p>
        <AddressBlock
          title={"Washington D.C"}
          addrLine1={"1445 New York Ave, NW, Suite 300"}
          addrLine2={"Washington, DC 20005"}
          number={"123-456-7680"}
        />
        <AddressBlock
          title={"San Francisco"}
          addrLine1={"1445 New York Ave, NW, Suite 300"}
          addrLine2={"Washington, DC 20005"}
          number={"123-456-7680"}
        />
        <AddressBlock
          title={"New York City"}
          addrLine1={"1445 New York Ave, NW, Suite 300"}
          addrLine2={"Washington, DC 20005"}
          number={"123-456-7680"}
        />
        <p className="type-preset-5 font-black">Follow Us</p>
        <div className="py-sm">
          <LinkText href={"/"} variant={"underlined"}>
            Twitter
          </LinkText>{" "}
        </div>
        <div className="py-sm">
          {" "}
          <LinkText href={"/"} variant={"underlined"}>
            LinkedIn
          </LinkText>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
/* <div className="py-md">
            <label className="uppercase type-preset-7 pb-sm" htmlFor="reason">
              Reason
            </label>
            <br />
            <input
              className="border border-gray-900 p-md w-full"
              type="text"
              id="reason"
              name="reason"
              required
            />
          </div> */