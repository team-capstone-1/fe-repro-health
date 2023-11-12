import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";

export default function Breadcrumbs({ currentPage }) {
  return (
    <>
      <Breadcrumb
        className="pt-4 sm:pt-12"
        separator={
          <p className="-mt-[0.26em] text-2xl min-[991.98px]:-mt-1">»</p>
        }
        items={[
          {
            title: (
              <Link className="text-green-500" to="/">
                <p>Beranda</p>
              </Link>
            ),
          },
          {
            title: <p className="cursor-default">{currentPage}</p>,
          },
        ]}
      />
    </>
  );
}
