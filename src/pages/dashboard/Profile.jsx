import React, { useState } from "react";
import { DUMMY_CENTER } from "../../data/dummyCenters";

export default function Profile() {
  const [form, setForm] = useState({ ...DUMMY_CENTER });

  const save = () => {
    alert("Saved (mock). Replace with API call.");
    console.log("Save profile:", form);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-800">Center Profile</h2>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            className="p-3 rounded-xl border"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
          <input
            className="p-3 rounded-xl border"
            value={form.city}
            onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
          />
          <input
            className="p-3 rounded-xl border sm:col-span-2"
            value={form.address}
            onChange={(e) =>
              setForm((f) => ({ ...f, address: e.target.value }))
            }
          />
          <input
            className="p-3 rounded-xl border"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          />
          <input
            className="p-3 rounded-xl border"
            value={form.workingHours}
            onChange={(e) =>
              setForm((f) => ({ ...f, workingHours: e.target.value }))
            }
          />
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-semibold mb-2">
            Available Scans & Pricing
          </h3>
          <div className="grid gap-2">
            {form.scans.map((s) => (
              <div key={s.id} className="flex items-center gap-3">
                <div className="flex-1">{s.name}</div>
                <input
                  className="p-2 rounded-xl border w-32"
                  value={s.price}
                  onChange={(e) => {
                    const price = e.target.value;
                    setForm((f) => ({
                      ...f,
                      scans: f.scans.map((x) =>
                        x.id === s.id ? { ...x, price } : x
                      ),
                    }));
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={save}
            className="px-5 py-2 rounded-full bg-sky-600 text-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
