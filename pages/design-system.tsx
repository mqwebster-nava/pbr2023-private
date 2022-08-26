import { getPageDataFromContentful } from "lib/api";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import { PageInterface } from "shared_interfaces/page_interface";
import { PageHeader } from "components/blocks";
import { ContentCard, Button, LinkText } from "components/atom";
//https://docs.google.com/document/d/140sOP1bOThae4tYF-HXv2gh9v6PCZV8RQJrwo83yGZE/edit#


const dscale= 1.25, mscale = 1.1, droot=18, mroot=16;
const fontHelper = (size) => {
  let drem= 1; let mrem =1;
  if( size > 6) {
    drem = 1/(Math.pow(dscale,(size-6)));
    mrem = 1/(Math.pow(mscale,(size-6)));
  }else if (size<6){
    drem = Math.pow(dscale,(6-size));
    mrem = Math.pow(mscale,(6-size));
  }
  let m = mrem*mroot, t=mrem*droot, d=drem*droot;
  return `desktop ${d.toFixed(1)} px / tablet ${t.toFixed(1)} px /mobile ${m.toFixed(1)}px`;
}



export default function DesignSystem(props: PageInterface) {
  const page = props;
  return page ? (
    <div>
    
      <PageTemplate {...page} />
      <div className="responsive-container space-y-2  divide-y divide-black">
        <div>
          <div className="type-preset-5 font-sans font-black pt-3xl "> Colors </div>
          <hr className="pb-xl" />
          <div>Purple</div>
          <div className="h-32 flex ">
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-purple-50 stroke-purple-50"
            >
              50
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-purple-100 stroke-purple-100"
            >
              100
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-purple-200 stroke-purple-200"
            >
              200
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-purple-300 stroke-purple-300"
            >
              300
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-purple-400 stroke-purple-400"
            >
              400
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-purple-500 stroke-purple-500"
            >
              500
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-purple-600 stroke-purple-600"
            >
              600
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-purple-700 stroke-purple-700"
            >
              700
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-purple-800 stroke-purple-800"
            >
              800
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-purple-900 stroke-purple-900"
            >
              900
            </div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-gold-900 stroke-gold-900 text-gold-900"
            >
              900
            </div>
            </div>
            </div>
    </div>
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
  /* <PageHeader
        id={"page-header"}
        title={"Design System"}
        subtitle={"Design System of navapbc.com"}
      ></PageHeader>
 */

/* <div className="responsive-container space-y-2 ">
        <div>
          <div className="type-preset-5 font-sans font-black pt-3xl "> Colors </div>
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
              className="bg-navy-100 border-navy-900"
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
          <div className="type-preset-5 font-sans font-black pt-3xl ">
            {" "}
            Text Sizes{" "}
          </div>
          <hr className="pb-xl" />
          <div className="font-sans">
      
      <p className="type-preset-8 pt-md ">{`Preset 1 - ${fontHelper(1)}`}</p>
      <p className="type-preset-1 font-bold">The quick brown fox ...</p>
      <p className="type-preset-8 pt-md ">{`Preset 2 - ${fontHelper(2)}`}</p>
      <p className="type-preset-2 font-bold">The quick brown fox ...</p>
      <p className="type-preset-8 pt-md ">{`Preset 3 - ${fontHelper(3)}`}</p>
      <p className="type-preset-3 font-bold">The quick brown fox ...</p>
      <p className="type-preset-8 pt-md ">{`Preset 4 - ${fontHelper(4)}`}</p>
      <p className="type-preset-4 font-bold">The quick brown fox ...</p>
      <p className="type-preset-8 pt-md ">{`Preset 5 - ${fontHelper(5)}`}</p>
      <p className="type-preset-5 font-bold">The quick brown fox ...</p>
      <p className="type-preset-8 pt-md ">{`Preset 6 - ${fontHelper(6)}`}</p>
      <p className="type-preset-6 font-bold">The quick brown fox ...</p>
      <p className="type-preset-8 pt-md ">{`Preset 7 - ${fontHelper(7)}`}</p>
      <p className="type-preset-7 font-bold">The quick brown fox ...</p>
      <p className="type-preset-8 pt-md ">{`Preset 8 - ${fontHelper(8)}`}</p>
      <p className="type-preset-8 font-bold">The quick brown fox ...</p>
    </div>
        </div>
        <div className="type-preset-5 font-sans font-black pt-3xl "> Font Faces </div>
        <hr className="pb-xl" />
        <div className="flex gap-md pb-2xl">
          <div className="font-sans type-preset-6">
            <p className="type-preset-5 font-bold">GT America</p>
            <p className="type-preset-8 pt-md">light</p>
            <p className="font-light">The quick brown fox ...</p>
            <p className="type-preset-8 pt-md">regular</p>
            <p className="">The quick brown fox ...</p>
            <p className="type-preset-8 pt-md">bold</p>
            <p className="font-bold ">The quick brown fox ...</p>
            <p className="type-preset-8 pt-md">black</p>
            <p className="font-black ">The quick brown fox ...</p>
          </div>
          <div className="font-serif type-preset-6">
            <p className="type-preset-5 font-bold">Freight Pro</p>
            <p className="type-preset-8 pt-md">light</p>
            <p className="font-light">The quick brown fox ...</p>
            <p className="type-preset-8 pt-md">regular</p>
            <p className="">The quick brown fox ...</p>
            <p className="type-preset-8 pt-md">italic</p>
            <p className="italic ">The quick brown fox ...</p>
          </div>
        </div>

        <div className="type-preset-5 font-sans font-black pt-3xl "> Atoms </div>
        <hr className="pb-xl" />
        <div>
          <h3 className="font-sans pb-sm">Button</h3>
          <div className="flex gap-4">
            <Button href={"/"}>Default Button</Button>
            <Button href={"/"} variant="outlined">
              Outlined Button
            </Button>
            <Button href={"/"} variant="white">
              White Button
            </Button>
            <Button href={"/"} variant="dark">
              Dark Button
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-sm" >
          <h3 className="font-sans pb-sm pt-lg font-bold">Link Text</h3>
          <LinkText href="/" variant="default">Default Link Text</LinkText> 
          <LinkText href="/" variant="underlined">Underlined Link Text</LinkText>
        </div>
        <div>
          <h3 className="font-sans pb-sm pt-lg">Content Card</h3>
          <div className="flex gap-4">
  
          </div>
        </div>

        <div className="type-preset-5 font-sans font-black pt-3xl ">
          {" "}
          Core Components{" "}
        </div>
        <hr className="pb-xl" />
      </div> */