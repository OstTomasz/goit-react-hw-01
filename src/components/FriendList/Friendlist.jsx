import clsx from "clsx";

import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  // return (
  //   <ul className={css["friend-list"]}>
  //     {friends.map((friend) => {
  //       return (
  //         <li className={css.friend} key={friend.id}>
  //           <img src={friend.avatar} alt={friend.name} width="100px" />
  //           <p className={css.name}>{friend.name}</p>
  //           <p
  //           // className={clsx(
  //           //   css.status,
  //           //   friend.isOnline ? css.online : css.offline
  //           // )}
  //           >
  //             {friend.isOnline ? "Online" : "Offline"}
  //           </p>
  //         </li>
  //       );
  //     })}
  //   </ul>
  // );
};
