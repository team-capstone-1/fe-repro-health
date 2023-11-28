import { Flex, Tooltip } from "antd";
import { FiInfo } from "react-icons/fi";
import { Link } from "react-router-dom";

import CardNotifications from "@/views/app-views/notification/components/CardNotifications";
import { DataNotifications } from "@/views/app-views/notification/constants/notifications";

function countUnreadNotifications(data) {
  return data.reduce((count, notification) => {
    if (!notification.read) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);
}

export default function ListNotifications() {
  const totalUnRead = countUnreadNotifications(DataNotifications);
  const text = (
    <span className="text-black">
      Terdapat {totalUnRead} notifikasi yang belum terbaca
    </span>
  );

  return (
    <>
      <Flex>
        <h3 className="mb-3 font-bold">Notifikasi ({totalUnRead})</h3>
        <span>
          <Tooltip placement="right" title={text} color="white" arrow={true}>
            <>
              <FiInfo className="text-lg" />
            </>
          </Tooltip>
        </span>
      </Flex>
      {DataNotifications.map(
        ({ type, title, description, read, dateTime }, index) => (
          <div key={index}>
            <Link to={`/${type}`} className="hover:text-green-800">
              <CardNotifications
                iconType={type}
                title={title}
                description={description}
                read={read}
                dateTime={dateTime}
              />
            </Link>
          </div>
        ),
      )}
    </>
  );
}
