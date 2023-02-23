
import { CONTENT_VARIANT } from "./PostContent";

interface PostPullQuoteInterface {
  body: any;
  attribution?: string;
  variant?: CONTENT_VARIANT;
}

const PostPullQuote = ({
  body,
  attribution,
  variant = "post",
}: PostPullQuoteInterface) => {
  const color = variant === "post" ? "plum" : "sage";
  const qmarkFill = variant === "post" ? `${color}-400` : `${color}-900`

  return (
    <aside className={`bg-${color}-50 my-xl p-2xl`}>
      <blockquote>
      <QMarkSVG  fillColor={qmarkFill}/>
        {/* <Image src={imgSrc} height={37} width={68} alt={""} /> */}
        <br />
        <div className={`text-${color}-900 type-preset-4 font-sans font-bold`}>
          {body}
        </div>
        {attribution && (
          <p className={`pt-xl text-${color}-400 font-serif type-preset-7`}>
            {attribution}
          </p>
        )}
      </blockquote>
    </aside>
  );
};

const QMarkSVG = ({fillColor}) => {
  return (
    <svg
      width="68"
      height="38"
      viewBox="0 0 68 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={`fill-${fillColor}`}
        d="M10.9058 0C3.15695 2 0 6.35714 0 12.3571V25.1429H14.3498V11.6429H8.03587V11.5C8.03587 8.42857 9.11211 6.78571 13.6323 5.57143L10.9058 0ZM28.5561 0C20.8072 2 17.6502 6.35714 17.6502 12.3571V25.1429H32V11.6429H25.6861V11.5C25.6861 8.42857 26.7623 6.78571 31.2825 5.57143L28.5561 0Z"
      />
      <path
        className={`fill-${fillColor}`}
        d="M57.0942 37.1428C64.843 35.1428 68 30.7857 68 24.7857L68 12L53.6502 12L53.6502 25.5L59.9641 25.5L59.9641 25.6428C59.9641 28.7143 58.8879 30.3571 54.3677 31.5714L57.0942 37.1428ZM39.4439 37.1428C47.1928 35.1428 50.3498 30.7857 50.3498 24.7857L50.3498 12L36 12L36 25.5L42.3139 25.5L42.3139 25.6428C42.3139 28.7142 41.2377 30.3571 36.7175 31.5714L39.4439 37.1428Z"
      />
    </svg>
  );
};

export default PostPullQuote;
