import AppRouter from "./AppRouter";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserDetail, logOut } from "./redux/user/usersSlice";

import "./App.css";
import { useGetUserShortDetailQuery } from "./redux/services/authenticationApi";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const { data: userShortDetail, error: error } = useGetUserShortDetailQuery(
    localStorage.getItem("userToken") || ""
  );

  useEffect(() => {
    if (error) {
      console.log(error);
    } else if (isLoggedIn && userShortDetail) {
      dispatch(getUserDetail(userShortDetail));
      console.log(userShortDetail);
    } else if (!isLoggedIn) {
      dispatch(logOut());
    }
  }, [isLoggedIn, userShortDetail]);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
