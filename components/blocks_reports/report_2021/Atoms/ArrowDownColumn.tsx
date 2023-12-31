import ArrowDown from "./ArrowDown";


const ArrowDownColumn = ({anchor,color, nextId,nextSectionTitle, nextSectionType}) => {

         return(   <div className=" col-start-12 col-span-1 row-start-1 block opacity-100 " id={`${anchor}-next-arrow-container`} >
            {nextId && (
              <a
                id={`${anchor}-next-arrow`}
                href={`#${nextId}`}
                aria-label={`Next ${nextSectionType}, Skip to ${nextSectionTitle}`}
                className={`group 
                sticky top-[70vh] landscape:top-[60vh] pt-3xl
                lg:top-[calc(100vh_-_150px)]  lg:landscape:top-[80vh] lg:pt-0
                w-full pl-lg  mb-2xl 
                focus:opacity-100 group-focus:opacity-100 active:opacity-100 opacity-0 motion-reduce:opacity-100
                flex flex-col md:items-start items-center`}
              >
                <p className={`
                type-preset-7  text-${color} 
                w-[100px]  -mb-lg   opacity-100  rotate-90 translate-x-0 md:-translate-x-[32px]
                md:portrait:mb-sm md:portrait:rotate-0 md:portrait:translate-x-0
                lg:w-auto lg:mb-sm  lg:opacity-0  lg:rotate-0 lg:translate-x-0 
               
                group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100
                `}>
                  Next <br className="hidden lg:block md:portrait:block"/>{nextSectionType}
                </p> 
                <ArrowDown sectionId={`${anchor}`} color={color} isMobileHidden={true}></ArrowDown>

              </a>
            )}
          </div>);
}

export default ArrowDownColumn;