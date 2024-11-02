import { Profile } from "./components/Profile/Profile";
import userData from "./userData.json";

export const App = () => {
  return (
    <main>
      <Profile profile={userData} />
    </main>
  );
};
