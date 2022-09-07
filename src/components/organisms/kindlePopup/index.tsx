import { Modal } from "@mui/material";
import React from "react";
import TypographyComponent from "../../atoms/typography";

interface KindlePopupProps {
  open: React.Dispatch<React.SetStateAction<boolean>>;
}

const KindlePopup = (props: KindlePopupProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {};

  const handleClose = () => {};
  
  return (
    <div>
      <Modal open={open}>
        <TypographyComponent text={"set up your kindle"} />
        {/* email details */}
        {/* buttons */}
      </Modal>
    </div>
  );
};

export default KindlePopup;
