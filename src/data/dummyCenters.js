// src/data/dummyCenters.js
export const DUMMY_CENTER = {
  id: "d1",
  name: "CityScan MRI Center",
  city: "Delhi",
  address: "Rohini, Delhi",
  phone: "+91 98765 43210",
  workingHours: "09:00 - 18:00",
  scans: [
    { id: "brain", name: "Brain MRI", price: 3500 },
    { id: "spine", name: "Spine MRI", price: 4000 },
    { id: "knee", name: "Knee MRI", price: 3000 },
  ],
};

export const DUMMY_BOOKINGS_TODAY = [
  {
    id: "b1",
    name: "Aman Verma",
    scan: "Brain MRI",
    time: "09:30 AM",
    phone: "98765 12345",
    status: "Confirmed",
  },
  {
    id: "b2",
    name: "Sunita Rao",
    scan: "Knee MRI",
    time: "10:00 AM",
    phone: "91234 56789",
    status: "Pending",
  },
  {
    id: "b3",
    name: "Rohit Singh",
    scan: "Spine MRI",
    time: "11:00 AM",
    phone: "90011 22334",
    status: "Confirmed",
  },
];

export const DUMMY_UPCOMING = [
  {
    id: "u1",
    date: "2025-12-01",
    name: "Patient X",
    scan: "Brain MRI",
    time: "10:00 AM",
    status: "Confirmed",
  },
  {
    id: "u2",
    date: "2025-12-02",
    name: "Patient Y",
    scan: "Whole Body MRI",
    time: "01:00 PM",
    status: "Confirmed",
  },
];

export const DUMMY_PENDING = [
  {
    id: "p1",
    name: "Neha Gupta",
    scan: "Knee MRI",
    time: "02:00 PM",
    phone: "99876 54321",
    status: "Pending",
  },
];

export const WEEK_STATS = {
  bookingsThisWeek: 28,
  pendingApprovals: 3,
  weeklyRevenue: 98000,
  monthlyBookings: 120,
};
