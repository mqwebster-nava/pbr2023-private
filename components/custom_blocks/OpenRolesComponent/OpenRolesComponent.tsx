import axios from "axios";
import { useEffect, useState } from "react";

//https://www.digitalocean.com/community/tutorials/react-axios-react
import AnchorLink from "components/atom/AnchorLink/AnchorLink";
import { LinkText } from "components/atom/LinkText/LinkText";
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

  useEffect(() => {
    axios.get(leverURL).then((res) => {
      const deps: Array<JobGroupInterface> = res.data.map((dep) => {
        return {
          title: dep.title,

          postings: dep.postings.map((posting) => {
            return {
              id: posting.id,
              title: posting.text,
              applyUrl: posting.applyUrl,
              hostedUrl: posting.hostedUrl,
              location: posting.categories.location ?? "Remote",
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
          <summary>Show Teams</summary>

          {departments.map((d, k) => (
            <p className={`font-sans text-sage-900 hover:text-sage-500 pb-md`} key={`${d.title} nav ${k}`}>
              <AnchorLink href={`#${d.title}`}>
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
                key={d.title}
                  className={`font-sans text-sage-900 hover:text-sage-500 pb-md`}
                >
                  <AnchorLink href={`nav #${d.title} ${i}`}>
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
      <div className="hidden md:grid grid-cols-12 pt-4xl pb-sm">
        <div className="col-span-4 type-preset-7">Team</div>
        <div className="col-span-5 type-preset-7">Role</div>
        <div className="col-span-3  type-preset-7">Details</div>
      </div>

      {departments.map((d,j) => {
        return (
          <div id={`${d.title}`} key={`${d.title} ${j} section`}>
            <hr />
            <div className="md:grid grid-cols-12">
              <div className="col-span-4">
                <h2 className="font-sans type-preset-4 font-bold py-md pr-sm">
                  {d.title}
                </h2>
              </div>
              <div className="col-span-8">
                {d.postings.map((posting, i) => {
                  return (
                    <div key={`${d.title} role ${i}`}>
                      {i != 0 && <hr />}
                      <div className="md:grid grid-cols-8" >
                        <div
                          className="col-span-5 type-preset-5 font-sans py-md pr-sm"
                          
                        >
                          <LinkText
                            href={`${posting.hostedUrl}`}
                            variant="underlined"
                          >
                            {posting.title}
                          </LinkText>
                        </div>
                        <div className=" col-span-3 type-preset-7 font-sans py-md">
                          <p className="pb-sm">
                            <b>Compensation:</b> up to $160,000 DOE
                          </p>
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
