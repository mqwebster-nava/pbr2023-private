import axios from "axios";
import { useEffect, useState } from "react";

//https://www.digitalocean.com/community/tutorials/react-axios-react
import AnchorLink from "components/atom/AnchorLink/AnchorLink";
import { LinkText } from "components/atom/LinkText/LinkText";
import { PageInterface } from "shared_interfaces/page_interface";
import { getPageDataFromContentful } from "lib/api";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
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
  location
}
interface JobGroupInterface {
  title: string;
  postings: Array<JobPostingInterface>;
}

export default function OpenRoles(props:PageInterface) {
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
              location: posting.categories.location
            };
          }),
        };
      });
      setDepartments(deps);
    });
  }, []);

const DepartmentAnchors = () => {
  let groups = [departments.slice(0,3), departments.slice(3,6), departments.slice(6)]
  return (<div className="flex py-md">
   
   { groups.map((deps)=>(
   <div className="w-1/3">
     {deps.map((d)=>(
      <p className={`font-sans text-sage-900 hover:text-sage-500 pb-md`}>
            <AnchorLink href={`#${d.title}`}>{d.title} ({d.postings.length})</AnchorLink>
          </p>
        ))
     }
      </div>)
    )}
  </div>)
}

  return (
    <PageTemplate {...props}>
     <div className="responsive-container py-2xl min-h-screen">
     <h3 className="type-preset-3 font-bold py-md">All open roles</h3>
     <DepartmentAnchors/>
     <div className= "hidden md:grid grid-cols-12 pt-4xl pb-sm">
     <div className="col-span-4 uppercase type-preset-7">
       Team
      </div>
      <div className="col-span-5 uppercase type-preset-7">
        Role
      </div>
      <div className="col-span-3 uppercase type-preset-7">
        Details
      </div>
      </div>
   
      {departments.map((d) => {
        return (
          <a id={`${d.title}`}>
            <hr/>
            <div className= "md:grid grid-cols-12">

              <div className="col-span-4">
            <h2 className="font-sans type-preset-4 font-bold py-md pr-sm">{d.title}</h2>
            </div>
            <div className="col-span-8">

            {d.postings.map((posting, i) => {
              return (
                <>
                {i!=0 && <hr/>}
                <div className="md:grid grid-cols-8">
                
                <div className="col-span-5 type-preset-5 font-sans py-md pr-sm" key={`${posting.id}`} >
                  <LinkText href={`${posting.hostedUrl}`} variant="underlined">{posting.title}</LinkText>
                </div>
                <div className=" col-span-3 type-preset-7 font-sans py-md">
                  <p className="pb-sm"><b>Compensation:</b> up to $160,000 DOE</p>
                  <p><b>Location: </b>{posting.location} </p>
                </div>
                </div>
                </>
              );
            })}
            </div>
           
            </div>
            <div className="py-md"></div>
          </a>
        );
      })}
    </div>
    </PageTemplate>
  );
}


export async function getStaticProps({ params, preview = false }) {
  const res: PageInterface = 
    await getPageDataFromContentful({
      slug:"/", 
      preview: preview,
    });
  return {
    props: res,
  };
}