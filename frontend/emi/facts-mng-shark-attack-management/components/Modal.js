import React from "react";
import { MDText } from "i18n-react";
import i18n from "../i18n";
import { Modal, Backdrop, Fade, Button, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

// 🎨 Estilos con makeStyles (MUI v4)
const useStyles = makeStyles((theme) => ({
  backdrop: {
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 4, 2, 4),
    outline: "none",
    width: "90%",
    maxHeight: "90%",
    overflowY: "auto",
    textAlign: "center",
  },
}));

const ModalMui = ({ open, onClose, children, title }) => {
  const classes = useStyles();
  const user = useSelector(({ auth }) => auth.user);
  const T = new MDText(i18n.get(user.locale));

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className={classes.modal}
      open={open}
      onClose={(event, reason) => {
        if (reason === "backdropClick") return;
        onClose();
      }}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <header className="sticky top-0 z-50 bg-white">
            <h1>{title}</h1>
          </header>
          {children}
          <footer className="sticky p-3 bottom-0 z-50 bg-white">
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={onClose}
            >
              {T.translate("shark_attacks.stats.close")}
            </Button>
          </footer>
        </div>
      </Fade>
    </Modal>
  );
};

export default ModalMui;
