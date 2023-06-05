import { Link } from 'react-router-dom';
import css from './ErrorMessage.module.css';

const ErrorMessage = () => (
  <div>
    <p className={css.text}>
      Oops! Something went wrong! Please try again later
    </p>
    <Link to={'/'} className={css.link}>
      Home
    </Link>
  </div>
);

export default ErrorMessage;
