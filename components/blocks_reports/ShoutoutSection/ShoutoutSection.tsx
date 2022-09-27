import { ReportThemeInterface } from "shared_interfaces/report_theme_interface";
import ResponsiveContentContainer from "components/blocks/ResponsiveContentContainer/ResponsiveContentContainer";
import { Details } from "components/atom";
import PostContent from "components/blocks/PostBody/PostContent";
import { Shoutout2019Data } from "./Shoutout2019Data";
// export interface ReportShoutoutSectionInterface {
//   title: string;
//   introduction: string;
//   lists: Array<object>;
// }

const ShoutoutSection = ({ title, type, richBody }) => {
  return (
    <section>
      <ResponsiveContentContainer padding={"py-2xl"} alignment="center">
        <h2 className="type-preset-3 font-bold">{title}</h2>
        <div className="pb-xl">
          <PostContent docData={richBody.json} docLinks={richBody.links} />
        </div>
        {type == "Shoutout 2019" && (
          <Details summary="See all shoutouts">
            {Shoutout2019Data.map((list, index) => (
              <ReportShoutoutColumns key={`shoutouts_${index}`} list={list} />
            ))}
          </Details>
        )}
      </ResponsiveContentContainer>
    </section>
  );
};

const ReportShoutoutColumns = ({ list }) => {
  const { title, columns } = list;
  columns.map((c)=>{
    console.log(c)
  })
  return (
    <>
      <h3 className="type-preset-4 font-bold py-md">{title}</h3>
      <div className="grid grid-cols-3">
         {columns.map((column, index) => (
          <ul  key={`title-col-${index}`} className={`list-disc ml-xl`}>
            { column.map((name, i)=><li key={`${name}-${i}`}>{name}</li>)}
          </ul>
        ))} 
      </div>
    </>
  );
};

export default ShoutoutSection;

