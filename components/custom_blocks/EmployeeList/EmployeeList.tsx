
const AuthorFiller =
  "https://images.ctfassets.net/t2ekr6eg3fr3/4qsxN30IaLkcwEHLUbfjjl/a35271a9d5c31f163703990126518886/author-filler.png?h=250";
import { useEffect, useState } from "react";

// TODO add error checking and a backup list to default to if there are errors detected with the airtable one

export default function EmployeeList() {
  const [teamMembers, setTeamMembers] = useState([]);
  async function getAirtableData (){
      // This gets a maximum of 100 entries per call, so 200 entries total. 
      // TODO make this into a loop so it will get all entries if more than 200
    const data = await fetch(
        "https://api.airtable.com/v0/appwGmpLTG1da8Ayy/tblvCwzJud7MCL9hW?api_key=keyhwtCt910pVmtUG"
      ).then((res) => res.json()).catch((error) => {console.error(error); });
    const data2 = await fetch(
        `https://api.airtable.com/v0/appwGmpLTG1da8Ayy/tblvCwzJud7MCL9hW?api_key=keyhwtCt910pVmtUG&offset=${data.offset}`
      ).then((res) => res.json()).catch((error) => {console.error(error); });
      setTeamMembers(data.records.concat(data2.records));
  }
  
  useEffect(() => {
    getAirtableData();
    
  }, []);

  const DepartmentSection = ({ name, teamMembers, open=false }) => {
    return (
       < div className=" responsive-container py-xl">
     <details open={open}>
   <summary className="type-preset-3 font-bold">{name}</summary>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-xl pt-xl">
        {teamMembers.map((teamMember) => {
          const photo =
            "Photo" in teamMember.fields && teamMember.fields.Photo.length > 0
              ? teamMember.fields.Photo[0].url
              : AuthorFiller;
          return (
            <div className="" key={teamMember.fields.Name}>
              <img src={`${photo}`} className="w-full"></img>

              <h5 className="type-preset-7 font-bold">
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
    <>
      <DepartmentSection
        name="Leadership"
        open={true}
        teamMembers={
          teamMembers &&
          teamMembers.filter((m) => m.fields.Department == "Leadership")
        }
      />
       <DepartmentSection
        name="Engineering"
        teamMembers={
          teamMembers &&
          teamMembers.filter((m) => m.fields.Department == "Engineering")
        }
      />
      <DepartmentSection
        name="Unlabeled"
        teamMembers={
          teamMembers &&
          teamMembers.filter((m) => m.fields.Department == null)
        }
      />
    </>
  );
}
