import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";
import { ROLES } from "constants/roles";
import { ROUTES } from "constants/routes";

const roles = new Set([ROLES.ADMIN, ROLES.SUPER_ADMIN, ROLES.USER]);

export default withAuth(
  function middleware(req) {
    const role = req.nextauth.token?.role;
    // Redirect if they don't have the appropriate role
    if (
      req.nextUrl.pathname.startsWith("/admin") &&
      role !== ROLES.ADMIN &&
      role !== ROLES.SUPER_ADMIN
    ) {
      return NextResponse.redirect(new URL(ROUTES.NO_ACCESS, req.url));
    }
    if (
      req.nextUrl.pathname.startsWith("/super-admin") &&
      role !== ROLES.SUPER_ADMIN
    ) {
      return NextResponse.redirect(new URL(ROUTES.NO_ACCESS, req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) =>
        token?.role !== undefined && roles.has(token?.role as ROLES),
    },
  }
);

export const config = {
  matcher: ["/admin/:path*", "/super-admin/:path*"],
};
