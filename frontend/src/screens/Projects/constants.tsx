import { CardItemType } from "./types";

import ThesisTrack from "../../assets/images/ThesisTrackk_rmbg.png";

const THIUP_URL = "https://teststrack.thiup.com/";

export const cards: CardItemType[] = [

  {
    id: "1",
    title: "Atlas Revolution",
    description: (
      <>
        <a
          target="_blank"
          href={THIUP_URL}
          style={{ color: "black" }}
        >
          <strong>ThesisTrack</strong>
        </a>{" "}
        is a platform for managing thesis projects, featuring an admin panel, 
        data visualization with graphs, and an AI-powered chatbot. 
        It allows for retrieving project metadata, seeing the most viewed projects, and more.
        
      </>
    ),
    color: "#F4A261",
    icon: ThesisTrack,
  },

];
