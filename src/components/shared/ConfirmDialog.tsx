import { useBreakpoint } from '@/libs/useBreakpoint';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  open: boolean;
  title: ReactNode;
  description: ReactNode;
  onCancel: () => void;
  onConfirm: () => void;
  cancelButtonTitle: string;
  confirmButtonTitle: string;
  loading?: boolean;
}

const ConfirmDialog: React.FC<Props> = (props) => {
  const md = useBreakpoint('md');

  return (
    <Dialog
      open={props.open}
      onClose={props.onCancel}
      PaperProps={{ sx: { minWidth: md ? 420 : 300 } }}
    >
      <DialogTitle
        sx={{ textAlign: md ? 'left' : 'center', pb: 1 }}
        variant="h6"
      >
        {props.title}
      </DialogTitle>
      <DialogContent sx={{ textAlign: md ? 'left' : 'center' }}>
        {props.description}
      </DialogContent>
      <DialogActions>
        <Button
          variant="text"
          onClick={props.onCancel}
          disabled={props.loading}
          sx={{ width: md ? 'auto' : '50%', mr: 0.5 }}
        >
          {props.cancelButtonTitle}
        </Button>
        <Button
          variant="contained"
          onClick={props.onConfirm}
          disabled={props.loading}
          sx={{ width: md ? 'auto' : '50%', ml: 0.5 }}
          disableElevation
        >
          {props.confirmButtonTitle}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
