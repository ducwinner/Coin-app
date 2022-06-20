import {
  faAngleDown,
  faEye,
  faFaceFrown,
  faHeart,
  // faPercent,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useContext } from "react";

import Button2 from "../../component/Button2";
import styles from "./FortfolioStyles.module.scss";
import ListCoinFortfolio from "./ListCoinFortfolio";
import ProductsApi from "../../api/ProductsApi";
import { dataUsers } from "../../dataSource/Fortfolio";
import { ThemeContext } from "../../ThemeProvider";

const cx = classNames.bind(styles);

function Fortfolio() {
  const context = useContext(ThemeContext);
  let fortFoLioUser = [];
  if (context.login) {
    fortFoLioUser = dataUsers.filter(
      (item) => item.userId === context.dataUser.id
    )[0].data;
  }

  const [openSearch, setOpenSearch] = useState(false);
  const [searchCoin, setSearchCoin] = useState("");
  const [coins, setCoins] = useState([]);
  const [dataCoin, setDataCoin] = useState(fortFoLioUser);
  const [none, setNone] = useState(false);
  const [coinsFortfolio, setCoinFortfolio] = useState(() => ({
    list: [],
    total: 0,
    change24h: 0,
  }));

  useEffect(() => {
    const fetchCoin = async () => {
      const listCoin = await ProductsApi.getAll("/");
      setCoins(listCoin);
    };
    fetchCoin();
  }, []);

  useEffect(() => {
    // Tạo mảng chứa tên coin
    var arrNameCoin = dataCoin.reduce(function (total, item) {
      return total.concat(item.idcoin);
    }, []);
    // get data Coins của fortfolio
    const listFilter = coins.filter((item) => arrNameCoin.includes(item.id));
    // total số dư
    var totalBalance = listFilter.reduce((total, item) => {
      var quantity = dataCoin.filter((e) => {
        return e.idcoin === item.id;
      })[0].quantity;
      return (total += item.current_price * quantity);
    }, 0);

    // tính tổng Vốn thay đổi 24h
    var totalChange24h = listFilter.reduce((total, item) => {
      var quantity = dataCoin.filter((e) => {
        return e.idcoin === item.id;
      })[0].quantity;
      return (total += item.price_change_24h * quantity);
    }, 0);

    setCoinFortfolio({
      list: listFilter,
      total: totalBalance,
      change24h: totalChange24h,
    });
  }, [coins, dataCoin]);

  const handleOpenSearch = () => {
    setOpenSearch(true);
  };

  const handleCloseSearch = () => {
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

  const hanldeSearch = (e) => {
    setSearchCoin(e.target.value);
  };

  const handleAddCoin = (id, current_price) => {
    if (context.login) {
      let itemMatch = dataCoin.filter((item) => {
        return item.idcoin === id;
      }).length;
      if (itemMatch === 0) {
        setDataCoin((prev) => {
          return [
            ...prev,
            {
              idcoin: id,
              quantity: 0,
              priceInput: current_price,
            },
          ];
        });
        alert("thêm thành công rồi nhé");
      } else {
        alert("Đã có rồi bạn eeiiiiiiiiiii!");
      }
    } else {
      alert("Bro cần đăng ký tài khoản đã");
    }
  };

  const handleQuantity = (quantity, price, id) => {
    const newDatacoin = [];
    dataCoin.forEach((e, index) => {
      if (e.idcoin === id) {
        e.quantity = quantity;
        if (price !== "") {
          e.priceInput = price;
        }
        newDatacoin[index] = e;
      } else {
        newDatacoin[index] = e;
      }
    });
    setDataCoin(newDatacoin);
  };

  const totalPriceInput = dataCoin.reduce((total, item) => {
    return (total += item.priceInput * item.quantity);
  }, 0);

  const totalPNL = coinsFortfolio.total - totalPriceInput;

  const handleNone = () => {
    none ? setNone(false) : setNone(true);
  };

  const handleDelete = (id) => {
    const newDatacoin = [...dataCoin];
    dataCoin.forEach((item, index) => {
      if (item.idcoin === id) {
        newDatacoin.splice(index, 1);
      }
    });
    setDataCoin(newDatacoin);
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
            <div className={cx("icon")} onClick={handleNone}>
              <FontAwesomeIcon icon={faEye} size="1x" />
            </div>
            <Dialog
              disableEscapeKeyDown
              open={openSearch}
              onClose={handleCloseSearch}
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
                      <li
                        key={coin.id}
                        className={cx("coin-item")}
                        onClick={() =>
                          handleAddCoin(coin.id, coin.current_price)
                        }
                      >
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
            <div onClick={handleOpenSearch}>
              <Button2 text="Add New Coin" />
            </div>
          </div>
        </div>

        <div className={cx("body-porftfolio")}>
          <div className={cx("body-item")}>
            <div className={cx("price")}>
              {none ? (
                <span>
                  ... <FontAwesomeIcon icon={faFaceFrown} />
                  ...
                </span>
              ) : (
                "$" + coinsFortfolio.total?.toFixed(0)
              )}
            </div>
            <div className={cx("text")}>Total Balance</div>
          </div>
          <div className={cx("body-item")}>
            <div className={cx("price")}>
              {none ? (
                <span>
                  ... <FontAwesomeIcon icon={faFaceFrown} />
                  ...
                </span>
              ) : (
                "$" + coinsFortfolio.change24h?.toFixed(0)
              )}
            </div>
            <div className={cx("text")}>24h Portfolio Change</div>
          </div>
          <div className={cx("body-item")}>
            <div className={cx("price")}>
              {none ? (
                <span>
                  ... <FontAwesomeIcon icon={faFaceFrown} />
                  ...
                </span>
              ) : (
                "$" + totalPNL.toFixed(0)
              )}
            </div>
            <div className={cx("text")}>Total PNL (-)</div>
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
          {coinsFortfolio.list.map((item, index) => {
            return (
              <ListCoinFortfolio
                none={none}
                key={item.id}
                id={item.id}
                rank={index}
                image={item.image}
                name={item.name}
                symbol={item.symbol}
                price={item.current_price}
                mkc={item.market_cap}
                priceChange1h={item.price_change_percentage_1h_in_currency}
                priceChange24h={item.price_change_percentage_24h_in_currency}
                priceChange7d={item.price_change_percentage_7d_in_currency}
                coin={dataCoin?.filter((e) => e.idcoin === item.id)[0]}
                totalBalance={coinsFortfolio.total}
                fQuantity={handleQuantity}
                fDelete={handleDelete}
              />
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Fortfolio;
