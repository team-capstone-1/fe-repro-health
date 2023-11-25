import { Flex, Col } from "antd";
import { PiChatsCircle, PiCalendarCheckBold } from "react-icons/pi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { TbExclamationCircle } from "react-icons/tb";
import { FaTrashCan } from "react-icons/fa6";

import { generateTimestampOutput } from "@/utils/GenerateTimestampsOutput";

export default function CardNotifications({
  iconType,
  title,
  description,
  read,
  dateTime,
}) {
  const createdAt = generateTimestampOutput(dateTime);
  return (
    <Flex
      align="center"
      justify="space-between"
      className={`block cursor-pointer rounded-lg border px-2 py-3 sm:px-6 md:flex ${
        read ? "bg-grey-10" : "bg-green-50"
      }`}
    >
      <Flex className="gap-1 sm:gap-4">
        <Col
          id="icon-wrapper"
          className={`grid h-10 w-10 place-content-center items-center rounded-lg bg-green-500 sm:h-12  sm:w-12`}
        >
          <IconNotification iconType={iconType} />
        </Col>
        <Col>
          <h6 className="font-semibold sm:text-base">{title}</h6>
          <h6 className="font-medium text-grey-200 sm:text-sm">
            {description}
          </h6>
        </Col>
      </Flex>
      <Flex
        align="center"
        justify="space-between"
        className="px-2 pt-2 md:px-0 md:pt-0"
      >
        <p className="me-2 text-xs text-grey-200 lg:me-12">{createdAt}</p>
        <FaTrashCan className="cursor-pointer text-base text-negative hover:text-red-600 lg:text-lg" />
      </Flex>
    </Flex>
  );
}

function IconNotification({ iconType }) {
  const getIcon = () => {
    switch (iconType) {
      case "forum":
        return PiChatsCircle;
      case "schedule":
        return PiCalendarCheckBold;
      case "article":
        return HiOutlineNewspaper;
      case "confirm":
        return CgProfile;
      default:
        return TbExclamationCircle;
    }
  };
  const Icon = getIcon();
  return (
    <>
      <Icon className="h-5 w-5 text-white sm:h-7 sm:w-7" />
    </>
  );
}
