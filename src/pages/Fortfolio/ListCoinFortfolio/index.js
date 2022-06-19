import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless"; // different import path!
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceGrinSquintTears,
  faPenClip,
  faStar,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import styles from "./ListCoinFl.module.scss";

const cx = classNames.bind(styles);

function ListCoinFortfolio({
  none,
  id,
  rank,
  image,
  name,
  symbol,
  price,
  mkc,
  priceChange1h,
  priceChange24h,
  priceChange7d,
  coin,
  totalBalance,
  fQuantity,
  fDelete,
}) {
  const { handleSubmit, register } = useForm();
  const handleEdit = ({ quantity, price }) => {
    fQuantity(quantity, price, id);
  };
  const handleDeleteCoin = (id) => {
    fDelete(id);
  };

  const quantity = coin?.quantity;
  const percentage = (((quantity * price) / totalBalance) * 100).toFixed(0);
  const priceInput = coin?.priceInput;
  const PNL = ((price - priceInput) / priceInput) * 100;

  return (
    <tbody>
      <tr className={cx("container")}>
        <td className={cx("index")}>
          {rank} &nbsp;
          <FontAwesomeIcon icon={faStar} color="#fc6" />
        </td>
        <td className={cx("crypto-name")}>
          <img src={image} alt="img" />

          <Link
            className={cx("link-name-crypto")}
            to={{ pathname: "/coin-detail" + id, state: { id } }}
          >
            {name}
          </Link>
        </td>
        <td className={cx("symbol")}>{symbol?.toUpperCase()}</td>
        <td className={cx("price")}>{price}$</td>
        <td
          className={cx("1h", priceChange1h > 0 ? "changeGreen" : "changeRed")}
        >
          {priceChange1h?.toFixed(1)}%
        </td>
        <td
          className={cx(
            "24h",
            priceChange24h > 0 ? "changeGreen" : "changeRed"
          )}
        >
          {priceChange24h?.toFixed(1)}%
        </td>
        <td
          className={cx(
            "7day",
            priceChange7d > 0 ? "changeGreen" : "changeRed"
          )}
        >
          {priceChange7d?.toFixed(1)}%
        </td>
        <td className={cx("market-cap")}>{mkc?.toLocaleString()}$</td>
        <td className={cx("hold")}>
          <div>
            {none ? "..." : (quantity * price)?.toFixed(0)}$ &nbsp; (
            {percentage}%)
          </div>
          <div>
            {quantity}
            {symbol.toUpperCase()}
          </div>
          <Tippy
            trigger="click"
            interactive
            render={(attrs) => (
              <div className={cx("box-quantity")} tabIndex="-1" {...attrs}>
                <form
                  className={cx("form")}
                  onSubmit={handleSubmit(handleEdit)}
                >
                  <input
                    type="number"
                    placeholder="quantity"
                    {...register("quantity")}
                  />
                  <input
                    type="number"
                    placeholder="initial price"
                    {...register("price")}
                  />
                  <button type="submit">Okkkkk</button>
                </form>
              </div>
            )}
          >
            <div className={cx("edit")}>
              <FontAwesomeIcon icon={faPenClip} className={cx("edit-icon")} />
            </div>
          </Tippy>
        </td>
        <td className={cx("PNL", PNL < 0 ? "changeRed" : "changeGreen")}>
          {none ? "..." : PNL?.toFixed(1)}% &nbsp;
          <Tippy
            trigger="click"
            interactive
            render={(attrs) => (
              <div className={cx("box-delete")} tabIndex="-1" {...attrs}>
                <div className={cx("delete-title")}>
                  U want to cut U'losses &nbsp;
                  <FontAwesomeIcon icon={faFaceGrinSquintTears} />
                </div>
                <button onClick={() => handleDeleteCoin(id)}>Okay</button>
              </div>
            )}
          >
            <span className={cx("delete")}>
              <FontAwesomeIcon
                icon={faTrashCan}
                className={cx("delete-icon")}
              />
            </span>
          </Tippy>
        </td>
      </tr>
    </tbody>
  );
}

export default ListCoinFortfolio;
