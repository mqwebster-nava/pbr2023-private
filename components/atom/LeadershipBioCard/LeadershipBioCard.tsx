import { ContentfulImageAsset } from "shared_interfaces/post_interface";
import Image from "next/image";

interface LeadershipBioCardInterface {
  image: ContentfulImageAsset;
  name: string;
  role: string;
  slug: string;
}

const LeadershipBioCard = ({
  image,
  name,
  role,
  slug,
}: LeadershipBioCardInterface) => {
  return (
    <a className={""} href={`/authors/${slug}`}>
      <div>
        <Image src={image.url}></Image>
      </div>

      <div>
        <h4 className={"type-preset-5 font-black font-sans"}>{name}</h4>
        <h5 className={"type-preset-5 text-gray-600 font-serif "} >{role}</h5>
      </div>
    </a>
  );
};

export default LeadershipBioCard;
