/*
DEI Sections is a multi-purpose "Custom Block" that can display different data
- It uses the "Data" section of the Custom Block to pass in data for different chart types

*/

import classNames from "classnames";
import PostContent from "components/blocks/PostBody/PostContent";
import ResponsiveContentContainer from "components/blocks/ResponsiveContentContainer/ResponsiveContentContainer";
import { PercentBarChart } from "./DEICharts/PercentBarChart";
import { PercentBarChartYOY } from "./DEICharts/PercentBarChartYOY";
import { PercentSquareChart } from "./DEICharts/PercentSquareChart";
import { PercentSquareChartFixed } from "./DEICharts/PercentSquareChartFixed";
import { ResourceGroups } from "./DEIResourceGroupBlock/ResourceGroups";

const DEISection = ({ title, richBody, data, colorTheme, isBottomAndUnderFooter=false }) => {
  const bg = classNames({
    "bg-gold-50": colorTheme == "gold",
    "bg-sage-50": colorTheme == "sage",
    "bg-purple-50": colorTheme == "purple",
    "bg-plum-50": colorTheme == "plum",
    "bg-navy-50": colorTheme == "navy",
  });

  const getDataSections = () => {
  
    const filtersData =
      data.find((sectionData) => sectionData.type == "categories") ?? null;

    return data?.map((sectionData, i) => {
      if (!("type" in sectionData)) return null;
      if (sectionData.type == "groups")
        return (
          <ResponsiveContentContainer
            key={`dei-sec-${i}`}
            alignment={"left"}
            padding={"py-xl"}
          >
            <ResourceGroups groups={sectionData.groups} />
          </ResponsiveContentContainer>
        );
        if (sectionData.type == "PercentBarChartYOY")
        return (
          <div className="responsive-container" key={`dei-sec-${i}`}>
            <PercentBarChartYOY
              key={`${i}`}
              description={sectionData.description}
              graphs={sectionData.graphs}
              colorTheme={colorTheme}
            />
          </div>
        );
      
      if (sectionData.type == "PercentBarChart")
        return (
          <div className="responsive-container" key={`dei-sec-${i}`}>
            <PercentBarChart
              key={`${i}`}
              description={sectionData.description}
              graphs={sectionData.graphs}
            />
          </div>
        );
      if (sectionData.type == "PercentSquareChart")
        return (
          <PercentSquareChart
            key={`dei-sec-${i}`}
            {...sectionData}
            dataFilters={createFilters(
              sectionData.dataKey,
              sectionData.stats[0],
              filtersData.categories
            )}
          />
        );
      if (sectionData.type == "PercentSquareChartFixed")
        return (
          <PercentSquareChartFixed
            key={`dei-sec-${i}`}
            title={sectionData.title}
            stats={sectionData.stats}
            theme={sectionData.theme ?? "purple"}
          />
        );
      return null;
    });
  };

  return (
    <section className={`${bg} py-2xl relative`}>
      <ResponsiveContentContainer alignment={"left"} padding={"pb-xl"}>
        <div className="font-serif">
          {title && (
            <h2 className={`font-sans type-preset-3 font-bold pb-lg`}>
              {title}
            </h2>
          )}
          <PostContent docData={richBody.json} docLinks={richBody.links} />
        </div>
      </ResponsiveContentContainer>
      {getDataSections()}
      { isBottomAndUnderFooter &&
      <div className={`absolute left-0 right-0 -bottom-[200px] h-[200px] -z-20 ${bg}`}>
      </div>
     }
    </section>
  );
};

export default DEISection;

const createFilters = (dataKey, data, categories) => {
  const categoriesList = [];
  const order = ["employee", "Individual_contributor", "management", "Team_lead", "Manager", "Director", "VP_&_C_Suite"];

  order.forEach(key => {
    if( key in categories){
      categoriesList.push({
        id: key,
        text: categories[key].display,
        total: categories[key].total
      });
    }
  });
  return categoriesList;
};

