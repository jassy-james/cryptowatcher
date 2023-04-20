import { Result } from "antd";
import { ResultProps } from "antd/es/result";

type ErrorMessagePropsType = {} & ResultProps;

export const BaseErrorMessage = ({ ...props }: ErrorMessagePropsType) => <Result {...props} />;
