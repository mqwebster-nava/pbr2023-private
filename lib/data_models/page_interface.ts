import { PageHeaderInterface } from "components/blocks/PageHeaders/PageHeader";
import {ContentfulImageAsset} from "./post_interface";

/*
This contains all the interfaces for page level data

*/
// AB Testing for insights vs stories
export type VARIANTTYPE = "insights" | "resources"

export interface PageInterface {
  id: string;
  slug: string;
  title: string;
  description: string;
  socialImage?: ContentfulImageAsset;
  preview?: boolean;
  pageHeader: PageHeaderInterface;
  contentBlocks: any;
  isBottomCTA?: boolean;
  variantAB?: VARIANTTYPE
}
