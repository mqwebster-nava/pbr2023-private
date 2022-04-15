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
  Newsletter,
  PercentBarChart,
  ReportContent,
  ResourceGroups,
  PercentSquareChart,
} from "components/blocks";
import { PercentSquareGraph } from "components/atom";
import React from "react";

// https://docs.google.com/document/d/1RG_J13eS5MM4QMLvgjK4xSr7CrJWomsKtxLDHjcttTw/edit#

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
        <div className="responsive-container">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
            <div className="w-full">
              <p className="text-xl text-sage-dark">{content.lead}</p>
              <ReportContent content={content.introduction} />
            </div>
            <img
              src="/images/dei/side_illustration.png"
              width="138px"
              className="max-h-[450px] md:scale-[1.4]"
            />
          </div>
        </div>
      </section>

      <section className="bg-sea-foam-light py-4xl">
        <div className="responsive-container">
          <div className="responsive-container-content mx-0">
            <ReportContent content={content.overview} />
          </div>
        </div>

        <PercentBarChart
          description="How we're doing in 2021"
          graphs={overview}
        />
      </section>
      <section className="bg-white">
        <div className="responsive-container py-4xl">
          <div className="responsive-container-content mx-0">
            <ReportContent content={content.body} />
          </div>
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
          theme="orange"
        />

        <div className="responsive-container mt-2xl">
          <div className="responsive-container-content mx-0 ">
            <h3 className="text-2xl font-black border-b-2 border-gray-300">
              {additionalIdentities.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 py-3xl">
              {additionalIdentities.statistics.map((graph, index) => (
                <PercentSquareGraph
                  key={`percent_square_graph_${index}`}
                  percent={graph.percentage}
                  description={graph.category}
                  theme="blue"
                  showTooltip={false}
                  fixed
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-sea-foam-base">
        <div className="responsive-container py-3xl">
          <div className="responsive-container-content mx-0">
            <ReportContent content={content.resources.introduction} />
            <ResourceGroups groups={content.resources.groups} />
          </div>
        </div>
      </section>
      <Newsletter />
    </main>
  );
}
