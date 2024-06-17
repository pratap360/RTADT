import { Authenticated, GitHubBanner, Refine, WelcomePage } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { useNotificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import {authProvider, dataProvider, liveProvider } from "./providers";
import { Home,ForgotPassword,Login,Register, CompanyList, Create } from "./pages";

import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import Layout from "./components/layout";
import { resource } from "./config/resource";
import Edit from "./pages/companies/edit";
import TasksList from "./pages/tasks/list";
import CreateTasks from "./pages/tasks/create";
import EditTasks from "./pages/tasks/edit";



// const gqlClient = new GraphQLClient(API_URL);
// const wsClient = createClient({ url: WS_URL });

function App() {
  return (
    <BrowserRouter> 
      <GitHubBanner />
      <RefineKbarProvider>
          <AntdApp>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider}
                liveProvider={liveProvider}
                notificationProvider={useNotificationProvider}
                routerProvider={routerBindings}
                authProvider={authProvider}
                resources={resource}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "XHfVdx-gk9wQg-wQuxXd",
                  liveMode: "auto",
                }}
              >
                <Routes>
                  {/* <Route index element={<WelcomePage />} /> */}
                  
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route
                    element={
                      <Authenticated 
                      key="authenticated-layout"
                      fallback={<CatchAllNavigate to="/login"/>}
                      >
                        <Layout>
                          <Outlet/>
                        </Layout>
                      </Authenticated>
                    }>
                      <Route index element={<Home/>} />
                      <Route path="/companies">
                        <Route index element={<CompanyList />} />
                        <Route path="new" element={<Create/>} />
                        <Route path="edit/:id" element={<Edit/>} />
                      </Route>
                      <Route path="/tasks" element={
                      <TasksList>
                        <Outlet/>
                      </TasksList>
                    }> 
                        <Route path="new" element={<CreateTasks/>}/>
                        <Route path="edit/:id" element={<EditTasks/>}/>
                      </Route>
                    

                  </Route>
                </Routes>
                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </AntdApp>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
