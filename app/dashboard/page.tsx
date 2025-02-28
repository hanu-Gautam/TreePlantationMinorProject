"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Leaf,
  User,
  LogOut,
  Bell,
  Settings,
  Home,
  BarChart3,
  Calendar,
  Users,
  FileText,
  Heart,
  MapPin,
  TreesIcon as Tree,
} from "lucide-react"

export default function Dashboard() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    treesPlanted: 25,
    carbonOffset: 500, // in kg
    lastDonation: "2023-12-15",
  })

  const [activeTab, setActiveTab] = useState("overview")

  // Mock data for dashboard
  const recentActivities = [
    { id: 1, type: "donation", amount: "₹500", date: "2023-12-15", status: "completed" },
    { id: 2, type: "tree_planted", count: 5, location: "Bangalore", date: "2023-12-10", status: "completed" },
    { id: 3, type: "event_joined", name: "Community Planting Day", date: "2023-11-28", status: "completed" },
  ]

  const upcomingEvents = [
    {
      id: 1,
      name: "World Environment Day Plantation",
      date: "2024-06-05",
      location: "Delhi NCR",
      participants: 120,
    },
    {
      id: 2,
      name: "Corporate Planting Initiative",
      date: "2024-03-15",
      location: "Mumbai",
      participants: 75,
    },
    {
      id: 3,
      name: "School Awareness Program",
      date: "2024-04-22",
      location: "Chennai",
      participants: 200,
    },
  ]

  const plantationProjects = [
    {
      id: 1,
      name: "Urban Forest Initiative",
      location: "Delhi",
      treesPlanted: 5000,
      targetTrees: 10000,
      progress: 50,
    },
    {
      id: 2,
      name: "Coastal Mangrove Restoration",
      location: "Kerala",
      treesPlanted: 3500,
      targetTrees: 5000,
      progress: 70,
    },
    {
      id: 3,
      name: "Himalayan Reforestation",
      location: "Uttarakhand",
      treesPlanted: 8000,
      targetTrees: 15000,
      progress: 53,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="hidden md:flex md:flex-col md:w-64 md:fixed md:inset-y-0 bg-green-800 text-white">
        <div className="flex items-center h-16 px-4 bg-green-900">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-300" />
            <span className="text-xl font-bold">TreePlantation</span>
          </Link>
        </div>
        <div className="flex flex-col flex-grow overflow-y-auto">
          <nav className="flex-1 px-2 py-4 space-y-1">
            <Link
              href="/dashboard"
              className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                activeTab === "overview" ? "bg-green-700" : "hover:bg-green-700"
              }`}
              onClick={() => setActiveTab("overview")}
            >
              <Home className="mr-3 h-5 w-5" />
              Overview
            </Link>
            <Link
              href="/dashboard/donations"
              className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                activeTab === "donations" ? "bg-green-700" : "hover:bg-green-700"
              }`}
              onClick={() => setActiveTab("donations")}
            >
              <Heart className="mr-3 h-5 w-5" />
              My Donations
            </Link>
            <Link
              href="/dashboard/trees"
              className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                activeTab === "trees" ? "bg-green-700" : "hover:bg-green-700"
              }`}
              onClick={() => setActiveTab("trees")}
            >
              <Tree className="mr-3 h-5 w-5" />
              My Trees
            </Link>
            <Link
              href="/dashboard/events"
              className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                activeTab === "events" ? "bg-green-700" : "hover:bg-green-700"
              }`}
              onClick={() => setActiveTab("events")}
            >
              <Calendar className="mr-3 h-5 w-5" />
              Events
            </Link>
            <Link
              href="/dashboard/impact"
              className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                activeTab === "impact" ? "bg-green-700" : "hover:bg-green-700"
              }`}
              onClick={() => setActiveTab("impact")}
            >
              <BarChart3 className="mr-3 h-5 w-5" />
              My Impact
            </Link>
            <Link
              href="/dashboard/community"
              className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                activeTab === "community" ? "bg-green-700" : "hover:bg-green-700"
              }`}
              onClick={() => setActiveTab("community")}
            >
              <Users className="mr-3 h-5 w-5" />
              Community
            </Link>
            <Link
              href="/dashboard/certificates"
              className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                activeTab === "certificates" ? "bg-green-700" : "hover:bg-green-700"
              }`}
              onClick={() => setActiveTab("certificates")}
            >
              <FileText className="mr-3 h-5 w-5" />
              Certificates
            </Link>
          </nav>
          <div className="p-4 border-t border-green-700">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">{user.name}</p>
                <Link href="/dashboard/profile" className="text-xs text-green-300 hover:text-white">
                  View profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="md:pl-64 flex flex-col flex-1">
        <div className="sticky top-0 z-10 flex-shrink-0 h-16 bg-white shadow">
          <div className="flex items-center justify-between h-full px-4 md:px-6">
            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button className="text-gray-500 hover:text-gray-900 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Search */}
            <div className="flex-1 px-4 flex justify-center md:justify-start">
              <div className="max-w-lg w-full">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-900 focus:outline-none">
                <Bell className="h-6 w-6" />
              </button>
              <button className="text-gray-500 hover:text-gray-900 focus:outline-none">
                <Settings className="h-6 w-6" />
              </button>
              <button className="text-gray-500 hover:text-gray-900 focus:outline-none">
                <LogOut className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        <main className="flex-1 pb-8">
          {/* Page header */}
          <div className="bg-white shadow">
            <div className="px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex items-center">
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                  <p className="mt-1 text-sm text-gray-500">
                    Welcome back, {user.name}! Here's your tree planting progress.
                  </p>
                </div>
                <div>
                  <Link
                    href="/donate"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Plant More Trees
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                      <Tree className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Trees Planted</dt>
                        <dd>
                          <div className="text-lg font-medium text-gray-900">{user.treesPlanted}</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-4 sm:px-6">
                  <div className="text-sm">
                    <Link href="/dashboard/trees" className="font-medium text-green-600 hover:text-green-500">
                      View all trees
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                      <BarChart3 className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Carbon Offset</dt>
                        <dd>
                          <div className="text-lg font-medium text-gray-900">{user.carbonOffset} kg</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-4 sm:px-6">
                  <div className="text-sm">
                    <Link href="/dashboard/impact" className="font-medium text-green-600 hover:text-green-500">
                      View impact details
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                      <Heart className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Last Donation</dt>
                        <dd>
                          <div className="text-lg font-medium text-gray-900">
                            {new Date(user.lastDonation).toLocaleDateString()}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-4 sm:px-6">
                  <div className="text-sm">
                    <Link href="/dashboard/donations" className="font-medium text-green-600 hover:text-green-500">
                      View all donations
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
            <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {recentActivities.map((activity) => (
                  <li key={activity.id}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            {activity.type === "donation" ? (
                              <Heart className="h-6 w-6 text-green-600" />
                            ) : activity.type === "tree_planted" ? (
                              <Tree className="h-6 w-6 text-green-600" />
                            ) : (
                              <Calendar className="h-6 w-6 text-green-600" />
                            )}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {activity.type === "donation"
                                ? `Donated ${activity.amount}`
                                : activity.type === "tree_planted"
                                  ? `Planted ${activity.count} trees in ${activity.location}`
                                  : `Joined ${activity.name} event`}
                            </div>
                            <div className="text-sm text-gray-500">{new Date(activity.date).toLocaleDateString()}</div>
                          </div>
                        </div>
                        <div className="ml-2 flex-shrink-0 flex">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {activity.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="mt-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-medium text-gray-900">Upcoming Events</h2>
            <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {upcomingEvents.map((event) => (
                  <li key={event.id}>
                    <Link href={`/events/${event.id}`} className="block hover:bg-gray-50">
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <Calendar className="h-6 w-6 text-green-600" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{event.name}</div>
                              <div className="text-sm text-gray-500">{new Date(event.date).toLocaleDateString()}</div>
                            </div>
                          </div>
                          <div className="ml-2 flex items-center">
                            <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-500">{event.location}</span>
                            <span className="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {event.participants} participants
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Plantation Projects */}
          <div className="mt-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-medium text-gray-900">Plantation Projects</h2>
            <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {plantationProjects.map((project) => (
                <div key={project.id} className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <MapPin className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                      {project.location}
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Progress</span>
                        <span className="text-sm font-medium text-gray-700">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-green-600 h-2.5 rounded-full"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <div className="mt-2 text-sm text-gray-500">
                        {project.treesPlanted} of {project.targetTrees} trees planted
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-4 sm:px-6">
                    <div className="text-sm">
                      <Link
                        href={`/projects/${project.id}`}
                        className="font-medium text-green-600 hover:text-green-500"
                      >
                        View project details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

