// import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <img src={friend.avatar} alt={friend.name} width="48" />
            <p>{friend.name}</p>
            <p>{friend.isOnline ? "Online" : "Offline"}</p>
          </li>
        );
      })}
    </ul>
  );
};
