import { Badge, Collapse, Flex } from "antd";

const ListPatientsMorn = ({ data }) => {
  const listPatients = data?.filter((item) => item.content === "Pagi");
  if (listPatients && listPatients[0])
    return (
      <ul className="text-black">
        {listPatients[0].appointment?.map((item) => (
          <li key={item.id}>
            <Flex align="start" gap={5}>
              <Badge color="#17c6a3" />
              <span className="ms-1 flex flex-col text-base font-semibold">
                {item.patient}
                <span className="font-normal text-grey-200">{item.id}</span>
              </span>
            </Flex>
          </li>
        ))}
      </ul>
    );
  else
    return (
      <ul>
        <li>Tidak ada jadwal pertemuan.</li>
      </ul>
    );
};
const ListPatientsNoon = ({ data }) => {
  const listPatients = data?.filter((item) => item.content === "Siang");
  if (listPatients && listPatients[0])
    return (
      <ul className="text-black">
        {listPatients[0].appointment?.map((item) => (
          <li key={item.id}>
            <Flex align="start" gap={5}>
              <Badge color="#17c6a3" />
              <span className="ms-1 flex flex-col text-base font-semibold">
                {item.patient}
                <span className="font-normal text-grey-200">{item.id}</span>
              </span>
            </Flex>
          </li>
        ))}
      </ul>
    );
  else
    return (
      <ul>
        <li>Tidak ada jadwal pertemuan.</li>
      </ul>
    );
};

const ListPatientsNight = ({ data }) => {
  const listPatients = data?.filter((item) => item.content === "Malam");
  if (listPatients && listPatients[0])
    return (
      <ul className="text-black">
        {listPatients[0].appointment?.map((item) => (
          <li key={item.id}>
            <Flex align="start" gap={5}>
              <Badge color="#17c6a3" />
              <span className="ms-1 flex flex-col text-base font-semibold">
                {item.patient}
                <span className="font-normal text-grey-200">{item.id}</span>
              </span>
            </Flex>
          </li>
        ))}
      </ul>
    );
  else
    return (
      <ul>
        <li>Tidak ada jadwal pertemuan.</li>
      </ul>
    );
};
const items = (panelStyle, data) => [
  {
    key: "1",
    label: <p className="text-base font-semibold">Pagi</p>,
    children: <ListPatientsMorn data={data} />,
    style: panelStyle,
  },
  {
    key: "2",
    label: <p className="text-base font-semibold">Siang</p>,
    children: <ListPatientsNoon data={data} />,
    style: panelStyle,
  },
  {
    key: "3",
    label: <p className="text-base font-semibold">Malam</p>,
    children: <ListPatientsNight data={data} />,
    style: panelStyle,
  },
];

const panelStyle = {
  marginBottom: 8,
  background: "#e9e9e9",
  borderRadius: 5,
  border: "none",
};

export default function ListAppointment({ data }) {
  return (
    <>
      <Collapse
        accordion
        bordered={false}
        expandIconPosition="end"
        items={items(panelStyle, data)}
        style={{
          background: "#fff",
        }}
      />
    </>
  );
}
