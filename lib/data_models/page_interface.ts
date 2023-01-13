import { PageHeaderInterface } from "components/blocks/PageHeaders/PageHeader";
import ColorTheme from "utils/ColorThemes";
import { ExperimentInterface } from "utils/useOptimizely";
import {ContentfulImageAsset} from "./post_interface";

/*
This contains all the interfaces for page level data

*/
// AB Testing for insights vs stories
export type VARIANTTYPE = "insights" | "library"

export interface PageInterface {
  id: string;
  slug: string;
  title: string;
  description: string;
  socialImage?: ContentfulImageAsset;
  preview?: boolean;
  pageHeader: PageHeaderInterface;
  contentBlocks: any;
  isBottomGapRemoved?: boolean;
  experiments?: Array<ExperimentInterface>;
  DEIpageColor?:ColorTheme
}
