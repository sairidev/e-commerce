import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Modal from './Modal';
import Table from './Table';
import { IoBagCheckOutline, IoCartOutline } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';
import '../styles/Layout.scss';

function Layout({ children }: { children: React.ReactNode }) {
  const path = useLocation().pathname;
  const [seeModal, setSeeModal] = useState(false);

  window.addEventListener('keydown', (e) => {
    if (e.keyCode === 27 && e.key === 'Escape') {
      setSeeModal(false);
    }
  });

  return (
    <>
      <header>
        <h1>
          <Link to={'/'}>OOHLALA</Link>
        </h1>
        <div>
          {path !== '/checkout' && (
            <span className='btn' onClick={() => setSeeModal(!seeModal)}>
              <IoCartOutline />
            </span>
          )}
          <span className='btn' onClick={() => setSeeModal(false)}>
            <Link to={'/checkout'}>
              <IoBagCheckOutline />
            </Link>
          </span>
        </div>
      </header>
      <main onClick={() => setSeeModal(false)}>{children}</main>
      {seeModal && path !== '/checkout' ? (
        <Modal>
          <>
            <span className='btn' onClick={() => setSeeModal(false)}>
              <AiOutlineClose />
            </span>

            <Table />
          </>
        </Modal>
      ) : null}
      <footer>
        &copy; {new Date().getFullYear()} oohlala | All rights reserved.
      </footer>
    </>
  );
}

export default Layout;
