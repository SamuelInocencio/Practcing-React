import PropTypes from 'prop-types';

import { Button } from './styles';

function DefaltButton({ children, theme, ...props }) {
  return (
    <Button {...props} theme={theme}>
      {children}
    </Button>
  );
}

DefaltButton.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
};

export default DefaltButton;
