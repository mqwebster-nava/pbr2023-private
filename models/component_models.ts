import { BasicPostInterface, ContentfulImageAsset } from "./post_model";


export interface PostListInterface {
    title?: string;
    buttonText?: string;
    buttonPath?: string;
    posts: Array<BasicPostInterface>;
    body?: string;
    max?: number; 
    // Cycling through colors
    cycleNum?: number; 
}
/*
Interface for the 3 types of content card
*/
export interface ContentCardInterface {
    title: String;
    path: String;
    type: String;
    isHighlighted?: Boolean;
    promoImage?: ContentfulImageAsset;
    cycleNum?: number;
  }