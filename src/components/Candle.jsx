import { useEffect, useState } from "react";

const Candle = () => {
  const [wax, setWax] = useState(80);
  const [isDisabled, setIsDisabled] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    // setWax((prev) => prev - 1);
    // if (wax < 2) setIsDisabled(true);
    setWax(80);
  }

  useEffect(() => {
    let timeout = null;
    if (wax > 8) {
      timeout = setTimeout(() => setWax((prev) => prev - 1), 2000);
    }
    return () => clearTimeout(timeout);
  }, [wax]);

  return (
    <div className="block">
      <div>
        <button
          type="button"
          disabled={isDisabled}
          onClick={(e) => handleClick(e)}
        >
          Replace Candle {wax}
        </button>
      </div>
      <div className="block candleContainer">
        <div
          style={{
            height: wax + "vh",
          }}
          className="candle"
        >
          {wax > 8 && (
            <div className="flame">
              <div className="shadows" />
              <div className="top" />
              <div className="middle" />
              <div className="bottom" />
            </div>
          )}
          <div className="wick" />
          <div className="wax" />
        </div>
      </div>
    </div>
  );
};
export default Candle;
