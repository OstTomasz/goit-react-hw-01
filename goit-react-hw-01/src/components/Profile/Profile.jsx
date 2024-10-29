import css from "./Profile.module.css";

export const Profile = () => {
  return (
    <article className={css.profile}>
      <div className={css.main}>
        <img
          className={css.image}
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
        />
        <p className={css.name}>Petra Marica</p>
        <p className={css.info}>@pmarica</p>
        <p className={css.info}>Salvador, Brasil</p>
      </div>

      <ul className={css.stats}>
        <li className={css.stat}>
          <span className={css.statName}>Followers</span>
          <span className={css.statDesc}>1000</span>
        </li>
        <li className={css.stat}>
          <span className={css.statName}>Views</span>
          <span className={css.statDesc}>2000</span>
        </li>
        <li className={css.stat}>
          <span className={css.statName}>Likes</span>
          <span className={css.statDesc}>3000</span>
        </li>
      </ul>
    </article>
  );
};
