import MeasurementsView from '../measurements/MeasurementsView';
import styles from './Container.module.css'
import {useHttpHook} from 'alten-react-http-hook'
import { getStatusInfo, IStatusInfo, isStatusInfo } from '../http/requests';


export const Home = () => {
    const statusinfo = useHttpHook<IStatusInfo>(getStatusInfo, {
    });

    if(statusinfo.loading)
    return <div>Loading results</div>

    if(statusinfo.error)
    return <div>Error retrieving results</div>

    return (
        <div className={styles.container}>
            <div>Home!</div>
            <MeasurementsView />
        </div>
    );
}

export default Home;