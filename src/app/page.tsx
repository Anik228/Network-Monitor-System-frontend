import { FC } from "react";
import Dashboard from "@/components/dashdoard/Dashboard";
import { AuthChecker } from "@/components/auth-checker";
import DashboardNMS from "./DashboardNMS/page";

const Home: FC = () => {
  return (
    <>
    {/* <AuthChecker>
        <Dashboard />
    </AuthChecker> */}
     <DashboardNMS />
    </>
  );
};
export default Home;
