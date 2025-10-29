import { Table } from "antd";

const CustomTable = ({ columns, data, pagination }) => {
  return <Table columns={columns} data={data} pagination={pagination} />;
};

export default CustomTable;
