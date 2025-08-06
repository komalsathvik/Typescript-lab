function createUser({ val1, val2 }: { val1: number; val2: number }): number {
  return val1 + val2;
}
console.log(createUser({ val1: 1, val2: 3 }));

export {};

type User = {
  name: string;
  email: string;
  isActive: boolean;
};
function newUser({ user }: { user: User }): User {
  console.log(user);
  return user;
}
newUser({
  user: { name: "sathvik", email: "sathvik@gmail.com", isActive: true },
});
