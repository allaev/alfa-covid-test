import {parseKeyString} from '../../utils/utils';
import InfoListItem from '../info-list-item/info-list-item';
import classes from './styles/info-list.module.scss';

const InfoList = ({infoData}) => {
  return (
    <div className={classes["info-list"]}>
      {
        Object.keys(infoData).map(el => {
          return (
            <InfoListItem
              key={el}
              dataKey={parseKeyString(el)}
              dataVal={infoData[el]}
            />
          )
        })
      }
    </div>
  )
}

export default InfoList;