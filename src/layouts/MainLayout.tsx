import { Outlet } from "react-router";

import { Header } from "@/components";

const MainLayout = () => {
  return (
    <div className="font-display min-h-screen bg-grey-50 dark:bg-blue-950">
      {/* header */}
      <Header />

      {/* main */}
      <main className="min-h-screen ">
        <div className="mt-10 pb-10 max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
export default MainLayout;
