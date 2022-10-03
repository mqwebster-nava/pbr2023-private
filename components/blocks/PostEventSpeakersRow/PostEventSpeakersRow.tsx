import Image from "next/image";
import { ContentfulImageAsset } from "shared_interfaces/post_interface";

export interface PostEventSpeaker {
    name:string;
    role?: string;
    company?: string;
    image?: ContentfulImageAsset
  }

interface PostEventSpeakersRowInterface {
  id?: string;
  speakers: Array<PostEventSpeaker>
}
const PostEventSpeakersRow = ({
  id,
  speakers
}: PostEventSpeakersRowInterface) => {
  console.log(speakers)
  return (
    <div className="responsive-container py-xl">

    
   <div className="border-t-[1px] border-black">
    <h3 className="type-preset-3 font-bold pb-md ">Speakers</h3>
    <div className="grid grid-cols-6 gap-xl">
      {speakers.map((speaker)=>{
        return (
          <div className="">
            {/* <Image
             src={}
            /> */}
            <div className="h-[184px] w-full bg-navy-500"></div>
            <p className="type-preset-7 pt-sm"><b>{speaker.name + ","}</b><br/>{speaker.role && speaker.role + ", "}{speaker.company && speaker.company}  </p>
          </div>
        );
      })}

    </div>
   </div>
   </div>
  );
};

export default PostEventSpeakersRow;
