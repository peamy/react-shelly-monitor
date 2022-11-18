import { statSync } from "fs";
import { IStatusInfo } from "../http/requests";
import StatusView from "./StatusView";

export interface IStatusesProps {
  statuses?: IStatusInfo[];
}

export const Statuses: React.FunctionComponent<IStatusesProps> = (props) => {
  return (
    <div>
      {props.statuses?.map(status => (<StatusView key={status.id} status={status}/>))}
    </div>
  );
};
