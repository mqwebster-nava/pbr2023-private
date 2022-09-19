import Callout from "components/blocks/PostBody/Callout";



const FeaturedCallOut = ({ anchor, featuredCallOut, colorTheme}) => {
  return (
    <div
      id={`storyCallOut-${anchor}`}
      className={`w-full lg:w-2/3 ml-auto h-auto opacity-0 motion-reduce:opacity-100}`}
    >
      <Callout body={featuredCallOut.body} colorTheme={colorTheme}></Callout>
    </div>
  );
};

export default FeaturedCallOut;

