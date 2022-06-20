interface EmbeddedVideoInterface {
  title?: string;
  description?: string;
  linkId: string;
}

const EmbeddedVideo = ({
  title,
  description,
  linkId,
}: EmbeddedVideoInterface) => {
   
  return (
    <div className={`relative w-full pt-[56.25%]`} >
      <iframe
        className={`absolute top-0 bottom-0 right-0 left-0 h-full w-full`}
        src={`https://www.youtube.com/embed/${linkId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default EmbeddedVideo;
