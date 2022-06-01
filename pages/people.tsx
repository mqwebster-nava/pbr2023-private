import { getPageDataFromContentful } from "lib/api";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import { PageInterface } from "shared_interfaces/page_interface";
//https://docs.google.com/document/d/140sOP1bOThae4tYF-HXv2gh9v6PCZV8RQJrwo83yGZE/edit#

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function People(props: PageInterface) {
  const [teamMembers, setTeamMembers ]= useState([])
    useEffect(() => {
      fetch("https://api.airtable.com/v0/appwGmpLTG1da8Ayy/tblvCwzJud7MCL9hW?api_key=keyhwtCt910pVmtUG")
        .then((res) => res.json())
        .then((data) => {
          console.log(data.records);
          setTeamMembers(data.records);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  return props ? ( <PageTemplate {...props} >
    <div className=" responsive-container grid grid-cols-6">
      {teamMembers.map((teamMember)=>{

       return  <div className="bg-slate-300">
          <img src={`${teamMember.fields.Photo[0].url}`}></img>
          <h5 className="type-preset-7 font-bold">{teamMember.fields.Name}</h5>
          <p  className="type-preset-7 text-gray-600">{teamMember.fields.Role}</p>
        </div>
      })}
    </div>
  </PageTemplate>) : ( <div>Error</div>);
}

export async function getStaticProps({ params, preview = false }) {
  const res: PageInterface = await getPageDataFromContentful({
    slug:"/people", 
    preview: preview,
  });
  return {
    props: res,
  };
}
