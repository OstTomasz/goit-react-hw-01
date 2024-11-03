import { Profile } from "./components/Profile/Profile.jsx";
import userData from "./userData.json";

// import { FriendList } from "./components/FriendList/FriendList.jsx";
// import friends from "./friends.json";

import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory.jsx";
import transactions from "./transactions.json";

export const App = () => {
  return (
    <main>
      <Profile profile={userData} />
      {/* <FriendList friends={friends} /> */}
      <TransactionHistory items={transactions} />
    </main>
  );
};
