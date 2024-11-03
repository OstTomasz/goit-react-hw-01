import css from "./Profile.module.css";

const Avatar = ({ src, alt }) => {
  return <img className={css.image} src={src} alt={alt} />;
};

const Author = ({ avatar, username, tag, location }) => {
  return (
    <div className={css.main}>
      <Avatar src={avatar} alt={username} />
      <p className={css.name}>{username}</p>
      <p className={css.info}>{tag}</p>
      <p className={css.info}>{location}</p>
    </div>
  );
};
const Stats = ({ stats }) => {
  return (
    <ul className={css.stats}>
      <li className={css.stat}>
        <span className={css["stat-name"]}>Followers</span>
        <span className={css["stat-desc"]}>{stats.followers}</span>
      </li>
      <li className={css.stat}>
        <span className={css["stat-name"]}>Views</span>
        <span className={css["stat-desc"]}>{stats.views}</span>
      </li>
      <li className={css.stat}>
        <span className={css["stat-name"]}>Likes</span>
        <span className={css["stat-desc"]}>{stats.likes}</span>
      </li>
    </ul>
  );
};

export const Profile = (props) => {
  const {
    profile: { avatar, username, tag, location, stats },
  } = props;

  return (
    <article className={css.profile}>
      <Author
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
      />
      <Stats stats={stats} />
    </article>
  );
};
