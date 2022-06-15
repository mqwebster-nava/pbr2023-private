
const AuthorFiller =
  "https://images.ctfassets.net/t2ekr6eg3fr3/4qsxN30IaLkcwEHLUbfjjl/a35271a9d5c31f163703990126518886/author-filler.png?h=250";
import { useEffect, useState } from "react";

// TODO add error checking and a backup list to default to if there are errors detected with the airtable one
const apiKey = "keyhwtCt910pVmtUG";
const tableId ="tblpYB59rae1t15C5"

export default function EmployeeList() {
  const [teamMembers, setTeamMembers] = useState([]);
  async function getAirtableData (){
      // This gets a maximum of 100 entries per call, so 200 entries total. 
      // TODO make this into a loop so it will get all entries if more than 200
     
    const data = await fetch(
     
        `https://api.airtable.com/v0/appwGmpLTG1da8Ayy/${tableId}?api_key=${apiKey}`
      ).then((res) => res.json()).catch((error) => {console.error(error); });
    let records = data.records;
    let maxPages = 4, currentPage=1, offset=data.offset;
    while (offset && currentPage<maxPages){
      const data2 = await fetch(
        `https://api.airtable.com/v0/appwGmpLTG1da8Ayy/${tableId}?api_key=${apiKey}&offset=${offset}`
      ).then((res) => res.json()).catch((error) => {console.error(error); });
      records = records.concat(data2.records);
      if("offset" in data2) offset = data2.offset;
      else offset = null;
      currentPage+=1;
    }
    setTeamMembers(records);
  }
  
  useEffect(() => {
    getAirtableData();
    
  }, []);

  const DepartmentSection = ({ name, teamMembers, open=false }) => {
    return (
       < div className=" py-2xl">
         <hr/>
     <details open={open}>
   <summary className="type-preset-3 font-bold  list-none cursor-pointer">{name}</summary>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-xl pt-xl">
        {teamMembers.map((teamMember) => {
          const photo =
            "Photo" in teamMember.fields && teamMember.fields.Photo.length > 0
              ? teamMember.fields.Photo[0].url
              : AuthorFiller;
          return (
            <div className="" key={teamMember.fields.Name}>
              <img src={`${photo}`} className="w-full"></img>

              <h5 className="type-preset-7 font-bold  pt-sm">
                {teamMember.fields.Name}
              </h5>
              <p className="type-preset-7 text-gray-600">
                {teamMember.fields.Role}
              </p>
            </div>
          );
        })}
      </div>
      </details>
      </div>
    );
  };

  return (
    <div className="responsive-container py-2xl">
      <DepartmentSection
        name="Leadership"
        open={true}
        teamMembers={
          teamMembers &&
          teamMembers.filter((m) => m.fields.Department == "Executive")
        }
      />
      {[ "Business Development","Business Operations","Communications","Delivery Operations","Design and Research", "Engineering", "People Operations", "Product","Project Management", "Program Delivery","Recruiting"].map((name)=>
      <DepartmentSection
        key={name}
        name={name}
        teamMembers={
          teamMembers &&
          teamMembers.filter((m) => m.fields.Department == name)
        }
      />)}
    </div>
  );
}
