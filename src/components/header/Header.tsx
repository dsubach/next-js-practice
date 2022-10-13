import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import { ROUTES } from "constants/routes";
import { signOut, useSession } from "next-auth/react";
import { ROLES } from "constants/roles";
import { useRouter } from "next/router";

const navItems = [
  { title: "home", url: ROUTES.MAIN },
  { title: "locations", url: ROUTES.LOCATIONS },
];

export default function Header() {
  const session = useSession();
  // @ts-ignore
  const { role } = session.data?.user || {};
  const { pathname } = useRouter();

  const isLoggedIn = !!role as boolean;
  const isAdmin = role === ROLES.ADMIN;
  const isSuperAdmin = role === ROLES.SUPER_ADMIN;
  return (
    <AppBar component="nav" sx={{ backgroundColor: "#3a0943" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href={ROUTES.MAIN}>MUI</Link>
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map(({ title, url }) => (
            <Button
              key={title}
              sx={{ color: pathname === url ? "#d7a3b6" : "#fff" }}
            >
              <Link href={url}>{title}</Link>
            </Button>
          ))}
          {(isAdmin || isSuperAdmin) && (
            <Button
              sx={{ color: pathname === ROUTES.ADMIN ? "#d7a3b6" : "#fff" }}
            >
              <Link href={ROUTES.ADMIN}>Admin</Link>
            </Button>
          )}
          {isSuperAdmin && (
            <Button
              sx={{
                color: pathname === ROUTES.SUPER_ADMIN ? "#d7a3b6" : "#fff",
              }}
            >
              <Link href={ROUTES.SUPER_ADMIN}>Super Admin</Link>
            </Button>
          )}
          {isLoggedIn ? (
            <Button
              sx={{ color: "#fff" }}
              onClick={() => {
                signOut();
              }}
            >
              Sign out
            </Button>
          ) : (
            <Button
              sx={{ color: pathname === ROUTES.SIGN_IN ? "#d7a3b6" : "#fff" }}
            >
              <Link href={ROUTES.SIGN_IN}>Sign In</Link>
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
