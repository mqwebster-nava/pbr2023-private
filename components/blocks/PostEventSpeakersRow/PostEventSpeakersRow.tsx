import { imageOptimizer } from "next/dist/server/image-optimizer";
import Image from "next/image";
import { ContentfulImageAsset } from "shared_interfaces/post_interface";

export interface PostEventSpeaker {
  name: string;
  role?: string;
  company?: string;
  image?: ContentfulImageAsset;
}

interface PostEventSpeakersRowInterface {
  id?: string;
  speakers: Array<PostEventSpeaker>;
}
const PostEventSpeakersRow = ({
  id,
  speakers,
}: PostEventSpeakersRowInterface) => {
  const sLen   = speakers && speakers.length;
  return ! speakers|| speakers.length==0 ? null:(
    <div className="responsive-container py-2xl w-full">
      <div className={`mt-2xl lg:w-${sLen}/6 w-full h-[1px] bg-gray-300`}/>
    
        <h3 className="type-preset-3 font-bold pb-md ">Speakers</h3>
        <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-xl">
          {speakers.map((speaker) => {
            return (
              <div className="">
                {speaker.image ? (
                  <Image
                    src={speaker.image.url}
                    height={speaker.image.height}
                    width={speaker.image.width}
                    alt={`Headshot of ${speaker.name}`}
                  />
                ) : (
                  <div className="h-[184px] w-full bg-navy-500"></div>
                )}
                <p className="type-preset-7 pt-sm">
                  <b>{speaker.name + ","}</b>
                  <br />
                  {speaker.role && speaker.role + ", "}
                  {speaker.company && speaker.company}{" "}
                </p>
              </div>
            );
          })}
        </div>
    </div>
  );
};

export default PostEventSpeakersRow;
