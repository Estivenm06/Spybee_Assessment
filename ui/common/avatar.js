export const Avatar = ({ user }) => (
  <div className="hex-wrapper">
    <p className="avatar">{user}</p>
  </div>
);

export const AvatarGroup = ({ team, truncate, mobile }) => {
  if (!truncate) {
    return (
      <div className="avatarContainer">
        {team.map((user) => (
          <Avatar key={user} user={user} />
        ))}
      </div>
    );
  }

  const teamLength = team.length;

  let result = (
    <div className="avatarContainer">
      {team.map((user) => (
        <Avatar key={user} user={user} />
      ))}
    </div>
  );

  if (mobile) {
    if (teamLength > 2) {
      result = (
        <div className="avatarContainer">
          {team.slice(0, 2).map((user) => (
            <Avatar key={user} user={user} />
          ))}
          <Avatar user={`+${teamLength - 2}`} />
        </div>
      );
    }
  } else {
    if (teamLength > 4) {
      result = (
        <div className="avatarContainer">
          {team.slice(0, 4).map((user) => (
            <Avatar key={user} user={user} />
          ))}
          <Avatar user={`+${teamLength - 4}`} />
        </div>
      );
    }
  }

  return result;
};
