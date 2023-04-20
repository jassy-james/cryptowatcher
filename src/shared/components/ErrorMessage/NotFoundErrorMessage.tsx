import { Button } from "antd";
import { useNavigate } from "react-router-dom";

import { BaseErrorMessage } from "@/shared/components/ErrorMessage/BaseErrorMessage";

import { routePaths } from "@/shared/constants/routePaths";

export const NotFoundErrorMessage = () => {
  const navigate = useNavigate();

  return (
    <BaseErrorMessage
      status="404"
      title="404"
      subTitle="Ресурс не найден"
      extra={
        <Button type="primary" onClick={() => navigate(routePaths.root)}>
          На главную
        </Button>
      }
    />
  );
};
