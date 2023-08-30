import React from "react";
import ReportMenu from "./ReportNavbar/ReportMenu";
import FormInputButton from "components/atom/FormInputButton/FormInputButton";
import { LinkText } from "components/atom/LinkText/LinkText";

const ReportFooter2022 = ({
  reportSections,
  contentBlocks,
  activeSection,
  setActiveSection,
  activeStory,
  setActiveStory,
}) => {
  let currentYear = new Date().getFullYear();
  const SignupBrand = "/images/Sign-up-Brand-pattern-V02.svg";

  const menuItemClick = (e) => {
    let clickedItem = reportSections.find(
      (section) => section.anchor === e.target.dataset.refid
    );

    if (clickedItem.type === "ReportIllustrationOverlaySubsection") {
      setActiveStory(null);

      setActiveSection(clickedItem.anchor);
    } else if (clickedItem.type === "story") {
      setActiveSection(clickedItem.parentAnchor);

      setActiveStory(clickedItem.anchor);

      setTimeout(() => {
        window.scrollTo({
          top: document.getElementById(clickedItem.anchor)?.offsetTop,
          behavior: "smooth",
        });
      }, 50);
    }
  };

  return (
    <footer
      className={`flex flex-col divide-y-[1px] divide-gray-900 w-full h-full bg-gray-100 ${
        activeStory && `hidden`
      }`}
    >
      <div className="py-4xl">
        <ReportMenu
          activeSection={reportSections}
          contentBlocks={contentBlocks}
          onClick={(e) => menuItemClick(e)}
        />
      </div>

      <div className="py-2xl bg-gray-200">
        <div className="font-sans text-black">
          <div className="responsive-container w-full flex pb-2xl flex-col md:flex-row">
            <div className="w-full md:w-1/2 ">
              <h3 className="font-sans type-preset-6 font-bold pb-lg">
                Stay in touch
              </h3>
              <p className={`2 font-sans mr-3xl type-preset-6  mb-md`}>
                Sign up for our newsletter to find out about career
                opportunities, new partnerships, and news from the broader civic
                tech community.
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
                <input
                  type="hidden"
                  name="u"
                  value="c69eb1fd5475fa5122ef55965"
                />
                <input type="hidden" name="id" value="a994830182" />
                <input type="hidden" name="tags" value="12593337" />

                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <div
                  id="mc_embed_signup"
                  className="flex flex-col lg:flex-row gap-md w-full pt-sm md:pt-0"
                >
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
                      color=""
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="w-full border-t-[1px] border-gray-400 pt-2xl">
            <div
              className={
                "responsive-container flex items-center justify-between flex-col-reverse sm:flex-row"
              }
            >
              <p className="type-preset-8">
                {`© ${currentYear} Nava PBC. All rights reserved.`}
              </p>
              <div className="flex gap-2xl type-preset-7">
                <LinkText
                  href={"https://twitter.com/NavaPBC"}
                  variant={"default"}
                  color={"black"}
                  analyticsLabel={"footer"}
                >
                  {" "}
                  Twitter
                </LinkText>
                <LinkText
                  href={"https://www.linkedin.com/company/nava-pbc"}
                  variant={"default"}
                  color={"black"}
                  analyticsLabel={"footer"}
                >
                  LinkedIn
                </LinkText>
                <LinkText
                  href={
                    "https://www.youtube.com/channel/UClJmJSvy2G_7JPrjlr_taGg/featured"
                  }
                  variant={"default"}
                  color={"black"}
                  analyticsLabel={"footer"}
                >
                  {" "}
                  YouTube
                </LinkText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ReportFooter2022;
