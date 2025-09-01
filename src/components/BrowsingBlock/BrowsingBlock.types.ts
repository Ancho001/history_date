import { Dispatch, SetStateAction } from "react";
import { HeadlineTitle } from "../../constans/headlineTitles";

export interface IBrowsingBlock {
  activeItemTitle: HeadlineTitle;
  onChangeActiveItem: Dispatch<SetStateAction<HeadlineTitle>>;
}
