import {ContentfulImageAsset} from "./post_model";

/*
This contains all the interfaces for page level data

*/



type BannerColor = "plum" | "purple" | "navy" | "sage" | "gold";
type PageHeaderVariant = "default" | "post";

export interface PageHeaderInterface {
  title?: string;
  subtitle?:string;
  bannerColor?:BannerColor;
  variant?: PageHeaderVariant;
  backgroundImage?:ContentfulImageAsset;
}
export interface PostHeaderInterface extends PageHeaderInterface  {
  longSummary: string;
  leadImage?: string; // todo make a model for assets
  contentType: string; // todo make this a type?
}

export interface PageInterface {
  id: string;
  slug: string;
  title: string;
  description: string;
  pageHeader: PageHeaderInterface;
  contentBlocks: any;
  preview?: boolean;
}
