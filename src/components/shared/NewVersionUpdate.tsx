import { updateSWEvent } from '@/libs/events';
import { updateSW } from '@/libs/registerSW';
import { useEffect, useState } from 'react';
import ConfirmDialog from './ConfirmDialog';

const NewVersionUpdate: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.addEventListener(updateSWEvent.type, handleUpdateSWEvent);
    return () => {
      document.removeEventListener(updateSWEvent.type, handleUpdateSWEvent);
    };
  }, []);

  const handleCancel = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    setOpen(false);
    updateSW();
  };

  const handleUpdateSWEvent = () => {
    setOpen(true);
  };

  return (
    <ConfirmDialog
      open={open}
      title="New Content Available"
      description="Reload the page the see the updates!"
      onCancel={handleCancel}
      onConfirm={handleConfirm}
      cancelButtonTitle="Later"
      confirmButtonTitle="Reload"
    />
  );
};

export default NewVersionUpdate;
