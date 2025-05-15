'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  LuLayoutDashboard,
  LuBuilding2,
  LuCalendarCheck,
  LuNetwork,
  LuFileQuestion,
  LuNewspaper,
  LuSettings,
  LuLogOut,
  LuDownload,
  LuStar,
  LuVideo,
  LuPenLine,
  LuMailQuestion,
} from 'react-icons/lu';
import dmcilogo from './image/DMCI2019.png';
import { destroyCookie } from 'nookies';

interface AdminSidebarProps {
  pathname: string;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ pathname }) => {
  const router = useRouter();

  const handleNavigation = (url: string) => {
    // Close sidebar by unchecking the checkbox (if on mobile)
    const sidebarToggle = document.getElementById('sidebar-toggle') as HTMLInputElement | null;
    if (sidebarToggle && sidebarToggle.checked) {
      sidebarToggle.checked = false;
    }
    router.push(url);
  };

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <LuLayoutDashboard className="h-5 w-5 mr-2" /> },
    { name: 'Properties', path: '/admin/properties', icon: <LuBuilding2 className="h-5 w-5 mr-2" /> },
    { name: 'Schedules', path: '/admin/schedules', icon: <LuCalendarCheck className="h-5 w-5 mr-2" /> },
    { name: 'Applications', path: '/admin/applications', icon: <LuNetwork className="h-5 w-5 mr-2" /> },
    { name: 'FAQs', path: '/admin/faqs', icon: <LuFileQuestion className="h-5 w-5 mr-2" /> },
    { name: 'News & Updates', path: '/admin/news', icon: <LuNewspaper className="h-5 w-5 mr-2" /> },
    { name: 'Testimonials', path: '/admin/testimonials', icon: <LuStar className="h-5 w-5 mr-2" /> },
    { name: 'Videos', path: '/admin/videos', icon: <LuVideo className="h-5 w-5 mr-2" /> },
    { name: 'Contracts', path: '/admin/contracts', icon: <LuPenLine className="h-5 w-5 mr-2" /> },
    { name: 'Inquiries', path: '/admin/inquiries', icon: <LuMailQuestion className="h-5 w-5 mr-2" /> },
    { name: 'Download', path: '/admin/download', icon: <LuDownload className="h-5 w-5 mr-2" /> },
    { name: 'Settings', path: '/admin/settings', icon: <LuSettings className="h-5 w-5 mr-2" /> },
  ];

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('profile_id');
    sessionStorage.removeItem('user_id');

    destroyCookie(null, 'token');

    console.log('User logged out successfully.');

    window.location.href = '/auth/login';
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        className="fixed lg:relative top-0 left-0 h-full bg-white shadow-sm flex flex-col transition-transform duration-300 z-50"
      >
        <div className="p-4 text-xl font-semibold text-center">
          <Image src={dmcilogo} alt="DMCI LOGO" width={250} height={100} className="object-cover" />
        </div>

        <nav className="flex-1 p-4">
          <ul className="menu p-0 flex-grow space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleNavigation(item.path)}
                  className={`flex items-center justify-between w-full p-2 rounded ${pathname === item.path
                    ? 'bg-blue-700 text-white'
                    : 'hover:bg-blue-700 hover:text-white'
                    }`}
                >
                  <div className="flex">
                    {item.icon}
                    <span className="text-md ml-2">{item.name}</span>
                  </div>
                </button>
              </li>
            ))}

            <li
              className="p-2 rounded hover:bg-blue-700 hover:text-white"
              onClick={handleLogout}
            >
              <button className="flex items-center w-full">
                <LuLogOut className="h-5 w-5 mr-2" />
                <span className="text-md">Log out</span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default AdminSidebar;
