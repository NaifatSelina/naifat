import { rest } from "msw";
import avatarImage from "../assets/default_profile_nqohxy.jpg"

const baseURL = "https://drf-api-app-65d9b6a619df.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 2,
        username: "user",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 2,
        profile_image:
          "https://res.cloudinary.com/dxs8nfjnp/image/upload/v1688116599/samples/default_profile_nqohxy.jpg",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];