type LINETHICKNESS = "heavy" | "medium" | "light";
type LINESEPERATION = "tight" | "normal" | "loose";

// TODO try implementing this version
export const Lines = ({ count=40, thickness=".5" }) => {
  console.log(count, thickness)
  return (
    <svg viewBox="0 0 100 100" width="150px" height="150px">
      {Array.from(Array(count).keys()).map((i) => (
        <line
          x1={-20 + i*140/count}
          y1={-100}
          x2={-20+ i*140/count}
          y2={ 200 }
          stroke="black"
          strokeWidth={thickness}
          strokeLinecap="square"
          transform={`rotate(45, 50, 50)`}
        />
      ))}
    </svg>
  );
};

interface BrandPatternInterface {
  lineThickness: LINETHICKNESS;
  lineSeperation:LINESEPERATION;
}

const BrandPattern = ({lineThickness, lineSeperation}:BrandPatternInterface) => {
  const strokeWidth = lineThickness=="heavy"? "3" : lineThickness=="medium" ? "2": "1"
  const strokeColor = "white"

  return (
    lineSeperation == "loose" ? <LooseSeperation strokeColor={strokeColor} strokeWidth={strokeWidth}/>
    : lineSeperation == "normal" ? <NormalSeperation strokeColor={strokeColor} strokeWidth={strokeWidth}/>
    : <TightSeperation strokeColor={strokeColor} strokeWidth={strokeWidth}/>
  );
};
export default BrandPattern;

//export default Line;



const LooseSeperation = ({strokeWidth, strokeColor}) => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1054_5926)">
        <g clip-path="url(#clip1_1054_5926)">
          <g clip-path="url(#clip2_1054_5926)">
            <path
              d="M-171.75 183.423L183.423 -171.75"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M-165.859 189.314L189.314 -165.859"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M-159.995 195.206L195.206 -159.995"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M-154.104 201.097L201.097 -154.104"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M-148.213 206.96L206.96 -148.213"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M-142.321 212.852L212.852 -142.321"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M-136.458 218.743L218.743 -136.458"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M-130.566 224.634L224.634 -130.566"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M-124.675 230.498L230.498 -124.675"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M-118.784 236.389L236.389 -118.784"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M-112.92 242.28L242.28 -112.92"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M-107.029 248.172L248.172 -107.029"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M-101.138 254.063L254.063 -101.138"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M-95.2465 259.926L259.926 -95.2465"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M-89.3551 265.818L265.818 -89.3551"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M-83.4916 271.709L271.709 -83.4916"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M-77.6003 277.6L277.6 -77.6003"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M-71.709 283.464L283.464 -71.709"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M-65.8177 289.355L289.355 -65.8177"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M-59.9542 295.246L295.246 -59.9542"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M-54.063 301.138L301.138 -54.063"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M-48.1716 307.001L307.001 -48.1716"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M-42.2804 312.892L312.893 -42.2804"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M-36.4169 318.784L318.784 -36.4169"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M-30.5255 324.675L324.675 -30.5255"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M-24.6343 330.539L330.539 -24.6343"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M-18.7429 336.43L336.43 -18.7429"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M-12.8794 342.321L342.321 -12.8794"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M-6.98816 348.212L348.212 -6.98816"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M-1.0968 354.104L354.104 -1.09692"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M4.79443 359.967L359.967 4.79443"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M10.6858 365.859L365.859 10.6858"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M16.5493 371.75L371.75 16.5492"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1054_5926">
          <rect width="200" height="200" fill="white" />
        </clipPath>
        <clipPath id="clip1_1054_5926">
          <rect width="200" height="200" fill="white" />
        </clipPath>
        <clipPath id="clip2_1054_5926">
          <rect
            width="544"
            height="544"
            fill="white"
            transform="translate(-172 -172)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
const NormalSeperation = ({strokeWidth, strokeColor}) => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1054_5883)">
        <g clip-path="url(#clip1_1054_5883)">
          <g clip-path="url(#clip2_1054_5883)">
            <g clip-path="url(#clip3_1054_5883)">
              <path
                d="M-166.75 189.281L188.941 -167.749"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              <path
                d="M-154.978 201.125L200.74 -155.932"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              <path
                d="M-143.178 212.942L212.512 -144.088"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              <path
                d="M-131.406 224.786L224.312 -132.272"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              <path
                d="M-119.606 236.602L236.084 -120.428"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              <path
                d="M-107.834 248.446L247.884 -108.611"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              <path
                d="M-96.0345 260.291L259.683 -96.7672"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              <path
                d="M-84.2347 272.107L271.455 -84.9231"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              <path
                d="M-72.4629 283.951L283.255 -73.1068"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              <path
                d="M-60.6631 295.767L295.027 -61.2626"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              <path
                d="M-48.8912 307.611L306.827 -49.4463"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              <path
                d="M-37.0914 319.428L318.599 -37.6021"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              <path
                d="M-25.3195 331.272L330.398 -25.7859"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              <path
                d="M-13.5198 343.088L342.17 -13.9417"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              <path
                d="M-1.7478 354.932L353.97 -2.12549"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              <path
                d="M10.0519 366.749L365.742 9.71875"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
            </g>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1054_5883">
          <rect width="200" height="200" fill="white" />
        </clipPath>
        <clipPath id="clip1_1054_5883">
          <rect width="200" height="200" fill="white" />
        </clipPath>
        <clipPath id="clip2_1054_5883">
          <rect width="200" height="200" fill="white" />
        </clipPath>
        <clipPath id="clip3_1054_5883">
          <rect
            width="535"
            height="535"
            fill="white"
            transform="translate(-167 -168)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
const TightSeperation = ({strokeWidth, strokeColor}) => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1054_5883)">
        <g clip-path="url(#clip1_1054_5883)">
          <g clip-path="url(#clip2_1054_5883)">
            <g clip-path="url(#clip3_1054_5883)">
              <path
                d="M-166.75 189.281L188.941 -167.749"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              <path
                d="M-154.978 201.125L200.74 -155.932"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              <path
                d="M-143.178 212.942L212.512 -144.088"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              <path
                d="M-131.406 224.786L224.312 -132.272"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              <path
                d="M-119.606 236.602L236.084 -120.428"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              <path
                d="M-107.834 248.446L247.884 -108.611"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              <path
                d="M-96.0345 260.291L259.683 -96.7672"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              <path
                d="M-84.2347 272.107L271.455 -84.9231"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              <path
                d="M-72.4629 283.951L283.255 -73.1068"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              <path
                d="M-60.6631 295.767L295.027 -61.2626"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              <path
                d="M-48.8912 307.611L306.827 -49.4463"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              <path
                d="M-37.0914 319.428L318.599 -37.6021"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              <path
                d="M-25.3195 331.272L330.398 -25.7859"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              <path
                d="M-13.5198 343.088L342.17 -13.9417"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              <path
                d="M-1.7478 354.932L353.97 -2.12549"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              <path
                d="M10.0519 366.749L365.742 9.71875"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
            </g>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1054_5883">
          <rect width="200" height="200" fill="white" />
        </clipPath>
        <clipPath id="clip1_1054_5883">
          <rect width="200" height="200" fill="white" />
        </clipPath>
        <clipPath id="clip2_1054_5883">
          <rect width="200" height="200" fill="white" />
        </clipPath>
        <clipPath id="clip3_1054_5883">
          <rect
            width="535"
            height="535"
            fill="white"
            transform="translate(-167 -168)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};


