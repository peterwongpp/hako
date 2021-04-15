import Head from 'next/head';

function Cms({ scores }) {
  return (
    <>
      <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className='dropdown menu' data-dropdown-menu='data-dropdown-menu'>
            <li className='menu-text'>Hako</li>
          </ul>
        </div>
        <div className='top-bar-right'>
          <ul className='menu'>
            <li>
              <button type='button' className='button'>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Cms;
