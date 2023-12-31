
export const ReportMetrics = ({ metrics }) => {
  return (
    <div >
      <p className="font-bold pb-2">At a glance</p>
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-lg">
        {metrics.map((metric, index) => (
          <div
            key={`metric_${index}`}
            className="text-white p-2 mb-2 md:mr-2 bg-sage-700 border-t-[10px] border-sage-900"
          >
            <p className="pb-md type-preset-3 font-thin ">{metric.number}</p>
            <p className="font-light type-preset-6">{metric.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};



// export const ReportMetrics = ({ metrics }) => {
//   return (
//     <div className="responsive-container">
//       <p className="font-bold pb-2">At a glance</p>
//       <div className="grid grid-cols-1 md:grid-cols-3 max-w-lg">
//         {metrics.map((metric, index) => (
//           <div
//             key={`metric_${index}`}
//             className="text-white p-2 mb-2 md:mr-2 bg-sage-700 border-t-[10px] border-sage-900"
//           >
//             <p className="pb-md type-preset-3 font-thin ">{metric.number}</p>
//             <p className="font-light type-preset-6">{metric.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
