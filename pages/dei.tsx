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
  ResponsiveContainer,
  PercentSquareChartFixed,
} from "components/blocks";
import React from "react";

export const getStaticProps = async () => {
  const content = getMarkdownByFilename("dei", 2021);

  return {
    props: {
      overview,
      categories,
      race,
      gender,
      additionalIdentities,
      content,
    },
  };
};

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

export default function DEI({
  content,
  overview,
  categories,
  race,
  gender,
  additionalIdentities,
}) {
  const raceKey = "race";
  const raceFilters = createFilters(raceKey, race.statistics[0], categories);

  const genderKey = "gender";
  const genderFilters = createFilters(
    genderKey,
    gender.statistics[0],
    categories
  );

  return (
    <main>
      <ReportHeaderNavy title={content.title} />

      <section className="bg-sea-foam-base py-4xl">
        <ResponsiveContainer contentClass="mx-0">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
            <div className="w-full">
              <p className="type-preset-5 text-sage-dark">{content.lead}</p>
              <ReportContent content={content.introduction} />
            </div>
            <img
              src="/images/dei/side_illustration.png"
              width="138px"
              className="max-h-[450px] md:scale-[1.4]"
            />
          </div>
        </ResponsiveContainer>
      </section>

      <section className="bg-sea-foam-light py-4xl">
        <ResponsiveContainer contentClass="mx-0">
          <ReportContent content={content.overview} />
        </ResponsiveContainer>
        <PercentBarChart
          description="How we're doing in 2021"
          graphs={overview}
        />
      </section>

      <section className="bg-white">
        <ResponsiveContainer containerClass="py-3xl" contentClass="mx-0">
          <ReportContent content={content.body} />
        </ResponsiveContainer>
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
          theme="orange"
        />
        <PercentSquareChartFixed
          title={additionalIdentities.title}
          stats={additionalIdentities.statistics}
          theme="blue"
        />
      </section>

      <section className="bg-sea-foam-base">
        <ResponsiveContainer containerClass="py-3xl" contentClass="mx-0">
          <ReportContent content={content.resources.introduction} />
          <ResourceGroups groups={content.resources.groups} />
        </ResponsiveContainer>
      </section>
    </main>
  );
}
