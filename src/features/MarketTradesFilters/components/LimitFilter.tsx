import { InputNumber, Space } from "antd";

import "../styles/LimitFilter.scss";

const MAX_LIMIT_VALUE = 1000;

type LimitFilterPropsType = {
  defaultValue: number;
  onLimitFilterChange: (limit: number) => void;
};

export const LimitFilter = ({ defaultValue, onLimitFilterChange }: LimitFilterPropsType) => {
  const onInputNumberBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const {
      target: { value },
    } = e;

    const numberValue = +value;

    if (numberValue == null) return;

    if (numberValue > MAX_LIMIT_VALUE) {
      onLimitFilterChange(MAX_LIMIT_VALUE);
      return;
    }

    if (numberValue <= 0) {
      onLimitFilterChange(0);
    }

    onLimitFilterChange(numberValue);
  };

  return (
    <div className="limit-filter">
      <Space>
        <span>Лимит:</span>
        <InputNumber<number>
          type="number"
          defaultValue={defaultValue}
          max={MAX_LIMIT_VALUE}
          min={1}
          onBlur={onInputNumberBlur}
        />
      </Space>
    </div>
  );
};
