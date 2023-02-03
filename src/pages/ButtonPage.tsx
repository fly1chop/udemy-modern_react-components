import Button from '../components/Button';
import { Variant } from '../components/Button';
import { GoBell, GoCloudDownload } from 'react-icons/go';
import React from 'react';

function ButtonPage() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('clicked', e.target);
  };

  const handleMouseEnter = () => {
    console.log('mouseenter');
  };

  return (
    <div>
      <div>
        <Button
          variant={Variant.primary}
          rounded
          className='mb-5'
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
        >
          <GoBell />
          Primary
        </Button>
      </div>
      <div>
        <Button variant={Variant.secondary} outline rounded>
          <GoCloudDownload />
        </Button>
      </div>
      <div>
        <Button variant={Variant.success} rounded>
          Success
        </Button>
      </div>
      <div>
        <Button variant={Variant.warning}>Warning</Button>
      </div>
      <div>
        <Button variant={Variant.danger} rounded outline>
          Danger
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
