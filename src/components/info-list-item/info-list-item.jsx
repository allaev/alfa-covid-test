import PropTypes from 'prop-types';
import classes from './styles/info-list-item.module.scss';

const InfoListItem = ({dataKey, dataVal}) => {
  return dataVal ? (
    <div className={classes["info-list-item"]}>
      <p>{dataKey}: {dataVal}</p>
    </div> 
  ): null
}

export default InfoListItem;

InfoListItem.propTypes = {
	dataKey: PropTypes.string.isRequired,
	dataVal: PropTypes.oneOfType(
    [PropTypes.string, PropTypes.number]
  )
};

InfoListItem.defaultProps = {
  dataVal: null
};