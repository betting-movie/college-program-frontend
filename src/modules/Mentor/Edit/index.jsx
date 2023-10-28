import React from "react";
import { MemoizedMentorHeader } from "../../Layout/Header/MentorHeader";
import { MemoizedEditMentorAbout } from "./About";
import { MemoizedEditMentorExperience } from "./Experience";
import { MemoizedEditMentorSkills } from "./Skill";
import { MemoizedEditMentorAchivements } from "./Achivements";
import { MemoizedEditMentorEducation } from "./Education";
import { MemoizedEditMentorOhters } from "./Other";

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
