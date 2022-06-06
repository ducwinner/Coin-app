import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { useState } from "react";
import Login from "../../../../features/Auth/components/Login";

const cx = classNames.bind(styles);

function Header() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTodoFormSubmit = (values) => {
    console.log("Form submit: ", values);
  };

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner-1")}>
        <div className={cx("item-name")}>
          Tiền ảo: &nbsp;
          <span>1342</span>
        </div>

        <div className={cx("item-name")}>
          Sàn giao dịch: &nbsp;
          <span>623</span>
        </div>

        <div className={cx("item-name")}>
          Giá trị vốn hoá thị trường: &nbsp;
          <span>1.226.906.803.860 US $</span>
        </div>
        <div className={cx("item-name")}>
          Lưu lượng 24H: &nbsp;
          <span>533.543.541.442 USD</span>
        </div>
        <div className={cx("item-name")}>
          Ưu thế: &nbsp;
          <span>BTC 43%</span>
        </div>
        <div className={cx("item-name")}>
          GAS: &nbsp;
          <span>11GWEI</span>
        </div>
      </div>
      <div className={cx("inner-2")}>
        <Link to="/" className={cx("logo")}>
          <img
            src="https://static.coingecko.com/s/coingecko-logo-white-99d39c22910707ffddb7aa7090753ca2089eb1813440286da14927a723b2d2d6.png"
            alt="logo"
          />
        </Link>
        <div className={cx("header-link-1")}>
          <NavLink to="/" className={cx("link-item")}>
            TIỀN MÃ HOÁ
          </NavLink>
          <NavLink to="/" className={cx("link-item")}>
            SÀN GIAO DỊCH
          </NavLink>
          <NavLink to="/" className={cx("link-item")}>
            NFT
          </NavLink>
          <NavLink to="/new" className={cx("link-item")}>
            NEWS
          </NavLink>
          <NavLink to="/coin" className={cx("link-item")}>
            COIN
          </NavLink>
          <NavLink to="/" className={cx("link-item")}>
            DETAIL
          </NavLink>
        </div>
        <div className={cx("header-link-2")}>
          <div className={cx("invest")}>DANH MỤC ĐẦU TƯ</div>
          <div className={cx("login")} onClick={handleClickOpen}>
            ĐĂNG NHẬP
          </div>
          <div className={cx("register")}>ĐĂNG KÝ</div>
        </div>
      </div>

      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogContent sx={{ backgroundColor: "#272727" }}>
          <DialogContentText></DialogContentText>
          <Login />
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#272727" }}>
          <Button
            sx={{
              fontSize: "1.8rem",
              fontWeight: "600",
              "&:hover": {
                backgroundColor: "#82a0bf",
              },
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </header>
  );
}

export default Header;
