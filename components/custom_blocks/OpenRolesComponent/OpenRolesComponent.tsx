import axios from "axios";
import React, { useEffect, useState } from "react";

//https://www.digitalocean.com/community/tutorials/react-axios-react
import AnchorLink from "components/atom/AnchorLink/AnchorLink";
import { LinkText } from "components/atom/LinkText/LinkText";
import { slugify } from "utils/utils";
import HorizontalLine from "components/atom/HorizontalLine/HorizontalLine";
/*
In the open positions page, we are getting Nava's open positions from Lever's API,
since all the roles are updated there.

We use axios to call the api at page load and display them in groupings.

*/
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
            if(location=="Open to any office location/Remote") location="Remote";
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
          <summary className="pb-sm">Show Teams</summary>

          {departments.map((d, k) => (
            <p className={`font-sans text-sage-900 hover:text-sage-500 pb-md`} key={`${d.title} nav ${k}`}>
              <AnchorLink href={`#${slugify(d.title)}`}>
                {d.title} ({d.postings.length})
              </AnchorLink>
            </p>
          ))}
        </details>
        <div className="hidden md:flex py-md ">
          {groups.map((deps,i) => (
            <div className="w-1/3" key={i}>
              {deps.map((d) => (
                <p
                key={`nav ${d.title} ${i}`}
                  className={`font-sans text-sage-900 hover:text-sage-500 pb-md`}
                >
                  <AnchorLink href={`#${slugify(d.title)}`}>
                    {d.title} ({d.postings.length})
                  </AnchorLink>
                </p>
              ))}
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="responsive-container py-2xl min-h-screen">
      <h3 className="type-preset-3 font-bold py-md">All open roles</h3>
      <DepartmentAnchors />
      <div className="hidden md:grid grid-cols-12 pt-4xl pb-sm gap-x-md md:gap-x-2xl">
        <div className="col-span-4 type-preset-7">Team</div>
        <div className="col-span-5 type-preset-7">Role</div>
        <div className="col-span-3  type-preset-7">Details</div>
      </div>

      {departments.map((d,j) => {
        return (
          <div id={`${slugify(d.title)}`} key={`${d.title} ${j} section`}>
            <HorizontalLine variant="dark"/>
            <div className="md:grid grid-cols-12 gap-x-md md:gap-x-2xl">
              <div className="col-span-4">
                <h2 className="font-sans type-preset-4 font-bold py-md">
                  {d.title}
                </h2>
              </div>
              <div className="col-span-8">
                {d.postings.map((posting, i) => {
                  return (
                    <div key={`${d.title} role ${i}`}>
                      {i != 0 && <HorizontalLine variant="light"/>}
                      <div className="md:grid grid-cols-8 gap-x-2xl" >
                        <div
                          className="col-span-5 type-preset-5 font-sans py-md "
                        
                        >
                          <LinkText
                            href={`${posting.hostedUrl}`}
                            variant="underlined"
                          >
                            {posting.title}
                          </LinkText>
                        </div>
                        <div className=" col-span-3 type-preset-7 font-sans py-md">
                          <p>
                            <b>Location: </b>
                            {posting.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="py-md"></div>
          </div>
        );
      })}
    </div>
  );
}
