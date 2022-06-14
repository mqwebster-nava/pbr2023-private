import {
  overview,
  categories,
  race,
  gender,
  additionalIdentities,
} from "../lib/data/dei_2021";
import { getMarkdownByFilename } from "../lib/markdown";
import {
  ReportHeaderNavy,
  PercentBarChart,
  ReportContent,
  ResourceGroups,
  PercentSquareChart,
  PercentSquareChartFixed,
} from "components/blocks";
import React from "react";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import { getPageDataFromContentful } from "lib/api";
import { PageInterface } from "shared_interfaces/page_interface";

interface DEIPageInterface {
  page: PageInterface;
  reportData: any;
}

export default function DEI({ page, reportData }: DEIPageInterface) {
  const { overview, categories, race, gender, additionalIdentities, content } =
    reportData;
  const raceKey = "race";
  const raceFilters = createFilters(raceKey, race.statistics[0], categories);

  const genderKey = "gender";
  const genderFilters = createFilters(
    genderKey,
    gender.statistics[0],
    categories
  );

  return (
    <PageTemplate {...page}>
      <section className="bg-sage-50 py-4xl">
        <div className="responsive-container">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
            <div className="w-full">
              <p className="type-preset-5 text-sage-dark">{content.lead}</p>
              <ReportContent content={content.introduction} />
            </div>
            <img
              src="/images/dei/side_illustration.png"
              width="138px"
              className="max-h-[450px] md:scale-[1.4]"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="bg-sage-50 py-4xl">
        <div className="responsive-container">
          <ReportContent content={content.overview} />
          <PercentBarChart
            description="How we're doing in 2021"
            graphs={overview}
          />
        </div>
      </section>
      <section className="bg-white">
        <div className="responsive-container py-3xl">
          <ReportContent content={content.body} />
        </div>
        <PercentSquareChart
          title={race.title}
          content={race.content}
          stats={race.statistics}
          dataKey={raceKey}
          dataFilters={raceFilters}
          checkbox={{
            value: "multiRacial",
            label: "Two or more races selected",
          }}
          context={[race.selfReported, race.noAnswer]}
        />
        <PercentSquareChart
          title={gender.title}
          content={gender.content}
          stats={gender.statistics}
          dataKey={genderKey}
          dataFilters={genderFilters}
          context={[gender.selfReported, gender.noAnswer]}
          theme="gold"
        />
        <PercentSquareChartFixed
          title={additionalIdentities.title}
          stats={additionalIdentities.statistics}
          theme="purple"
        />
      </section>

      <section className="bg-sage-50">
        <div className="responsive-container py-3xl">
          <ReportContent content={content.resources.introduction} />
          <ResourceGroups groups={content.resources.groups} />
        </div>
      </section>
    </PageTemplate>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const content = getMarkdownByFilename("dei", 2021);

  const res: PageInterface = await getPageDataFromContentful({
    slug: "/dei",
    preview: preview,
  });
  return {
    props: {
      page: res,
      reportData: {
        overview,
        categories,
        race,
        gender,
        additionalIdentities,
        content,
      },
    },
  };
}

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

