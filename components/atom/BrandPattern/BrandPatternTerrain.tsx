

type LINETHICKNESS = "heavy" | "medium" | "light";
type PATTERNVARIANT = "one" | "two" |"three"

interface BrandPatternTerrainInterface{
 

}


// const BrandPatternTerrain = () => {



// };


const BrandPatternTerrain  = ({strokeWidth, strokeColor}) => {
    const 
      m =-277,
      n =   72.1729,
      o = 78.1729,
      p = -283,
      multm = 5.864,
      mult = 5.891;
    
    return (
      <svg
      width="349" height="349" viewBox="0 0 349 349"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1620_173)">
        {Array.from(Array(100).keys()).map((i)=>{
            const f = mult*i , mf = multm*i;
            const d = `M-${m + mf} ${n+f}L${o+f} ${p+f}`
            return (<path
                d={d}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />)
        })}
        </g>
        <clipPath id="clip0_1620_173">
<rect width="349" height="349" fill="white"/>
</clipPath>
      </svg>
    );
  };
export default BrandPatternTerrain;