import classes from './styles/info-list-item.module.scss';

const InfoListItem = ({dataKey, dataVal}) => {
  return dataVal ? (
    <div className={classes["info-list-item"]}>
      <p>{dataKey}: {dataVal}</p>
    </div> 
  ): null
}

export default InfoListItem;