import axios from "axios";
import { useEffect, useState } from "react";
//https://www.digitalocean.com/community/tutorials/react-axios-react

/*
In the open positions page, we are getting Nava's open positions from Lever's API,
since all the roles are updated there.

We use axios to call the api at page load and display them in groupings.

*/
interface JobPostingInterface {
  id: String;
  applyUrl: String;
  hostedUrl: String;
  title: String;
}
interface JobGroupInterface {
  title: String;
  postings: Array<JobPostingInterface>;
}

export default function OpenRoles() {
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
              hostedUrl:posting.hostedUrl,
            };
          }),
        };
      });
      setDepartments(deps);
    });
  }, []);

  return (
    <div className="mx-3xl my-2xl">
      <h1>Careers / Open Positions </h1>
      {departments.map((d) => {
        return (
          <div>
            <h2>{d.title}</h2>
            {d.postings.map((posting) => {
              return (
                <div key={`${posting.id}`}>
                  <p>{posting.title}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
