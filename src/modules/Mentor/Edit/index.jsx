import React from "react";
import { MemoizedMentorHeader } from "../../Layout/Header/MentorHeader";
import { MemoizedEditMentorAbout } from "./About";
import { MemoizedEditMentorExperience } from "./Experience";
import { MemoizedEditMentorSkills } from "./Skill";
import { MemoizedEditMentorEducation } from "./Education";
import { MemoizedEditMentorOhters } from "./Other";
import { MemoizedEditMentorAchivements } from "./Achivements";

const EditMentor = () => {
  return (
    <MemoizedMentorHeader>
      <MemoizedEditMentorAbout />
      <MemoizedEditMentorExperience />
      <MemoizedEditMentorSkills />
      <MemoizedEditMentorAchivements />
      <MemoizedEditMentorEducation />
      <MemoizedEditMentorOhters />
    </MemoizedMentorHeader>
  );
};

export const MemoizedEditMentor = React.memo(EditMentor);
