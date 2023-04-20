import { Table as AntdTable } from "antd";
import { TableProps } from "antd/es/table";

import { DEFAULT_PAGINATION_PAGE_SIZE_LIMIT } from "@/shared/constants/limits";

type TablePropsType = {};

export const Table = <T extends object>({ ...rest }: TablePropsType & TableProps<T>) => (
  <AntdTable<T>
    pagination={{ position: ["bottomCenter"], defaultPageSize: DEFAULT_PAGINATION_PAGE_SIZE_LIMIT }}
    {...rest}
  />
);
