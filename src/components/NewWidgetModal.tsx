import { useEffect } from "react";

interface NewWidgetModalProps {
  children: React.ReactNode;
  closeModal: () => void;
}

/**
 * A modal component that renders its children in a centered, darkened overlay.
 *
 * @param {React.ReactNode} children - The content to be rendered within the modal.
 * @param {function} closeModal - A callback function to close the modal.
 * @return {JSX.Element} The modal component.
 */
export const NewWidgetModal = ({ children, closeModal }: NewWidgetModalProps): JSX.Element => {

  // Add a class to the body element to prevent scrolling when the modal is open
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "visible";
    };
  } , []);

  return (
    <div
      className="fixed cursor-auto inset-0 !z-[9999] md:p-10 bg-black bg-opacity-40 flex justify-center items-center !transition-none !duration-0"
      onClick={closeModal}
    >
      <div
        data-testid="modal"
        className="modal relative overflow-y-auto shadow rounded-2xl bg-white dark:bg-darkBg md:max-w-[600px] max-w-[90vw] max-h-[90vh] p-2 opacity-100 transition-none duration-0"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {children}
      </div>
    </div>
    );
}