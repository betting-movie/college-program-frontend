import React, { useEffect, useState } from "react";
import { MemoizedMentorHeader } from "../../Layout/Header/MentorHeader";
import { MemoizedMentorAbout } from "./About";
import { MemoizedMentorSkills } from "./Skills";
import { MemoizedMentorExperience } from "./Experience";
import { MemoizedMentorAchivements } from "./Achivements";
import { MemoizedMentorEducation } from "./Education";
import { MemoizedMentorOhters } from "./Other";
import { getMentorDetails } from "@/src/apiService/mentorService";

const MentorDashboard = () => {
  const [mentorData, setMentorData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mentorId = localStorage.getItem("mentorId");
    if (mentorId) {
      getMentorDetails(mentorId)
        .then((res) => {
          setMentorData(res?.data?.guide);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
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
