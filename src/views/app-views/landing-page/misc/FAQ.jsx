import { Space, Input } from "antd";
const { Search } = Input;

export default function FAQ() {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <>
      <div className="container">
        <Space direction="vertical">
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{
              width: 200,
            }}
          />
        </Space>
      </div>
    </>
  );
}
