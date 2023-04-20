import { Button } from "antd";

import { BaseErrorMessage } from "@/shared/components/ErrorMessage/BaseErrorMessage";

export const NetworkErrorMessage = () => {
  const reloadPage = () => window.location.reload();

  return (
    <BaseErrorMessage
      status="500"
      title="500"
      subTitle="Сетевая ошибка"
      extra={
        <Button type="primary" onClick={() => reloadPage()}>
          Перезагрузить страницу
        </Button>
      }
    />
  );
};
