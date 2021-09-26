import { Typography } from '@alfalab/core-components/typography';
import PropTypes from 'prop-types';
import classes from './styles/header.module.scss'

const Header = ({headerText}) => {
  return (
    <div className={classes.header}>
      <Typography.Title view='large'>
        {headerText}
      </Typography.Title>
    </div>
  )
}

export default Header;

Header.propTypes = {
	headerText: PropTypes.string.isRequired
};
