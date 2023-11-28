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
      className={`block rounded-lg border px-2 py-3 sm:px-6 lg:flex ${
        read ? "bg-grey-10" : "bg-green-50"
      }`}
    >
      <Flex className="gap-3">
        <Col
          id="icon-wrapper"
          className={`grid h-10 w-10 place-content-center items-center rounded-lg bg-green-500 px-5 sm:h-12  sm:w-12`}
        >
          <IconNotification iconType={iconType} />
        </Col>
        <Col className="flex flex-col">
          <h6 className="overflow-hidden text-ellipsis whitespace-nowrap pr-14 text-sm font-semibold md:text-base">
            {title}
          </h6>
          <h6 className="overflow-x-hidden text-ellipsis whitespace-nowrap pr-14 text-xs text-grey-200 md:text-sm">
            {description}
          </h6>
        </Col>
      </Flex>
      <Flex
        align="center"
        justify="space-between"
        className="overflow-hidden px-2 pt-2 lg:px-0 lg:pt-0"
      >
        <p className="me-2 text-xs  text-grey-200 lg:me-12">{createdAt}</p>
        <span>
          <FaTrashCan className="cursor-pointer text-base text-negative hover:text-red-600 lg:text-lg" />
        </span>
      </Flex>
    </Flex>
  );
}

function IconNotification({ iconType }) {
  const getIcon = () => {
    switch (iconType) {
      case "forum":
        return PiChatsCircle;
      case "jadwal-saya":
        return PiCalendarCheckBold;
      case "artikel":
        return HiOutlineNewspaper;
      case "janji-temu":
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
