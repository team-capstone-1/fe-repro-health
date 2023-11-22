import profileDoctor from "@/assets/profile-doctor.svg";
import { Card } from "antd";

export default function DoctorProfile() {
  return (
    <>
      <Card>
        <h3>Profil</h3>
        <div className="items-center space-y-4 md:grid md:grid-cols-2 lg:grid-cols-12">
          <div className="flex justify-center md:col-span-1 lg:col-span-3 xl:col-span-2">
            <div id="doctor-image">
              <img
                className="my-5 h-48 w-48 md:my-0 md:w-36"
                src={profileDoctor}
                alt="profile-doctor"
              />
            </div>
          </div>
          <div className="flex justify-start md:col-span-1 lg:col-span-4 lg:justify-center xl:col-span-3">
            <div id="doctor-information" className="flex flex-col">
              <p className="text-sm font-semibold text-grey-900 md:text-base">
                Dr. Andi Cahaya, Sp.OG
              </p>
              <p className="text-sm font-medium text-grey-300 md:text-base">
                Spesialis Kandungan
              </p>
              <p className="mt-2">10 tahun pengalaman</p>
            </div>
          </div>
          <div className="me-5 md:col-span-1 lg:col-span-7 xl:col-span-4">
            <div
              id="doctor-address"
              className="xl:flex xl:w-[100%] xl:space-x-3"
            >
              <p className="text-sm font-semibold text-grey-900 md:text-base">
                Alamat
              </p>
              <p className="text-sm md:text-base">
                Klinik Nasional. Jl. Bedrek No.47e, Sanggrahan, Condongcatur,
                Kec. Depok, Kabupaten Sleman, DIY
              </p>
            </div>
          </div>
          <div className="flex md:col-span-1 lg:col-span-5 xl:col-span-3">
            <div id="doctor-contacts" className="flex space-x-3 text-left">
              <div className="flex-col">
                <p className="text-sm font-semibold text-grey-900 md:text-base">
                  Email
                </p>
                <p className="text-sm font-semibold text-grey-900 md:text-base">
                  Phone
                </p>
              </div>
              <div className="flex-col">
                <p className="text-sm md:text-base">andicahyo@gmail.com</p>
                <p className="text-sm md:text-base">+62 812345865</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
