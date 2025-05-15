import { Toaster } from "react-hot-toast";
import AdminAuth from "@/app/components/adminauth";
import SidebarWrapper from "../components/sidebarwrappper";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminAuth>
      <section className="flex min-h-screen">
        {/* Hidden checkbox toggles sidebar */}
        <input
          type="checkbox"
          id="sidebar-toggle"
          className="peer hidden"
          aria-hidden="true"
        />

        {/* Sidebar */}
        <div
          className="
            fixed top-0 left-0 h-full bg-white  z-50
            w-64 sm:w-72
            mr-4
            transform -translate-x-full peer-checked:translate-x-0
            transition-transform duration-300 ease-in-out
            sm:translate-x-0
          "
        >
          <SidebarWrapper />
        </div>

        {/* Main Content */}
        <main className="flex-1 ml-0 sm:ml-[17rem] sm:ml-[19rem] p-4 sm:p-8 bg-gray-100 overflow-y-auto">
          {/* Hamburger toggle button */}
          <label
            htmlFor="sidebar-toggle"
            className="sm:hidden fixed top-4 left-4 z-60 p-1 bg-gray-800 text-white rounded-md cursor-pointer"
            aria-label="Toggle sidebar"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </label>

          {/* Overlay to close sidebar */}
         <label
  htmlFor="sidebar-toggle"
  className="sm:hidden fixed top-4 left-4 z-[9999] p-2 bg-gray-800 text-white rounded-md cursor-pointer"
  aria-label="Toggle sidebar"
>
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
</label>



          <Toaster position="bottom-right" reverseOrder={false} />
          <div className="max-w-full">{children}</div>
        </main>
      </section>
    </AdminAuth>
  );
}
