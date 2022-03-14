import PlaceholderPageHeader from "components/blocks/PageHeader/PageHeader";

export default function Contact() {
  return (
    <>
      <PlaceholderPageHeader
        title={"Let's Talk"}
        subtitle={"[Placeholder text]"}
      />

      <section className="px-3xl xl:px-0 xl:mx-auto xl:max-w-screen-lg my-2xl font-sans">
        <form action="https://formspree.io/f/xknpbovg" method="POST">
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <input
              className="c-contact--input"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div>
            <label htmlFor="mail">Email</label>
            <br />
            <input
              className="c-contact--input"
              type="email"
              id="mail"
              name="reply_mail"
              required
            />
          </div>
          <div>
            <label htmlFor="msg">Message</label>
            <br />
            <textarea
              rows={7}
              className="textarea c-contact--input"
              id="msg"
              name="user_message"
              required
            ></textarea>
          </div>
          <input className="button" type="submit" value="Submit" />
        </form>
      </section>
    </>
  );
}
