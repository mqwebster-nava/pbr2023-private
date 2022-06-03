import "tailwindcss/tailwind.css";
import "./tailwind.css";

export default {
  title: "Styles/Colors",
  argTypes: { onClick: { action: "clicked" } },
};

export const Color = () => {

  return (
    <div>
      <div className="space-y-2 p-10">
        <div>
          <div>Purple</div>
          <div className="h-48 flex ">
            <div style={{ width: "100px", height: "100px" }} className="bg-purple-50 ">50</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-purple-100">100</div>
            <div style={{ width: "100px", height: "100px" }}  className="bg-purple-200">200</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-purple-300">300</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-purple-400">400</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-purple-500">500</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-purple-600">600</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-purple-700 border-purple-700 hover:border-purple-700">700</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-purple-800">800</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-purple-900">900</div>
          </div>
          <div>Plum</div>
          <div className="h-48 flex ">
            <div style={{ width: "100px", height: "100px" }} className="bg-plum-50 ">50</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-plum-100">100</div>
            <div style={{ width: "100px", height: "100px" }}  className="bg-plum-200">200</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-plum-300">300</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-plum-400">400</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-plum-500">500</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-plum-600">600</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-plum-700 border-plum-700 hover:border-plum-700">700</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-plum-800">800</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-plum-900">900</div>
          </div>
          <div>Gold</div>
          <div className="h-48 flex ">
            <div style={{ width: "100px", height: "100px" }} className="bg-gold-50 ">50</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-gold-100">100</div>
            <div style={{ width: "100px", height: "100px" }}  className="bg-gold-200">200</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-gold-300">300</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-gold-400">400</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-gold-500">500</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-gold-600">600</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-gold-700 border-gold-700 hover:border-gold-700">700</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-gold-800">800</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-gold-900">900</div>
          </div>
          <div>Navy</div>
          <div className="h-48 flex ">
            <div style={{ width: "100px", height: "100px" }} className="bg-navy-50 ">50</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-navy-100">100</div>
            <div style={{ width: "100px", height: "100px" }}  className="bg-navy-200">200</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-navy-300">300</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-navy-400">400</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-navy-500">500</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-navy-600">600</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-navy-700 border-navy-700 hover:border-navy-700">700</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-navy-800">800</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-navy-900">900</div>
          </div>
          <div>Sage</div>
          <div className="h-48 flex ">
            <div style={{ width: "100px", height: "100px" }} className="bg-sage-50 ">50</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-sage-100">100</div>
            <div style={{ width: "100px", height: "100px" }}  className="bg-sage-200">200</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-sage-300">300</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-sage-400">400</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-sage-500">500</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-sage-600">600</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-sage-700 hover:border-sage-700">700</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-sage-800">800</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-sage-900">900</div>
          </div>
          <div>Gray</div>
          <div className="h-48 flex ">
            <div style={{ width: "100px", height: "100px" }} className="bg-gray-50 ">50</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-gray-100">100</div>
            <div style={{ width: "100px", height: "100px" }}  className="bg-gray-200">200</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-gray-300">300</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-gray-400">400</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-gray-500">500</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-gray-600">600</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-gray-700">700</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-gray-800">800</div>
            <div style={{ width: "100px", height: "100px" }} className="bg-gray-900">900</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TextColor = () => {
  return (
    <div>
      <p className="text-navy-base">Primary Text Color</p>
      <p className="text-purple-dark">Purple</p>
      <p className="text-plum-base">Plum</p>
      <p className="text-plum-dark">Plum</p>
      <p className="text-gold-base">Gold</p>
      <p className="text-gold-dark">Gold</p>
      <p className="text-navy-base">Navy</p>
      <p className="text-navy-dark">Navy</p>
      <p className="text-sage-base">Sage</p>
      <p className="text-sage-dark">Sage</p>
    </div>
  );
};

// export const AllColors = () => {
//   return (
//     <div>
//       <p className="text-purple-50 ">Purple</p>
//       <p className="text-purple-100">Purple</p>
//       <p className="text-purple-200">Purple</p>
//       <p className="text-purple-300">Purple</p>
//       <p className="text-purple-400">Purple</p>
//       <p className="text-purple-500">Purple</p>
//       <p className="text-purple-600">Purple</p>
//       <p className="text-purple-700">Purple</p>
//       <p className="text-purple-800">Purple</p>
//       <p className="text-purple-900">Purple</p>

//       <p className="text-purple-50">Purple</p>
//       <p className="text-purple-100">Purple</p>
//       <p className="text-purple-200">Purple</p>
//       <p className="text-purple-300">Purple</p>
//       <p className="text-purple-400">Purple</p>
//       <p className="text-purple-500">Purple</p>
//       <p className="text-purple-600">Purple</p>
//       <p className="text-purple-700">Purple</p>
//       <p className="text-purple-800">Purple</p>
//       <p className="text-purple-900">Purple</p>

//       <p className="text-purple-dark">Purple</p>
//       <p className="text-plum-base">Plum</p>
//       <p className="text-plum-dark">Plum</p>
//       <p className="text-gold-base">Gold</p>
//       <p className="text-gold-dark">Gold</p>
//       <p className="text-navy-base">Navy</p>
//       <p className="text-navy-dark">Navy</p>
//       <p className="text-sage-base">Sage</p>
//       <p className="text-sage-dark">Sage</p>
//     </div>
//   );
// };
