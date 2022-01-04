import { Backdrop, Fade, makeStyles, Modal } from "@material-ui/core";
import React, { useEffect } from "react";

export interface MODALP {
  modalOpen: boolean;
  title: string;
  para: string;
}

export const ExtensionModal: React.FC<{ modalData: MODALP }> = ({
  modalData,
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(modalData?.modalOpen || false);
    console.log("open", open);
  }, [modalData]);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <h2 id="transition-modal-title">{modalData?.title}</h2>
          <p id="transition-modal-description">{modalData?.para}</p>
          <button onClick={handleClose}>Close</button>
        </div>
      </Fade>
    </Modal>
  );
};

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "60%",
    wordBreak: "break-all",
  },
}));
