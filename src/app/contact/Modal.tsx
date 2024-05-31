"use client";

import React from "react";
import PropTypes from "prop-types";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

const Modal: React.FC<ModalProps> = ({
  isVisible,
  onClose,
  title,
  message,
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-black p-8 rounded-2xl shadow-md shadow-primary max-w-md w-full mx-4 z-50 relative">
        <h2 className="text-white text-lg font-bold mb-4">{title}</h2>
        <p className="text-gray-400 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="bg-accent py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary hover:bg-tertiary"
        >
          Close
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Modal;
