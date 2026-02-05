export const Avatar = ({ user }) => <p className="avatar">{user}</p>;

export const AvatarGroup = ({ team, truncate }) => {
  if (!truncate) {
    return team.map((user) => <Avatar key={user} user={user} />);
  }
  
  const teamLength = team.length;

  if ((teamLength) => 3) {
    return (
      <>
        {team.slice(0, 2).map((user) => (
          <Avatar key={user} user={user} />
        ))}
        <Avatar user={`+${teamLength-2}`} />
      </>
    );
  }
  return;
};
