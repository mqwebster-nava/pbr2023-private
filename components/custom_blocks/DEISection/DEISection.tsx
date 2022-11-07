import classNames from "classnames";
import PostContent from "components/blocks/PostBody/PostContent";
import ResponsiveContentContainer from "components/blocks/ResponsiveContentContainer/ResponsiveContentContainer";
import { PercentBarChart } from "./DEICharts/PercentBarChart";
import { PercentSquareChart } from "./DEICharts/PercentSquareChart";
import { PercentSquareChartFixed } from "./DEICharts/PercentSquareChartFixed";
import { ResourceGroups } from "./DEIResourceGroupBlock/ResourceGroups";


const DEISection = ({title, richBody, data, colorTheme}) => {

    const bg = classNames({
        "bg-gold-50": colorTheme=="gold",
        "bg-sage-50": colorTheme=="sage"
      })

    const getDataSections = () =>{
        const filtersData = data.find((sectionData)=>sectionData.type=="categories") ?? null;
        return data?.map((sectionData, i)=>{
            if(!("type" in sectionData))return null;
            if(sectionData.type == "groups") return<ResponsiveContentContainer alignment={"left"}  padding={"py-xl"}> <ResourceGroups groups={sectionData.groups} /></ResponsiveContentContainer>
            if(sectionData.type =="PercentBarChart") return <PercentBarChart key={`${i}`} description={sectionData.description} graphs={sectionData.graphs}/> 
            if(sectionData.type == "PercentSquareChart") 
            return <PercentSquareChart {...sectionData} 
            dataFilters={createFilters(
                sectionData.dataKey,
                sectionData.stats[0],
                filtersData.categories
              )}/>
             if(sectionData.type == "PercentSquareChartFixed") return <PercentSquareChartFixed title={sectionData.title} stats={sectionData.stats} theme={sectionData.theme??"purple"}/>
            return null;
        })
    }


    return (
    <div className={`${bg} pb-2xl`}>
         <ResponsiveContentContainer alignment={"left"}  padding={"py-xl"}>
        <div className="font-serif">
        {title && <h3 className={`font-sans type-preset-3 font-bold pb-lg`}>{title} </h3> }
            <PostContent docData={richBody.json} docLinks={richBody.links} />
        </div>
       
        </ResponsiveContentContainer>
        <div className="responsive-container">
        {getDataSections()}
        </div>
    </div>
    );
}



export default DEISection;


const createFilters = (dataKey, data, categories) => {
    const filterKeys = Object.keys(data).filter(
      (key) => !key.includes("_Multi") && !key.includes(dataKey)
    );
  
    const filters = filterKeys.map((key) => {
      return {
        id: key,
        text: categories[key].display,
        total: categories[key].total,
      };
    });
    return filters;
  };
  