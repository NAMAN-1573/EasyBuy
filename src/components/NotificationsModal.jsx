// NotificationsModal.jsx
import React from 'react';
import SuprSendInbox from '@suprsend/react-inbox';
import 'react-toastify/dist/ReactToastify.css';

const NotificationsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600">
          &times;
        </button>
        <SuprSendInbox
          workspaceKey="<workspace_key>"
          subscriberId="<subscriber_id>"
          distinctId="<distinct_id>"
        />
      </div>
    </div>
  );
};

export default NotificationsModal;
