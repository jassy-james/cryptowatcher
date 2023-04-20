import { ColumnsType } from "antd/es/table";
import cn from "classnames";
import { useMemo } from "react";

import { Market } from "@/shared/api";

export const useColumnConfig = () =>
  useMemo<ColumnsType<Market>>(
    () => [
      {
        title: "Идентификатор",
        key: "id",
        dataIndex: "id",
        render: (text) => <span>{text}</span>,
        width: "25%",
      },
      {
        title: "Биржа",
        key: "exchange",
        dataIndex: "exchange",
        render: (text) => <span>{text}</span>,
        width: "25%",
      },
      {
        title: "Монета",
        key: "pair",
        dataIndex: "pair",
        render: (text) => <span>{text}</span>,
        width: "25%",
      },
      {
        title: "Статус",
        key: "active",
        dataIndex: "active",
        render: (status: boolean) => (
          <span
            className={cn({
              "active-indicator": status,
              "error-indicator": !status,
            })}
          >
            {status ? "активен" : "не активен"}
          </span>
        ),
        width: "25%",
      },
    ],
    [],
  );
