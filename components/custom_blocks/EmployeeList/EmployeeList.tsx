
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./EmployeeList.module.css";
import AuthorFiller from "/public/images/Missing images on our People V02.svg"
import SlideDown from "react-slidedown";
/*
Moved to the backend so employee list will load faster
*/

export interface EmployeeListInterface {
  employeeData: any
}


export default function EmployeeList({employeeData}:EmployeeListInterface ) {
  
  const [teamMembers, setTeamMembers] = useState(employeeData);

  const DepartmentSection = ({ name, teamMembers, open=false }) => {
    return (
       < div className=" py-2xl">
         <hr/>
     <details className={`${styles.details}`} open={open}>
   <summary className="type-preset-3 font-bold  list-none cursor-pointer">
   <div className="flex flex-row justify-between items-center">
              <h3 className=" text-gray-900 pr-sm font-sans font-bold ">
                {name}
              </h3>
                <div className={`chevron`}>
                  <svg
                    width="20"
                    height="11"
                    viewBox="0 0 20 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 1L10 10L1 1"
                      stroke="#111827"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                </div>
     </summary>
      <div className="">
        <SlideDown className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-md md:gap-2xl pt-xl">
        {teamMembers.map((teamMember) => {
          const photo =
            "Photo" in teamMember.fields && teamMember.fields.Photo.length > 0
              ? teamMember.fields.Photo[0].url
              : AuthorFiller.src;
          return (
            <div className="" key={teamMember.fields.Name}>
              <Image
              src={photo} 
              objectFit={"cover"}
              width={400}
              height={400}
              className="w-full h-auto aspect-square object-cover bg-navy-50"></Image>

              <h5 className="type-preset-7 font-bold  pt-sm">
                {teamMember.fields.Name}
              </h5>
              <p className="type-preset-7 text-gray-700">
                {teamMember.fields.Role}
              </p>
            </div>
          );
        })}
        </SlideDown>
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
          teamMembers.filter((m) => m.fields.Department == "Executive").sort((a,b)=>a.fields.Name.localeCompare(b.fields.Name))
        }
      />
      {[ "Business Development","Business Operations","Communications","Delivery Operations","Design and Research", "Engineering", "People Operations", "Product","Project Management", "Program Delivery","Recruiting"].map((name)=>
      <DepartmentSection
        key={name}
        name={name}
        teamMembers={
          teamMembers &&
          teamMembers.filter((m) => m.fields.Department == name).sort((a,b)=>a.fields.Name.localeCompare(b.fields.Name))
        }
      />)}
    </div>
  );
}

// TODO add error checking and a backup list to default to if there are errors detected with the airtable one
//const apiKey = "keyhwtCt910pVmtUG";
//const tableId ="tblpYB59rae1t15C5"

  // async function getAirtableData (){
  //     // This gets a maximum of 100 entries per call, so 200 entries total. 
  //     // TODO make this into a loop so it will get all entries if more than 200
     
  //   const data = await fetch(
     
  //       `https://api.airtable.com/v0/appwGmpLTG1da8Ayy/${tableId}?api_key=${apiKey}`
  //     ).then((res) => res.json()).catch((error) => {console.error(error); });
  //   let records = data.records;
  //   let maxPages = 4, currentPage=1, offset=data.offset;
  //   while (offset && currentPage<maxPages){
  //     const data2 = await fetch(
  //       `https://api.airtable.com/v0/appwGmpLTG1da8Ayy/${tableId}?api_key=${apiKey}&offset=${offset}`
  //     ).then((res) => res.json()).catch((error) => {console.error(error); });
  //     records = records.concat(data2.records);
  //     if("offset" in data2) offset = data2.offset;
  //     else offset = null;
  //     currentPage+=1;
  //   }
  //   setTeamMembers(records);
  // }
  
  // useEffect(() => {
  //   getAirtableData();
    
  // }, []);
