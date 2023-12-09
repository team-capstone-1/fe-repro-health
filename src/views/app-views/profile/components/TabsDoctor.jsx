import { Card } from "antd";
import { TabsDoctorProfile } from "@/components/shared-components/Tabs";

import { WorkExperience } from "./WorkExperience";
import { Education } from "./Education";
import { Certificate } from "./Certificate";

export function TabsDoctor() {
  return (
    <section id="tabs-profile">
      <Card>
        <TabsDoctorProfile
          title={["Pengalaman Kerja", "Pendidikan", "Sertifikat"]}
        >
          <WorkExperience />
          <Education />
          <Certificate />
        </TabsDoctorProfile>
      </Card>
    </section>
  );
}
