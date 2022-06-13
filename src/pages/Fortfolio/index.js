import {
  faAngleDown,
  faEye,
  faHeart,
  faPercent,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import classNames from "classnames/bind";
import Button2 from "../../component/Button2";
import styles from "./FortfolioStyles.module.scss";
import ListCoinFortfolio from "./ListCoinFortfolio";
import { useEffect, useState } from "react";
import ProductsApi from "../../api/ProductsApi";

const cx = classNames.bind(styles);

function Fortfolio() {
  const [openSearch, setOpenSearch] = useState(false);
  const [searchCoin, setSearchCoin] = useState("");
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const fetchCoin = async () => {
      const listCoin = await ProductsApi.getAll("/");
      setCoins(listCoin);
    };
    fetchCoin();
  }, []);

  const handleOpen = () => {
    setOpenSearch(true);
  };

  const handleClose = () => {
    setOpenSearch(false);
  };

  const listCoinFilter = coins.filter((coin) =>
    coin.symbol.toUpperCase().includes(searchCoin.toUpperCase())
  );

  var listCoinRender = [];
  for (var i = 0; i < 9; i++) {
    if (listCoinFilter[i] !== undefined) {
      listCoinRender.push(listCoinFilter[i]);
    }
  }

  console.log(listCoinRender);

  const hanldeSearch = (e) => {
    setSearchCoin(e.target.value);
  };
  return (
    <div className={cx("container")}>
      <div className={cx("inner")}>
        <div className={cx("header-porftfolio")}>
          <div className={cx("header-left")}>
            My Portfolio &nbsp;
            <FontAwesomeIcon icon={faAngleDown} />
            &nbsp;
            <h3>main</h3>
          </div>
          <div className={cx("header-right")}>
            <div className={cx("icon")}>
              <FontAwesomeIcon icon={faEye} size="1x" />
            </div>{" "}
            <div className={cx("icon")}>
              <FontAwesomeIcon icon={faPercent} size="1x" />
            </div>
            <Dialog
              disableEscapeKeyDown
              open={openSearch}
              onClose={handleClose}
              className={cx("duc-daialog")}
            >
              <DialogContent sx={{ backgroundColor: "#272727" }}>
                <div className={cx("title-search")}>
                  <FontAwesomeIcon icon={faHeart} color="#f12007" /> Search your
                  favorite coin
                  <FontAwesomeIcon icon={faHeart} color="#f12007" />
                </div>
              </DialogContent>
              <DialogActions
                sx={{
                  backgroundColor: "#272727",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <input
                  className={cx("input-search")}
                  type="text"
                  placeholder="Coin Name?"
                  value={searchCoin}
                  onChange={(e) => hanldeSearch(e)}
                />
                <ul className={cx("list-coin-search")}>
                  {listCoinRender.map((coin) => {
                    return (
                      <li key={coin.id} className={cx("coin-item")}>
                        <img src={coin.image} alt="img"></img>
                        &nbsp;&nbsp;&nbsp;
                        <div>
                          {coin.name} &nbsp; ( {coin.symbol?.toUpperCase()} )
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </DialogActions>
            </Dialog>
            <div onClick={handleOpen}>
              <Button2 text="Add New Coin" />
            </div>
          </div>
        </div>

        <div className={cx("body-porftfolio")}>
          <div className={cx("body-item")}>
            <div className={cx("price")}>$141</div>
            <div className={cx("text")}>Total Balance</div>
          </div>
          <div className={cx("body-item")}>
            <div className={cx("price")}>$141</div>
            <div className={cx("text")}>24h Portfolio Change (51%)</div>
          </div>
          <div className={cx("body-item")}>
            <div className={cx("price")}>$141</div>
            <div className={cx("text")}>Total Profit Loss (-)</div>
          </div>
        </div>

        <table className={cx("list-coin-portfolio")}>
          <thead>
            <tr className={cx("header-list-coin")}>
              <th className={cx("row", "row1")}>#</th>
              <th className={cx("row", "row2")}>Crypto</th>
              <th className={cx("row", "row3")}>Symbol</th>
              <th className={cx("row", "row4")}>Price</th>
              <th className={cx("row", "row5")}>1h</th>
              <th className={cx("row", "row6")}>24h</th>
              <th className={cx("row", "row7")}>7d</th>
              <th className={cx("row", "row8")}>kt cap</th>
              <th className={cx("row", "row9")}>Holding</th>
              <th className={cx("row", "row10")}>PNL</th>
            </tr>
          </thead>
          <ListCoinFortfolio />
        </table>
      </div>
    </div>
  );
}

export default Fortfolio;
