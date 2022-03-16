import axios from "axios";
import { useEffect, useState } from "react";
import {
  SectionHeader,
  ContentBlockLinkToPage,
  ContentBlockText,
  PlaceholderPageHeader,
  ContentBlockArticleList,
  Newsletter,
} from "components/blocks";
//https://www.digitalocean.com/community/tutorials/react-axios-react
import AnchorLink from "components/templates/PostTemplate/AnchorLink"
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
    
    <>
     <PlaceholderPageHeader
        title={"Open Roles"}
        subtitle={"Find the right opportunity to make a positive impact for you"}
      />
      <hr />
     <div className="responsive-container py-2xl min-h-screen">
      {departments.map((d) =>(
      <p className={`font-sans text-blue-500 hover:text-blue-900 `}>
            <AnchorLink href={`#${d.title}`}>{d.title} ({d.postings.length})</AnchorLink>
          </p>
          ))
      }
      
      {departments.map((d) => {
        return (
          <a id={`${d.title}`}>
            <h2 className="font-sans text-lg font-bold mt-lg">{d.title}</h2>
            <hr/>
            {d.postings.map((posting) => {
              return (
                <a key={`${posting.id}`} className="hover:text-indigo-400" href={`${posting.hostedUrl}`}>
                  <p className="font-sans py-md">{posting.title}</p>
                </a>
              );
            })}
            <div className="py-md"></div>
          </a>
        );
      })}
    </div>
    <Newsletter/>
    </>
  );
}