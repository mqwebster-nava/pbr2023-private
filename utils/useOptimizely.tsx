import { PageInterface } from 'lib/data_models/page_interface';
import { useEffect, useState } from 'react';
import TagManager from "react-gtm-module";

/*
Optimizely for versions of the site A/B testing

*/

export interface ExperimentInterface {
  name: String,
  id: String,
  options: Array<String>,
  isActive:Boolean,
  value?: Number,
  defaultValue: Number
}

interface OptimizelyProps {
  pageData: PageInterface,
  optimizeExperiments: Array<ExperimentInterface>
}







const useOptimizely = ({pageData, optimizeExperiments}: OptimizelyProps) => {

  const [experiments, setExperiments] = useState(optimizeExperiments)
 // const [variantNumber, setVariantNumber] = useState(null);

  const initOptimize = (callback) => {
    const script = document.createElement("script");
    script.src = `https://www.googleoptimize.com/optimize.js?id=OPT-MCXK4VH`;
    script.id = "google-optimize";
    script.onload = callback;
    script.onerror = () => {

      let _exs = [...experiments]
      _exs.forEach(( exp, i)=>{
        _exs[i].value = exp.defaultValue
        localStorage.setItem(`${exp.name}`, String(exp.defaultValue) );
      })
      setExperiments(_exs)
    };
    document.body.appendChild(script);
  };

  useEffect(() => {
    // @ts-ignore
    TagManager.initialize({
      gtmId: "GTM-NRQK2XB",
      dataLayer: { event: "optimize.activate" },
    });
    // TODO fix this one off
    if (pageData && pageData.slug && pageData.slug.includes("public-benefit-reports/2021")) return;

    initOptimize(() => {
      // Check if already a number
      let _exs = [...experiments]
      let change = false
      _exs.forEach(( exp, i)=>{
        const storedVariantNumber = localStorage.getItem(`${exp.name}`);
        if (storedVariantNumber !== "undefined" && storedVariantNumber) {
          _exs[i].value =Number(storedVariantNumber);
          change=true
        }
      })
      if(change)setExperiments(_exs)

    
      let interval = setInterval(() => {
        // @ts-ignore
        if (window.google_optimize !== undefined) {
         
          let _exs = [...experiments]
          _exs.forEach(( exp, i)=>{
            if(exp.isActive){
               // @ts-ignore
              let _variantNumber = window.google_optimize.get(exp.id);
              _variantNumber =  (typeof _variantNumber !== "undefined") ? _variantNumber :  
              (exp.value== null) ? 0 : exp.value
              if(_variantNumber != exp.value){
                _exs[i].value =Number(_variantNumber);
                localStorage.setItem(`${exp.name}`, String(_variantNumber) );
              }
            } else {
              _exs[i].value = exp.defaultValue
              localStorage.setItem(`${exp.name}`, String(exp.defaultValue) );

            }
          })
          setExperiments(_exs)
          clearInterval(interval);
        } 
      }, 100);
    });
  }, []);

  return experiments;
}



export function getExperimentValue(experiments, name){
  const exps = experiments.filter((exp) => exp.name==name)
  if(!exps || exps.length<1) return "Error";
  const targetExp = exps[0]
  if(targetExp.value ==null) return null
  return targetExp.options[targetExp.value]
}


export default useOptimizely