import React, { useEffect } from "react";
import Snackbar from "./elements/snackbar/Snackbar"
import Header from './header'
import Main from "./Main"
import { useQuery, useMutation } from "@tanstack/react-query"
import { getAccount, logoutAccount } from '../apis'
import Alert from "./elements/alert/Alert"
import Dialog from './elements/dialog/Dialog'
import useAccountStore from '../store/account'

const App = () => {

  return (
    <>
      <Header
        title={"2024年選舉立法委員 承諾完善代理（課）教師工作權益政策"}
      />
      <Main />
      <Alert />
      <Snackbar />
      <Dialog />
    </>
  );
};

export default App;