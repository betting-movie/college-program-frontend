import React, { useEffect, useState } from "react";
import { MemoizedMentorHeader } from "../../Layout/Header/MentorHeader";
import { MemoizedMentorAbout } from "./About";
import { MemoizedMentorSkills } from "./Skills";
import { MemoizedMentorExperience } from "./Experience";
import { MemoizedMentorAchivements } from "./Achivements";
import { MemoizedMentorEducation } from "./Education";
import { MemoizedMentorOhters } from "./Other";
import { getMentor } from "@/src/apiService/mentorService";

const MentorDashboard = () => {
  const [mentorData, setMentorData] = useState();
  useEffect(() => {
    getMentor().then((res) => {
      console.log("res", res?.data?.guide);
      setMentorData(res?.data?.guide);
    });
  }, []);
  return (
    <MemoizedMentorHeader>
      <MemoizedMentorAbout data={mentorData} />
      <MemoizedMentorExperience data={mentorData} />
      <MemoizedMentorSkills data={mentorData} />
      <MemoizedMentorAchivements data={mentorData} />
      <MemoizedMentorEducation data={mentorData} />
      <MemoizedMentorOhters data={mentorData} />
    </MemoizedMentorHeader>
  );
};

export const MemoizedMentorDashboard = React.memo(MentorDashboard);
