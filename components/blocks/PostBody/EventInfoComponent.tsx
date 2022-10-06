import { getEventDateStr, isDateAfterNow, slugify } from "utils/utils";
import { LinkText } from "components/atom/LinkText/LinkText";
import React from "react";
import { Button } from "components/atom";
import { EventInfo } from "shared_interfaces/post_interface";

interface EventInfoComponentProps {
  date:string;
  eventInfo:EventInfo;
  contentTags: Array<string>;
}

const EventInfoComponent = ({
  date,
  eventInfo,
  contentTags,
}: EventInfoComponentProps) => {
  return (
    <div className="type-preset-7">
      <div className="font-sans md:block flex justify-between mb-lg">
        {date && <div>
          <h3 className="font-bold">Event Date</h3>
          <p className="font-sans pb-md">{getEventDateStr(eventInfo.eventTime ?? date)}</p>
          <div></div>
        </div> }
        {eventInfo.location && <div>
          <h3 className="font-bold">Location</h3>
          <p className="font-sans pb-md">{eventInfo.location}</p>
          <div></div>
        </div> }

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
        <Button href={eventInfo.registrationLink} variant={"outlined"}>
          Register
        </Button>
      }
      </div>
    </div>
  );
};

export default EventInfoComponent;
