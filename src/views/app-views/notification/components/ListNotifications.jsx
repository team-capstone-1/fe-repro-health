import CardNotifications from "./CardNotifications";
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

  return (
    <>
      <h3>Notifikasi ({totalUnRead})</h3>
      {DataNotifications.map(
        ({ type, title, description, read, dateTime }, index) => (
          <div key={index}>
            <CardNotifications
              iconType={type}
              title={title}
              description={description}
              read={read}
              dateTime={dateTime}
            />
          </div>
        ),
      )}
    </>
  );
}
