import { getEventDateStr, isDateAfterNow, slugify } from "utils/utils";
import { LinkText } from "components/atom/LinkText/LinkText";
import React from "react";
import { Button } from "components/atom";

interface EventInfoComponentProps {
  date: string;
  registrationLink: string;
  contentTags: Array<string>;
}

const EventInfoComponent = ({
  date,
  registrationLink,
  contentTags,
}: EventInfoComponentProps) => {
  return (
    <div className="type-preset-7">
      <div className="font-sans md:block flex justify-between mb-lg">
        <div>
          {/* TODO update Event date string to include time of day */}
          <h3 className="font-bold">Event Date</h3>
          <p className="font-sans pb-md">{getEventDateStr(date)}</p>
          <div></div>
        </div>
        <div className="pb-xl">
        {contentTags &&<h3 className="font-bold">Tags</h3>}
          {contentTags &&
            contentTags.map((tag) => {
              return (
                <p id={`${tag}`} key={tag}>
                  <LinkText
                    href={`/tags/${slugify(tag)}`}
                    variant={"underlined"}
                  >
                    {tag}
                  </LinkText>
                </p>
              );
            })}
        </div>
        { isDateAfterNow(date) &&
        <Button href={registrationLink} variant={"outlined"}>
          Register
        </Button>
      }
      </div>
    </div>
  );
};

export default EventInfoComponent;
