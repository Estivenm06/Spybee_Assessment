const dateFormat = (dateString) => {
  const options = { year: "numeric", month: "short", day: "2-digit" };
  return new Date(dateString).toLocaleDateString("es-ES", options);
};

const teamFormat = (users) => {
  return users.map(
    ({ name, lastName }) => name.substring(0, 1) + lastName.substring(0, 1),
  );
};

export { dateFormat, teamFormat };
