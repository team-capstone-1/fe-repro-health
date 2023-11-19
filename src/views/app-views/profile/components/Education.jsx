import { ConfigProvider, Timeline } from "antd";
import { DataEducation as education } from "../constant/data-education";

export default function Education() {
  return (
    <section id="profile-education-section" className="mt-10">
      <ConfigProvider
        theme={{
          components: {
            Timeline: {
              dotBorderWidth: 6,
              itemPaddingBottom: "50px",
              tailColor: "rgba(217, 217, 217, 0.7)",
            },
          },
          token: {
            colorPrimary: "#14c6a4",
            colorText: "#0D0D0D",
          },
        }}
      >
        <Timeline
          items={education}
          mode="left"
          className=""
          style={{ display: "inline-block" }}
        />
      </ConfigProvider>
    </section>
  );
}
