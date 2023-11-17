import { Tabs } from "@/components/shared-components/Tabs";
import { Input } from "antd";
import { useState } from "react";
const { Search } = Input;

export default function Forum() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <Tabs>
        {/* isi content tab 1 */}
        <div className="mt-4">
          <Search
            className="rounded-lg bg-blue-400"
            placeholder="input search text"
            enterButton="Search"
            size="large"
            allowClear
            loading={isLoading}
            onSearch={(prev) => setIsLoading(!prev)}
          />
        </div>

        {/* isi content tab 1 */}
        <div className="mt-4">Tab 2</div>
      </Tabs>
    </>
  );
}