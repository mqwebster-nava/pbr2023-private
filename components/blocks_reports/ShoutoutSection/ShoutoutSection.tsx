
import { ReportThemeInterface } from "shared_interfaces/report_theme_interface";
import ResponsiveContentContainer from "components/blocks/ResponsiveContentContainer/ResponsiveContentContainer";

const ShoutoutSection = ({title, introduction, })=>{
    return <div></div>
}



// export interface ReportShoutoutSectionInterface {
//   title: string;
//   introduction: string;
//   lists: Array<object>;
// }



// const ReportShoutoutSection: React.FC<ReportShoutoutSectionInterface> = ({
//   title,
//   introduction,
//   lists = null,
// }) => {
//   const hasListOfNames = lists && lists.length > 0;
//   return (
//     <section >
//       <ResponsiveContentContainer padding={"py-2xl"} alignment="center">
//       <h2 className="type-preset-3 font-bold">{title}</h2>
//       <div className="pb-xl">
//         <ReportContent content={introduction} theme={theme} isGreenBG={false} />
//       </div>
//       {hasListOfNames && (
//         <Details summary="See all shoutouts">
//           {lists.map((list, index) => (
//             <ReportShoutoutColumns
//               key={`shoutouts_${index}`}
//               list={list}
//               theme={theme}
//             />
//           ))}
//         </Details>
//       )}
//       </ResponsiveContentContainer>
//     </section>
//   );
// };

 export default ShoutoutSection;
