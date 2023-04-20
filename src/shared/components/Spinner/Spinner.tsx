import { Spin } from "antd";

import "../../styles/Spinner.scss";

export const Spinner = () => (
  <div className="spinner">
    <Spin spinning size="large" />
  </div>
);
