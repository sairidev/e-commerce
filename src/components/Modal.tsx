import { createPortal } from 'react-dom';
import '../styles/Modal.scss';

function Modal({ children }: { children: React.ReactElement }) {
  return createPortal(
    <div id='modal'>{children}</div>,
    document.getElementById('portal')!
  );
}

export default Modal;
