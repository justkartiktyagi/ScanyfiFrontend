// BookingWizard.jsx
import React, { useState, useMemo } from "react";
import Header from "../components/Header.jsx";

const SCANS = [
  { id: "brain", label: "Brain MRI", desc: "Detailed brain scan" },
  { id: "spine", label: "Spine MRI", desc: "Spinal cord & vertebrae" },
  { id: "knee", label: "Knee MRI", desc: "Knee joint & ligaments" },
  { id: "abdomen", label: "Abdomen MRI", desc: "Abdomen & organs" },
  { id: "whole", label: "Whole Body MRI", desc: "Full body screening" },
];

const CITIES = ["Delhi", "Mumbai", "Jaipur", "Bengaluru"];

const CENTERS_BY_CITY = {
  Delhi: [
    {
      id: "d1",
      name: "CityScan MRI Center",
      address: "Rohini, Delhi",
      price: 3500,
    },
    {
      id: "d2",
      name: "Metro Diagnostics",
      address: "Pitampura, Delhi",
      price: 4000,
    },
  ],
  Mumbai: [
    {
      id: "m1",
      name: "Hiranandani Imaging",
      address: "Powai, Mumbai",
      price: 4200,
    },
    {
      id: "m2",
      name: "CitiHealth MRI",
      address: "Andheri East, Mumbai",
      price: 3800,
    },
  ],
  Jaipur: [
    {
      id: "j1",
      name: "PinkCity MRI Hub",
      address: "Malviya Nagar, Jaipur",
      price: 3000,
    },
  ],
  Bengaluru: [
    {
      id: "b1",
      name: "Silicon Diagnostic Center",
      address: "Koramangala, Bengaluru",
      price: 3700,
    },
  ],
};

const TIME_SLOTS = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
];

