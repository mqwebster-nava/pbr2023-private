/*
In the open positions page, we are getting Nava's open positions from Lever's API,
since all the roles are updated there.

We use axios to call the api at page load and display them in groupings.

*/

import axios from "axios";
import React, { useEffect, useState } from "react";

//https://www.digitalocean.com/community/tutorials/react-axios-react
import { LinkText } from "components/atom/LinkText/LinkText";
import { slugify } from "utils/utils";
import HorizontalLine from "components/atom/HorizontalLine/HorizontalLine";

interface JobPostingInterface {
  id: string;
  applyUrl: string;
  hostedUrl: string;
  title: string;
  location: string;
}
interface JobGroupInterface {
  title: string;
  postings: Array<JobPostingInterface>;
}

export default function OpenRolesComponent() {
  const leverURL = "https://api.lever.co/v0/postings/nava?mode=json&group=team";
  const [departments, setDepartments] = useState<Array<JobGroupInterface>>([]);

  // TODO replace "Open to any office location/Remote" with "Remote"
  useEffect(() => {
    axios.get(leverURL).then((res) => {
      const deps: Array<JobGroupInterface> = res.data.map((dep) => {
        return {
          title: dep.title,
          postings: dep.postings.map((posting) => {
            let location = posting.categories.location ?? "Remote";
            if (location == "Open to any office location/Remote")
              location = "Remote";
            return {
              id: posting.id,
              title: posting.text,
              applyUrl: posting.applyUrl,
              hostedUrl: posting.hostedUrl,
              location: location,
            };
          }),
        };
      });
      setDepartments(deps);
    });
  }, []);
  const getAnchorMenuAriaLabel = (title, postingsLength) => {
    let roleStr = postingsLength > 1 ? "roles" : "role";
    return `${title}, ${postingsLength} open ${roleStr}, skip to section`;
  };

  const DepartmentAnchors = () => {
    let departmentsLen = Math.floor(departments.length / 3);
    let groups = [
      departments.slice(0, departmentsLen),
      departments.slice(departmentsLen, 2 * departmentsLen),
      departments.slice(2 * departmentsLen),
    ];
    return (
      <>
        <details className="block md:hidden py-md">
          <summary
            className="pb-sm"
            aria-label={"Open roles by team, dropdown menu"}
          >
            Show Teams
          </summary>
          <ul>
            {departments.map((d, k) => (
              <li
                className={`pb-md`}
                key={`${d.title} nav ${k}`}
              >
                <LinkText
                  variant="default"
                  color="sage"
                  href={`#${slugify(d.title)}`}
                  ariaLabel={getAnchorMenuAriaLabel(d.title, d.postings.length)}
                >
                  {d.title} ({d.postings.length})
                </LinkText>
              </li>
            ))}
          </ul>
        </details>
        <ul
          className="hidden md:flex py-md"
          aria-label={",Open roles by team,"}
        >
          {groups.map((deps, i) => (
            <div className="w-1/3" key={i}>
              {deps.map((d) => {
                return (
                  <li
                   
                    key={`nav ${d.title} ${i}`}
                    className={`pb-md`}
                  >
                    <LinkText
                      variant="default"
                      color="sage"
                      href={`#${slugify(d.title)}`}
                      ariaLabel={getAnchorMenuAriaLabel(
                        d.title,
                        d.postings.length
                      )}
                    >
                      {d.title} ({d.postings.length})
                    </LinkText>
                  </li>
                );
              })}
            </div>
          ))}
        </ul>
      </>
    );
  };

  return (
    <div className="responsive-container py-2xl min-h-screen">
      <h3 className="type-preset-3 font-bold py-md">All open roles</h3>
      <DepartmentAnchors />
      <div className="hidden md:grid grid-cols-12 pt-4xl pb-sm gap-x-md md:gap-x-2xl">
        <div className="col-span-4 type-preset-7" aria-hidden={true}>
          Team
        </div>
        <div className="col-span-5 type-preset-7" aria-hidden={true}>
          Role
        </div>
        <div className="col-span-3  type-preset-7" aria-hidden={true}>
          Details
        </div>
      </div>

      {departments.map((d, j) => {
        if (d.title == "Software") d.title = "Engineering";
        return (
          <div id={`${slugify(d.title)}`} key={`${d.title} ${j} section`}>
            <HorizontalLine variant="dark" hideFromVoiceOver={true} />
            <div className="md:grid grid-cols-12 gap-x-md md:gap-x-2xl">
              <div className="col-span-4">
                <h2
                  className="font-sans type-preset-4 font-bold py-md"
                  aria-label={`Team: ${d.title}`}
                >
                  {d.title}
                </h2>
              </div>
              <ul className="col-span-8">
                {d.postings.map((posting, i) => {
                  return (
                    <li key={`${d.title} role ${i}`}>
                      {i != 0 && (
                        <HorizontalLine
                          variant="light"
                          hideFromVoiceOver={true}
                        />
                      )}
                      <div className="md:grid grid-cols-8 gap-x-2xl">
                        <div className="col-span-5 type-preset-5 font-sans py-md ">
                          <LinkText
                            href={`${posting.hostedUrl}`}
                            variant="underlined"
                            ariaLabel={`Role: ${posting.title}`}
                          >
                            {posting.title}
                          </LinkText>
                        </div>
                        <div className=" col-span-3 type-preset-7 font-sans md:pt-md pt-0 pb-md">
                          <p>
                            <b>Location: </b>
                            {posting.location}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="py-md"></div>
          </div>
        );
      })}
    </div>
  );
}
