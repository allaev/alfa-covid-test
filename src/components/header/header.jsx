import { Typography } from '@alfalab/core-components/typography';
import classes from './styles/header.module.scss'

const Header = () => {
  return (
    <div className={classes.header}>
      <Typography.Title view='large'>😷 COVID-19 cases info</Typography.Title>
    </div>
  )
}

export default Header;