import { Profile } from "./components/Profile/Profile";
import userData from "./userData.json";

import { FriendList } from "./components/FriendList/FriendList";
import friends from "./friends.json";

export const App = () => {
  return (
    <main>
      <Profile profile={userData} />
      <FriendList friends={friends} />
    </main>
  );
};
