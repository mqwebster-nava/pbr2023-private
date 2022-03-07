import PlaceholderPageHeader from "components/row/Placeholder/PageHeader";

export default function Contact() {
  return (
    <>
      <PlaceholderPageHeader title={"Let's Talk"} subtitle={""} />

      <section
        id="{{ section.title | slugify }}"
        className="l-container u-margin-bottom--sm u-padding-x--2 u-margin-top--sm"
      >
        <form action="https://formspree.io/f/xknpbovg" method="POST">
          <label htmlFor="name">Name</label>
          <input
            className="c-contact--input"
            type="text"
            id="name"
            name="name"
            required
          />
          <label htmlFor="mail">Email</label>
          <input
            className="c-contact--input"
            type="email"
            id="mail"
            name="reply_mail"
            required
          />

          <label htmlFor="msg">Message</label>
          <textarea
            rows={7}
            className="textarea c-contact--input"
            id="msg"
            name="user_message"
            required
          ></textarea>

          <input className="button" type="submit" value="Submit" />
        </form>
      </section>
    </>
  );
}
