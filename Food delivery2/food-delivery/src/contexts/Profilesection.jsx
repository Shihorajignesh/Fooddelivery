import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Camera,
  Pencil,
  Save,
  X,
} from "lucide-react";

function Profilesection() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Jignesh Shihora",
    email: "Shihorasohile@gmail.com",
    phone: "+91 9779167442",
    address: "Ahmedabad, Gujarat, India",
    photo: "public/WhatsApp Image 2026-08-11 at 8.10.17 PM.jpeg",
  });

  const [formData, setFormData] = useState(profile);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Open edit mode
  const handleEdit = () => {
    setFormData(profile);
    setIsEditing(true);
  };

  // Save profile
  const handleSave = (e) => {
    e.preventDefault();

    setProfile(formData);
    setIsEditing(false);

    alert("Profile updated successfully!");
  };

  // Cancel editing
  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
  };

  return (
    <section className="min-h-screen bg-linear-to-br from-orange-50 via-white to-red-50 px-4 py-10 sm:px-6 lg:px-10">

      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-xs font-black uppercase tracking-[4px] text-orange-500">
            My Account
          </p>

          <h1 className="text-4xl font-black text-gray-900 sm:text-5xl">
            My{" "}
            <span className="bg-linear-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Profile
            </span>
             <ImProfile />
            
          </h1>

          <p className="mt-2 text--500">
            Manage your personal information and saved address.
          </p>
        </div>

        {/* Profile Card */}
        <div className="overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-2xl shadow-orange-100">

          {/* Top Banner */}
          <div className="h-32 bg-linear-to-r from-orange-500 via-orange-400 to-red-500 sm:h-40" />

          <div className="px-5 pb-8 sm:px-8">

            {/* Profile Photo */}
            <div className="-mt-16 mb-6 flex flex-col items-center sm:-mt-20 sm:flex-row sm:items-end sm:justify-between">

              <div className="relative">

                <img
                  src={isEditing ? formData.photo : profile.photo}
                  alt="Profile"
                  className="h-32 w-32 rounded-full border-8 border-white object-cover shadow-xl sm:h-40 sm:w-40"
                />

                {/* Camera Button */}
                {isEditing && (
                  <button
                    type="button"
                    className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg transition hover:bg-orange-600"
                    title="Change photo"
                  >
                    <Camera size={19} />
                  </button>
                )}

              </div>

              {/* Edit / Save Buttons */}
              {!isEditing ? (
                <button
                  onClick={handleEdit}
                  className="mt-5 flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-bold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-600 sm:mt-0"
                >
                  <Pencil size={18} />
                  Edit Profile
                </button>
              ) : (
                <div className="mt-5 flex gap-3 sm:mt-0">

                  <button
                    onClick={handleCancel}
                    className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 font-bold text-gray-600 transition hover:bg-gray-100"
                  >
                    <X size={18} />
                    Cancel
                  </button>

                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-bold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600"
                  >
                    <Save size={18} />
                    Save Changes
                  </button>

                </div>
              )}

            </div>

            {/* Profile Information */}
            {!isEditing ? (

              <div className="grid gap-5 md:grid-cols-2">

                {/* Name */}
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 transition hover:border-orange-200 hover:bg-orange-50">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                      <User size={20} />
                    </div>

                    <span className="text-sm font-bold text-gray-400">
                      Full Name
                    </span>
                  </div>

                  <p className="text-lg font-black text-gray-900">
                    {profile.name}
                  </p>
                </div>

                {/* Email */}
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 transition hover:border-orange-200 hover:bg-orange-50">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                      <Mail size={20} />
                    </div>

                    <span className="text-sm font-bold text-gray-400">
                      Email Address
                    </span>
                  </div>

                  <p className="break-all text-lg font-black text-gray-900">
                    {profile.email}
                  </p>
                </div>

                {/* Phone */}
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 transition hover:border-orange-200 hover:bg-orange-50">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                      <Phone size={20} />
                    </div>

                    <span className="text-sm font-bold text-gray-400">
                      Phone Number
                    </span>
                  </div>

                  <p className="text-lg font-black text-gray-900">
                    {profile.phone}
                  </p>
                </div>

                {/* Address */}
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 transition hover:border-orange-200 hover:bg-orange-50">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                      <MapPin size={20} />
                    </div>

                    <span className="text-sm font-bold text-gray-400">
                      Saved Address
                    </span>
                  </div>

                  <p className="text-lg font-black text-gray-900">
                    {profile.address}
                  </p>
                </div>

              </div>

            ) : (

              /* Edit Form */
              <form
                onSubmit={handleSave}
                className="grid gap-5 md:grid-cols-2"
              >

                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-bold text-gray-700">
                    Name
                  </label>

                  <div className="relative">
                    <User
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-12 pr-4 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-bold text-gray-700">
                    Email
                  </label>

                  <div className="relative">
                    <Mail
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-12 pr-4 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-sm font-bold text-gray-700">
                    Phone
                  </label>

                  <div className="relative">
                    <Phone
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-12 pr-4 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="mb-2 block text-sm font-bold text-gray-700">
                    Saved Address
                  </label>

                  <div className="relative">
                    <MapPin
                      size={19}
                      className="absolute left-4 top-4 text-gray-400"
                    />

                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows="3"
                      className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-12 pr-4 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
                    />
                  </div>
                </div>

              </form>

            )}

          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-6 rounded-2xl border border-orange-100 bg-white p-5 shadow-lg shadow-orange-50">
          <div className="flex items-start gap-3">
            <div className="text-2xl"><FaLock /></div>

            <div>
              <h3 className="font-black text-gray-900">
                Your information is safe
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Your personal information is used only to provide you with
                a better food delivery experience.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Profilesection;