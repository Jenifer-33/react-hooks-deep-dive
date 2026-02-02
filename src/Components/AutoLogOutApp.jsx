import { useEffect, useRef, useState } from "react";

const AutoLogOutApp = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [timer, setTimer] = useState(10);
  const timeRef = useRef(null);
  useEffect(() => {
    if (!isLogIn) return;
    const resetTimer = () => setTimer(10);
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("click", resetTimer);
    return () => {
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("click", resetTimer);
    };
  }, [isLogIn]);
  useEffect(() => {
    if (!isLogIn) return;
    if (timer == 0) {
      console.log("time is up 10sec");
      setIsLogIn(false);
      setTimer(10);
      return;
    }
    timeRef.current = setTimeout(() => {
      setTimer((preV) => preV - 1);
    }, 1000);
    return () => clearTimeout(timeRef.current);
  }, [timer, isLogIn]);

  return (
    <div>
      {isLogIn ? (
        <div>
          <h2>Welcome Divya!!</h2>
          <h3>Auto Logout in :{timer}</h3>
          {timer <= 3 && (
            <p style={{ color: "red" }}>you will be logged out soon</p>
          )}
        </div>
      ) : (
        <div>
          <h3>Please login to continue</h3>
          <button onClick={() => setIsLogIn(true)}>Login</button>
        </div>
      )}
    </div>
  );
};
export default AutoLogOutApp;
