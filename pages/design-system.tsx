import { getPageDataFromContentful } from "lib/api";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import { PageInterface } from "shared_interfaces/page_interface";
import { PageHeader } from "components/blocks";
import { ContentCard, Button, LinkText } from "components/atom";
//https://docs.google.com/document/d/140sOP1bOThae4tYF-HXv2gh9v6PCZV8RQJrwo83yGZE/edit#

export default function DesignSystem(props: PageInterface) {
  const page = props;
  return page ? (
    <div>
      <PageHeader
        id={"page-header"}
        title={"Design System"}
        subtitle={"Design System of navapbc.com"}
      ></PageHeader>

      <div className="responsive-container space-y-2 ">
        <div>
          <div className="text-xl font-sans font-black pt-3xl "> Colors </div>
          <hr className="pb-xl" />
          <div>Purple</div>
          <div className="h-32 flex ">
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-purple-50 "
            >
              50
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-purple-100"
            >
              100
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-purple-200"
            >
              200
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-purple-300"
            >
              300
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-purple-400"
            >
              400
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-purple-500"
            >
              500
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-purple-600"
            >
              600
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-purple-700"
            >
              700
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-purple-800"
            >
              800
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-purple-900"
            >
              900
            </div>
          </div>
          <div>Plum</div>
          <div className="h-32 flex ">
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-plum-50 "
            >
              50
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-plum-100"
            >
              100
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-plum-200"
            >
              200
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-plum-300"
            >
              300
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-plum-400"
            >
              400
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-plum-500"
            >
              500
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-plum-600"
            >
              600
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-plum-700"
            >
              700
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-plum-800"
            >
              800
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-plum-900"
            >
              900
            </div>
          </div>
          <div>Gold</div>
          <div className="h-32 flex ">
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-gold-50 "
            >
              50
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-gold-100"
            >
              100
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-gold-200"
            >
              200
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-gold-300"
            >
              300
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-gold-400"
            >
              400
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-gold-500"
            >
              500
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-gold-600"
            >
              600
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-gold-700"
            >
              700
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-gold-800"
            >
              800
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-gold-900"
            >
              900
            </div>
          </div>
          <div>Navy</div>
          <div className="h-32 flex ">
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-navy-50 "
            >
              50
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-navy-100"
            >
              100
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-navy-200"
            >
              200
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-navy-300"
            >
              300
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-navy-400"
            >
              400
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-navy-500"
            >
              500
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-navy-600"
            >
              600
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-navy-700"
            >
              700
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-navy-800"
            >
              800
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-navy-900"
            >
              900
            </div>
          </div>
          <div>Sage</div>
          <div className="h-32 flex ">
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-sage-50 "
            >
              50
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-sage-100"
            >
              100
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-sage-200"
            >
              200
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-sage-300"
            >
              300
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-sage-400"
            >
              400
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-sage-500"
            >
              500
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-sage-600"
            >
              600
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-sage-700"
            >
              700
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-sage-800"
            >
              800
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-sage-900"
            >
              900
            </div>
          </div>
          <div>Gray</div>
          <div className="h-32 flex ">
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-gray-50 "
            >
              50
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-gray-100"
            >
              100
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-gray-200"
            >
              200
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-gray-300"
            >
              300
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-gray-400"
            >
              400
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-gray-500"
            >
              500
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-gray-600"
            >
              600
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-gray-700"
            >
              700
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-gray-800"
            >
              800
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-gray-900"
            >
              900
            </div>
          </div>
        </div>
        <div>
          <div className="text-xl font-sans font-black pt-3xl ">
            {" "}
            Text Sizes{" "}
          </div>
          <hr className="pb-xl" />
          <div className="font-sans">
      
      <p className="text-xs pt-md ">Header 1</p>
      <p className="text-6xl font-bold">The quick brown fox ...</p>
      <p className="text-xs pt-md ">Header 2</p>
      <p className="text-5xl font-bold">The quick brown fox ...</p>
      <p className="text-xs pt-md ">Header 3</p>
      <p className="text-4xl font-bold">The quick brown fox ...</p>
      <p className="text-xs pt-md ">Header 4</p>
      <p className="text-2xl font-bold">The quick brown fox ...</p>
      <p className="text-xs pt-md ">Header 5</p>
      <p className="text-xl font-bold">The quick brown fox ...</p>
      <hr/>
      <p className="text-xs pt-md ">Subheader 1</p>
      <p className="text-2xl">The quick brown fox ...</p>
      <p className="text-xs pt-md ">Subheader 1 Bold</p>
      <p className="text-2xl font-bold">The quick brown fox ...</p>
      <p className="text-xs pt-md ">Subheader 2</p>
      <p className="text-xl">The quick brown fox ...</p>
      <p className="text-xs pt-md ">Subheader 2 Bold</p>
      <p className="text-xl font-bold">The quick brown fox ...</p>
      <hr/>
      <p className="text-xs pt-md">Large Body</p>
      <p className="text-lg">The quick brown fox ...</p>
      <p className="text-xs pt-md">Body</p>
      <p className="text-base">The quick brown fox ...</p>
      <p className="text-xs pt-md">Body Bold</p>
      <p className="text-base font-bold">The quick brown fox ...</p>
      <p className="text-xs pt-md">Small</p>
      <p className="text-sm font-bold">The quick brown fox ...</p>
      <p className="text-xs pt-md">Small bold</p>
      <p className="text-sm font-bold">The quick brown fox ...</p>
      <p className="text-xs ">Extra small </p>
      <p className="text-xs">The quick brown fox ...</p>

    </div>
        </div>

        <div className="text-xl font-sans font-black pt-3xl "> Font Faces </div>
        <hr className="pb-xl" />
        <div className="flex gap-md pb-2xl">
          <div className="font-sans text-base">
            <p className="text-lg font-bold">GT America</p>
            <p className="text-xs pt-md">light</p>
            <p className="font-light">The quick brown fox ...</p>
            <p className="text-xs pt-md">regular</p>
            <p className="">The quick brown fox ...</p>
            <p className="text-xs pt-md">bold</p>
            <p className="font-bold ">The quick brown fox ...</p>
            <p className="text-xs pt-md">black</p>
            <p className="font-black ">The quick brown fox ...</p>
          </div>
          <div className="font-serif text-base">
            <p className="text-lg font-bold">Freight Pro</p>
            <p className="text-xs pt-md">light</p>
            <p className="font-light">The quick brown fox ...</p>
            <p className="text-xs pt-md">regular</p>
            <p className="">The quick brown fox ...</p>
            <p className="text-xs pt-md">italic</p>
            <p className="italic ">The quick brown fox ...</p>
          </div>
        </div>

        <div className="text-xl font-sans font-black pt-3xl "> Atoms </div>
        <hr className="pb-xl" />
        <div>
          <h3 className="font-sans pb-sm">Button</h3>
          <div className="flex gap-4">
            <Button href={"/"}>Default Button</Button>
            <Button href={"/"} variant="outlined">
              Outlined Button
            </Button>
            <Button href={"/"} variant="black">
              Black Button
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-sm" >
          <h3 className="font-sans pb-sm pt-lg font-bold">Link Text</h3>
          <LinkText href="/" variant="default">Default Link Text</LinkText> 
          <LinkText href="/" variant="underlined">Underlined Link Text</LinkText>
          <LinkText href="/" variant="arrow">Arrow Link Text</LinkText>
          <LinkText href="/" variant="large arrow">Large Arrow Link Text</LinkText>
        </div>
        <div>
          <h3 className="font-sans pb-sm pt-lg">Content Card</h3>
          <div className="flex gap-4">
            <ContentCard type={"Insight"} title={"Content Card"} path={"/"}>
              Example description for a content card
            </ContentCard>
            <ContentCard
              type={"Insight"}
              title={"Content Card With Image"}
              path={"/"}
              promoImage={{
                id: "null",
                url: "https://images.ctfassets.net/t2ekr6eg3fr3/4jyenuPc16hQCMqdaVYRLq/5bd3115348fba126ec19af90a704ad23/_uploads_CMS-simplifying_20social_20safety_20net-benefits_20partnership_20team.jpeg",
              }}
            >
              Example description for a content card
            </ContentCard>
          </div>
        </div>

        <div className="text-xl font-sans font-black pt-3xl ">
          {" "}
          Core Components{" "}
        </div>
        <hr className="pb-xl" />
      </div>

      <PageTemplate {...page} />
    </div>
  ) : (
    <div>Error</div>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const res: PageInterface = await getPageDataFromContentful({
    slug: "/design-system",
    preview: preview,
  });
  return {
    props: res,
  };
}
