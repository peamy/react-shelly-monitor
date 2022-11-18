import MeasurementsView from '../measurements/MeasurementsView';
import styles from './Container.module.css'
import {useHttpHook} from 'alten-react-http-hook'
import { getStatusInfo, IStatusInfo, getStatuses } from '../http/requests';
import { Statuses, IStatusesProps } from '../Machines/Statuses';


export const Home = () => {
    const statusinfo = useHttpHook<IStatusInfo>(getStatusInfo, {
    });

    // const statuses = useHttpHook<IStatusInfo[]>(getStatuses, {
    // });

    if(statusinfo.loading)
    return <div>Loading results</div>

    if(statusinfo.error)
    return <div>Error retrieving results</div>

    if(statusinfo.result === undefined)
    return <div>Loading results</div>
    
    return (
        <div className={styles.container}>
            <div>Home!</div>
            <Statuses statuses={[statusinfo.result!]}/>
        </div>
    );
}

export default Home;