export default function BookingPage() {
  const [step, setStep] = useState(1); // 1..6
  const [selectedScan, setSelectedScan] = useState(null);
  const [city, setCity] = useState("");
  const [selectedCenterId, setSelectedCenterId] = useState(null);
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);

  const centers = useMemo(() => CENTERS_BY_CITY[city] || [], [city]);
  const selectedCenter = useMemo(
    () => centers.find((c) => c.id === selectedCenterId) || null,
    [centers, selectedCenterId]
  );

  const stepsTotal = 6;
  const progress = Math.round(((step - 1) / (stepsTotal - 1)) * 100);

  // Basic validation for each step
  const canNext = () => {
    switch (step) {
      case 1:
        return !!selectedScan;
      case 2:
        return !!city;
      case 3:
        return !!selectedCenter;
      case 4:
        return !!date && !!slot;
      case 5:
        return patient.name.trim() && patient.age && patient.phone.trim();
      default:
        return true;
    }
  };

  const next = () => {
    if (!canNext()) {
      // Simple inline validation feedback
      const msgs = {
        1: "Choose a scan first.",
        2: "Select a city.",
        3: "Choose a center.",
        4: "Pick a date and time slot.",
        5: "Fill patient name, age and phone.",
      };
      alert(msgs[step] || "Complete current step first.");
      return;
    }
    setStep((s) => Math.min(stepsTotal, s + 1));
  };

  const back = () => {
    setStep((s) => Math.max(1, s - 1));
  };

  const reset = () => {
    setStep(1);
    setSelectedScan(null);
    setCity("");
    setSelectedCenterId(null);
    setDate("");
    setSlot("");
    setPatient({ name: "", age: "", gender: "", phone: "", notes: "" });
  };

  const handleConfirm = async () => {
    if (!canNext()) {
      alert("Incomplete. Please fill required fields.");
      return;
    }
    setLoading(true);
    // simulate API call
    const payload = {
      scan: selectedScan,
      city,
      center: selectedCenter,
      date,
      slot,
      patient,
    };

    // Replace this with real API call
    await new Promise((r) => setTimeout(r, 900));

    console.log("BOOKING PAYLOAD:", payload);
    setLoading(false);
    alert("Booking Confirmed! (check console for payload)");
    reset();
  };

  // Small presentational components inside the file for cohesion:
  const Card = ({ children, className = "" }) => (
    <div className={`bg-white rounded-2xl shadow-md p-6 ${className}`}>
      {children}
    </div>
  );

  return (
    <>
      <div className="min-h-screen bg-[linear-gradient(180deg,#0b1320,transparent)] py-8 px-4 sm:px-6 lg:px-8">
        <main className="max-w-4xl mx-auto">
          {/* Page shell */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Book MRI Scan
            </h1>
            <p className="text-sm text-gray-300 mt-1">
              Premium booking flow — quick and secure.
            </p>
          </div>

          {/* Minimal progress bar */}
          <div className="mb-6">
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 transition-all"
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-300 mt-2">
              <span>Step {step}</span>
              <span>{Math.round(progress)}%</span>
            </div>
          </div>

          {/* Content container */}
          <div className="space-y-6">
            {/* Step: 1 Select Scan */}
            {step === 1 && (
              <Card>
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  Choose Scan Type
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  Pick the MRI scan required for the patient.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SCANS.map((s) => {
                    const active = selectedScan?.id === s.id;
                    return (
                      <button
                        key={s.id}
                        onClick={() => setSelectedScan(s)}
                        className={`flex items-start gap-3 p-4 rounded-xl transition-shadow border ${
                          active
                            ? "border-sky-500 bg-sky-50 shadow-lg"
                            : "border-gray-200 bg-white"
                        }`}
                        aria-pressed={active}
                        type="button"
                      >
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold ${
                            active
                              ? "bg-sky-600 text-white"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {s.label.split(" ")[0].slice(0, 2).toUpperCase()}
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-gray-900">
                            {s.label}
                          </div>
                          <div className="text-sm text-gray-500">{s.desc}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </Card>
            )}

            {/* Step: 2 City */}
            {step === 2 && (
              <Card>
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  Choose City
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  Select the city to find nearby centers.
                </p>

                <div className="flex gap-3 flex-wrap">
                  {CITIES.map((c) => {
                    const active = city === c;
                    return (
                      <button
                        key={c}
                        onClick={() => {
                          setCity(c);
                          setSelectedCenterId(null);
                        }}
                        className={`px-4 py-2 rounded-full border ${
                          active
                            ? "bg-sky-600 text-white border-sky-600"
                            : "bg-white border-gray-200 text-gray-700"
                        }`}
                      >
                        {c}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-4 text-sm text-gray-500">
                  Or choose from dropdown:
                  <div className="mt-2">
                    <select
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                        setSelectedCenterId(null);
                      }}
                      className="w-full p-3 rounded-xl border mt-2"
                    >
                      <option value="">Select city</option>
                      {CITIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </Card>
            )}

            {/* Step: 3 Center Selection */}
            {step === 3 && (
              <Card>
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  Choose Center
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  Centers available in{" "}
                  <strong>{city || "selected city"}</strong>.
                </p>

                {city ? (
                  centers.length ? (
                    <div className="grid gap-4">
                      {centers.map((center) => {
                        const active = selectedCenterId === center.id;
                        return (
                          <div
                            key={center.id}
                            onClick={() => setSelectedCenterId(center.id)}
                            className={`p-4 rounded-xl border flex justify-between items-center cursor-pointer transition ${
                              active
                                ? "border-sky-500 bg-sky-50 shadow-md"
                                : "border-gray-200 bg-white"
                            }`}
                          >
                            <div>
                              <div className="font-semibold text-gray-900">
                                {center.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {center.address}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium text-sky-600">
                                ₹{center.price}
                              </div>
                              <div className="text-xs text-gray-400">
                                per scan
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500">
                      No centers found for this city.
                    </div>
                  )
                ) : (
                  <div className="text-sm text-gray-500">
                    Please select a city first.
                  </div>
                )}
              </Card>
            )}

            {/* Step: 4 Date & Slot */}
            {step === 4 && (
              <Card>
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  Select Date & Time
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  Choose a convenient date and available slot.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-600 block mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full p-3 rounded-xl border"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-600 block mb-2">
                      Time Slot
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {TIME_SLOTS.map((ts) => {
                        const active = slot === ts;
                        return (
                          <button
                            key={ts}
                            onClick={() => setSlot(ts)}
                            type="button"
                            className={`py-2 px-2 rounded-lg text-sm border ${
                              active
                                ? "bg-sky-600 text-white border-sky-600"
                                : "bg-gray-50 border-gray-200 text-gray-700"
                            }`}
                          >
                            {ts}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="text-xs text-gray-400 mt-3">
                  Note: Slots are mock data. On real integration you'll fetch
                  availability from backend.
                </div>
              </Card>
            )}

            {/* Step: 5 Patient Details */}
            {step === 5 && (
              <Card>
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  Patient Details
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  Enter patient information for the booking.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Patient name *"
                    value={patient.name}
                    onChange={(e) =>
                      setPatient((p) => ({ ...p, name: e.target.value }))
                    }
                    className="w-full p-3 rounded-xl border"
                  />
                  <input
                    type="number"
                    placeholder="Age *"
                    value={patient.age}
                    onChange={(e) =>
                      setPatient((p) => ({ ...p, age: e.target.value }))
                    }
                    className="w-full p-3 rounded-xl border"
                  />
                  <select
                    value={patient.gender}
                    onChange={(e) =>
                      setPatient((p) => ({ ...p, gender: e.target.value }))
                    }
                    className="w-full p-3 rounded-xl border"
                  >
                    <option value="">Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Phone number *"
                    value={patient.phone}
                    onChange={(e) =>
                      setPatient((p) => ({ ...p, phone: e.target.value }))
                    }
                    className="w-full p-3 rounded-xl border"
                  />
                  <textarea
                    placeholder="Notes (optional)"
                    value={patient.notes}
                    onChange={(e) =>
                      setPatient((p) => ({ ...p, notes: e.target.value }))
                    }
                    className="sm:col-span-2 w-full p-3 rounded-xl border h-28"
                  />
                </div>
              </Card>
            )}

            {/* Step: 6 Review & Confirm */}
            {step === 6 && (
              <Card>
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  Review & Confirm
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm text-gray-500">Scan</div>
                      <div className="font-medium text-gray-900">
                        {selectedScan?.label || "-"}
                      </div>
                    </div>
                    <div className="text-sm text-gray-700">—</div>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm text-gray-500">Center</div>
                      <div className="font-medium text-gray-900">
                        {selectedCenter?.name || "-"}
                      </div>
                      <div className="text-xs text-gray-500">
                        {selectedCenter?.address}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-sky-600">
                        ₹{selectedCenter?.price || "--"}
                      </div>
                      <div className="text-xs text-gray-400">Approx.</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm text-gray-500">Date & Slot</div>
                      <div className="font-medium text-gray-900">
                        {date || "-"} • {slot || "-"}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-500">Patient</div>
                    <div className="mt-1 font-medium text-gray-900">
                      {patient.name || "-"}
                    </div>
                    <div className="text-sm text-gray-500">
                      {patient.age || "-"} yrs • {patient.gender || "-"}
                    </div>
                    <div className="text-sm text-gray-500">
                      Phone: {patient.phone || "-"}
                    </div>
                    {patient.notes && (
                      <div className="mt-2 text-sm text-gray-600">
                        Notes: {patient.notes}
                      </div>
                    )}
                  </div>

                  <div className="border-t pt-4 flex justify-between items-center">
                    <div>
                      <div className="text-xs text-gray-500">
                        Total (estimate)
                      </div>
                      <div className="text-xl font-bold text-gray-900">
                        ₹{selectedCenter?.price || 0}
                      </div>
                    </div>
                    <div className="text-right text-xs text-gray-400">
                      Payments disabled for now
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {/* Navigation buttons */}
            <div className="flex gap-3 justify-between items-center">
              <div>
                {step > 1 && (
                  <button
                    onClick={back}
                    className="px-4 py-2 rounded-full bg-white text-gray-700 border hover:shadow"
                  >
                    ← Back
                  </button>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    // Quick jump: let user go back to any previous step from review
                    if (step === stepsTotal) {
                      // no-op
                      return;
                    }
                    next();
                  }}
                  className="px-5 py-2 rounded-full bg-sky-600 text-white font-medium hover:bg-sky-700"
                >
                  {step === stepsTotal ? "Finish" : "Next"}
                </button>

                {step === stepsTotal && (
                  <button
                    onClick={handleConfirm}
                    disabled={loading}
                    className={`px-5 py-2 rounded-full font-semibold ${
                      loading
                        ? "bg-gray-300 text-gray-600"
                        : "bg-indigo-600 text-white hover:bg-indigo-700"
                    }`}
                  >
                    {loading ? "Confirming..." : "Confirm Booking"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
