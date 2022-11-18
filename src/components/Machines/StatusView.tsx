import { IStatusInfo } from "../http/requests";

export interface IStatusProps {
  status: IStatusInfo
}

const StatusView: React.FunctionComponent<IStatusProps> = (props) => {
  return (
    <div>
      <p>mac: {props.status.mac}</p>
      <p>serial: {props.status.serial}</p>
    </div>
  );
}

export default StatusView;