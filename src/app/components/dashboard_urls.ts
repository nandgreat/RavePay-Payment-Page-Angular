import { API_URL } from "../services/app-config";

export let dashboard_urls = {
    isOpening: {
        get: API_URL + "wallettransaction/getday",
        start: API_URL + "wallettransaction/startday",
        add: API_URL + "daystart/add"
    },
    transactiontype: {
          add: API_URL + "wallettransaction/add",
          get: API_URL + "transactioncategories/get",
          list: API_URL + "transactioncategories/list",
          update: API_URL + "transactioncategories/update",
    },
    transactions: {
          add: API_URL + "wallettransaction/add",
          get: API_URL + "transactioncategories/get",
          gettransaction: API_URL + "autobot/gettransaction",
          updatepayment: API_URL + "autobot/updatepayment",
          list: API_URL + "wallettransaction/list",
          count: API_URL + "wallettransaction/transactioncount",
          update: API_URL + "transactioncategories/update",
          today_transaction: API_URL + "wallettransaction/gettodaysummary"
    },
    walletBalance: {
          add: API_URL + "walletbalance/add",
          get: API_URL + "walletbalance/get",
          list: API_URL + "walletbalance/list",
          update: API_URL + "walletbalance/update",
          singleBalance: API_URL + "walletbalance/singlebalance",
    }
  }
