import { PostEventSpeaker } from "components/blocks/PostEventSpeakersRow/PostEventSpeakersRow";


export interface ContentfulImageAsset{
  id:string;
  url:string;
  width?:number;
  height?:number;
  title?:string;
  description?:string;
}
export interface BasicPostInterface{
    __typename: string;
    id:string;
    slug:string;
    title:string;
    kicker?: string;
    date:string;
    contentType:string;
    clientName:string;
    contentTags:Array<string>;
    shortSummary:string;
    promoImage:ContentfulImageAsset;
   // contentTagsV2:any;
    
}
export interface ContentTagInterface{
    name:string;
    type:string;
  }
export interface FullPostInterface extends BasicPostInterface{
    longSummary:string;
    hideSideNav:boolean;
    authors:Array<AuthorPostInterface>;
    body:any;
    leadImage:ContentfulImageAsset;
    socialImage:ContentfulImageAsset;
    eventInfo: EventInfo;
    hideHeroPattern: boolean
}

export interface AuthorPostInterface{
    name:string;
    slug:string;
    role?:string;
    bio?:string;
    image?: ContentfulImageAsset;
    posts?:Array<BasicPostInterface>;
}



export interface EventInfo {
    location:string;
    eventTime:string;
    eventEndTime: string;
    registrationLink?:string;
    recordingLink?:string;
    speakers?: Array<PostEventSpeaker>
}

