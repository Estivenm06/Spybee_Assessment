export const Avatar = ({ user }) => (
  <div className="hex-wrapper">
      <p className="avatar">{user}</p>
  </div>
);

export const AvatarGroup = ({ team, truncate, mobile }) => {
  if (!truncate) {
    return team.map((user) => <Avatar key={user} user={user} />);
  }

  const teamLength = team.length;

  if (mobile) {
    if ((teamLength) => 2) {
      return (
        <>
          {team.slice(0, 2).map((user) => (
            <Avatar key={user} user={user} />
          ))}
          <Avatar user={`+${teamLength - 2}`} />
        </>
      );
    }
  } else {
    if ((teamLength) > 4) {
      return (
        <>
          {team.slice(0, 4).map((user) => (
            <Avatar key={user} user={user} />
          ))}
          <Avatar user={`+${teamLength - 4}`} />
        </>
      );
    }
  }

  return team.map((user) => <Avatar key={user} user={user} />);
};
