use gamesDB;

db.users.remove({});

db.users.insert([
  { player: "Connor"},
  { player: "Daniel"},
  { player: "Brian"},
  { player: "Ruaridh"}
]);
