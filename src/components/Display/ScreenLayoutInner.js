import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import { Nodes } from "UserPages/Nodes";
import { HighSites } from "UserPages/HighSites";
import { Login } from "UserPages/Login";
import { Settings } from "UserPages/Settings";
import { Dashboard } from "UserPages/Dashboard";
import { Account } from "UserPages/Account";
import { layoutColor, fontType } from "components/Display/feutures";

const Pages = [
  { page: Nodes, path: "/Nodes" },
  { page: HighSites, path: "/HighSites" },
  { page: Account, path: "/Account" },
  { page: Dashboard, path: "/Dashboard" },
  { page: Settings, path: "/Settings" },
  { page: Login, path: "/" },
];

export const ScreenLayoutInner = () => {
  return (
    <div
      style={{ backgroundColor: layoutColor, fontFamily: fontType }}
      className="rounded shadow-md min-h-screen w-screen p-2 mt-1"
    >
      <Switch>
        <Route path={Pages[0].path}>
          <Nodes />
        </Route>
        <Route path={Pages[1].path}>
          <HighSites />
        </Route>
        <Route path={Pages[2].path}>
          <Account />
        </Route>
        <Route path={Pages[3].path}>
          <Dashboard />
        </Route>
        <Route path={Pages[4].path}>
          <Settings />
        </Route>
        <Route path={Pages[5].path}>
          <Login />
        </Route>
      </Switch>
    </div>
  );
};
