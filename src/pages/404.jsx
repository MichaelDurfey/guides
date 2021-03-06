import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Link from 'gatsby-link';

function FourOhFour() {
  return (
    <div className='flexWrapper'>
      <div className='verticalAlign'>
        <h3>404 - Page not found</h3>
        <p>The page you were looking for could not be found.</p>
        <p>You can try searching for something, or</p>
        <Link to={ '/articles' }>
          <Button
            bsSize='large'
            className='button'
            >
            Go to the homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}

FourOhFour.displayName = 'FourOhFour';

export default FourOhFour;
