import { auth } from "express-oauth2-jwt-bearer";

const authMiddleware = auth({
  audience: "https://book-store-api",
  issuerBaseURL: "https://dev-8t170oihv3duvbvq.us.auth0.com/",
});

export default authMiddleware;
