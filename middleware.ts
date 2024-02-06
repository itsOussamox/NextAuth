import authConfig from "@/auth.config"
import NextAuth from "next-auth"
import {
    DefaultLoggedRoute,
    DefaultNotLoggedRoute,
    NotLoggedRoutes,
    ApiAuthRoutes,
    PublicRouted,
} from "@/routes"

const { auth } = NextAuth(authConfig)


export default auth((req) => {
    const { nextUrl } = req;
    const isLogged = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(ApiAuthRoutes);
    const isPublicRoute = nextUrl.pathname === PublicRouted;
    const isAuthRoute = NotLoggedRoutes.includes(nextUrl.pathname);

    if (isApiAuthRoute)
        return null;
    //
    if (isLogged && isAuthRoute) { 
        return Response.redirect(new URL(DefaultLoggedRoute, nextUrl));
    }
    if (!isLogged && !isPublicRoute && !isAuthRoute)
        return Response.redirect(new URL(DefaultNotLoggedRoute, nextUrl));
})

// Optionally, don't invoke Middleware on some paths
export const config = { 
matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}