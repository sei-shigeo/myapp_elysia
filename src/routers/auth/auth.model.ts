import Elysia, { t } from "elysia";

const auth = t.Object({
  id: t.String(),
  name: t.String(),
  email: t.String(),
  password: t.String(),
});

export type authType = (typeof auth)["static"];

const app = new Elysia();
export const authModel = app.model({
  "auth.signup": auth,
  "auth.signin": t.Omit(auth, ["name"]),
});
