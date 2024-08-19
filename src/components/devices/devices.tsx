

"use client";
import React, { useContext, useState, useEffect } from "react";
import EmsContext from "@/app/context/context";
import baseUrl from "../common/common_url";

const Devices = () => {

  interface device {
    id: number;
    deviceTypeId: number;
    name: string;
    parentDeviceId: number;
    parentDeviceDetails?: null;
    purchaseDate?: string | null;
    serialText: string;
    status: number;
    deviceTypeName: string;
  }

  const emsData = useContext(EmsContext);
  const [selectedDeviceTypeId, setSelectedDeviceTypeId] = useState<
    number | null
  >(null);
  const [selectedParentDeviceId, setSelectedParentDeviceId] = useState<
    number | null
  >(null);
  const [deviceName, setDeviceName] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [serialText, setSerialText] = useState("");
  const [selectedDevice, setSelectedDevice] = useState<device | null>(null);
  const [status, setStatus] = useState(1); // Assuming default status is 1 (Active)
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSave = async () => {
    if (
      !selectedDeviceTypeId ||
      !selectedParentDeviceId ||
      !deviceName ||
      !purchaseDate ||
      !serialText
    ) {
      setNotification({ type: "error", message: "Please fill in all fields." });
      return;
    }

    const newDevice = {
      device_type_id: selectedDeviceTypeId,
      name: deviceName,
      status: status,
      parent_device_id: selectedParentDeviceId,
      purchase_date: purchaseDate,
      serial_text: serialText,
    };

    try {
      const response = await fetch(`${baseUrl}/device/add-device`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDevice),
      });

      if (response.ok) {
        setNotification({
          type: "success",
          message: "Devices added successfully!",
        });
        (document.getElementById("my_modal_4") as HTMLDialogElement).close();
        setSelectedDeviceTypeId(null);
        setSelectedParentDeviceId(null);
        setDeviceName("");
        setPurchaseDate("");
        setSerialText("");
      } else {
        setNotification({
          type: "error",
          message: "Error! Task failed successfully.",
        });
      }
    } catch (error) {
      setNotification({
        type: "error",
        message: "Error! Task failed successfully.",
      });
    }
  };

  const formatDate = (isoString: any) => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleEdit = (device: device) => {
    setSelectedDevice(null);
    setSelectedDeviceTypeId(null);
    setSelectedParentDeviceId(null);
    setDeviceName("");
    setPurchaseDate("");
    setSerialText("");
    setSelectedDevice(device);
    setSelectedDeviceTypeId(device.deviceTypeId);
    setSelectedParentDeviceId(device.parentDeviceId);
    setDeviceName(device.name);
    setPurchaseDate(formatDate(device.purchaseDate));
    console.log("date ", purchaseDate);
    if (device.serialText != null) {
      setSerialText(device.serialText);
    }
    setStatus(device.status);
    console.log("clicked device", device);
    const modal = document.getElementById("edit_modal");
    if (modal) {
      (modal as HTMLDialogElement).showModal();
    }
  };

  const handleSaveEdit = async (e: any) => {
    e.preventDefault();
    if (!selectedDevice) return;

    const updatedDevice = {
      device_type_id: selectedDeviceTypeId,
      name: deviceName,
      device_status: 1,
      parent_device_id: selectedParentDeviceId,
      parent_device_details: null,
      purchase_date: purchaseDate,
      serial_text: serialText,
    };

    try {
      const response = await fetch(
        `${baseUrl}/device/update-device-by-id/${selectedDevice.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedDevice),
        }
      );

      if (response.ok) {
        setNotification({
          type: "success",
          message: "Device updated successfully!",
        });
      } else {
        setNotification({ type: "error", message: "Error updating device." });
      }
    } catch (error) {
      setNotification({ type: "error", message: "Error updating device." });
    }
  };

  useEffect(() => {
    if (notification) {
      const timeout = setTimeout(() => {
        setNotification(null);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [notification]);

  return (
    <div>

      <div className='my-5 border-l-8 text-xl border-[#0165B9] ps-4 py-1 font-semibold bg-gradient-to-r from-[#B9EEFF] to-[#E0F1FC] w-fit'>
        <div>Devices</div>
      </div>

      {notification && (
        <div role="alert" className={`alert alert-${notification.type} mb-2 bg-gradient-to-r from-[#0165B9] to-[#23A5CE] text-white font-medium text-base`}>
          {notification.type === "success" ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{notification.message}</span>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{notification.message}</span>
            </>
          )}
        </div>
      )}

      <div className="flex justify-between items-center rounded-md my-10">
        <label className="input input-bordered rounded-full flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd" />
          </svg>
          <input type="text" className="grow" placeholder="Search" />
        </label>
        <div className="">
          <button
            className="btn"
            onClick={() => {
              const modal = document.getElementById("my_modal_4");
              if (modal) {
                (modal as HTMLDialogElement).showModal();
              }
            }}
          >
            Add Devices
          </button>
        </div>
      </div>


      {emsData?.deviceAllData ?
        <div className="overflow-x-auto">
          <table className="table table-zebra bg-white">
            <thead className="bg-gradient-to-r from-[#0165B9] to-[#23A5CE] text-white font-medium text-base">
              <tr>
                <th>Serial</th>
                <th>Name</th>
                <th>Device Type Name</th>
                <th>Parrent Device Name</th>
                <th>Serial Number</th>
                <th>Purchase Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {emsData?.deviceAllData?.map(
                (device, index) =>
                  device.status !== -1 && (
                    <tr key={index}>
                      <th>#{index + 1}</th>
                      <td>
                        <div>
                          <div className="font-semibold">{device.name}</div>
                        </div>
                      </td>

                      <td>
                        {
                          emsData?.deviceTypeData?.find(
                            (deviceType) =>
                              deviceType.id === device.deviceTypeId
                          )?.name
                        }
                      </td>
                      <td>
                        {emsData?.deviceAllData?.find(
                          (deviceNew) =>
                            device.parentDeviceId === deviceNew.id
                        )?.name || "None"}
                      </td>

                      <th>{device.serialText}</th>
                      <td className="font-semibold">
                        {device.purchaseDate ? formatDate(device.purchaseDate) : "None"}
                      </td>
                      <th
                        className={
                          device.status === 0
                            ? "text-red-500"
                            : device.status === 1
                              ? "text-green-500"
                              : "text-black"
                        }
                      >
                        {/* <div>Active</div> */}
                        {device.status === 0
                          ? "Inactive"
                          : device.status === 1
                            ? "Active"
                            : ""}
                      </th>
                      <td>
                        <button
                          className="btn"
                          onClick={() => handleEdit(device)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div> : ''}

      <div className="flex justify-center items-center mt-8">
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5x">
            <h3 className="font-bold text-lg">Add Devices</h3>
            <div className="mt-4">
              <form
                method="dialog"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSave();
                }}
              >
                <div>
                  <label className="block text-gray-700 mb-2">
                    Device Type
                  </label>
                  <select
                    className="select select-primary w-full"
                    onChange={(e) =>
                      setSelectedDeviceTypeId(parseInt(e.target.value, 10))
                    }
                  >
                    <option disabled selected>
                      Select Device Type
                    </option>
                    <option value={0}>None</option>
                    {emsData?.deviceTypeData?.map((deviceType) => (
                      <option key={deviceType.id} value={deviceType.id}>
                        {deviceType.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block mt-4 text-gray-700">
                    Device Name
                  </label>
                  <input
                    type="text"
                    placeholder="Device Name"
                    className="mt-1 input input-bordered input-primary w-full"
                    value={deviceName}
                    onChange={(e) => setDeviceName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mt-4 text-gray-700">
                    Parent Device Name
                  </label>
                  <select
                    className="mt-1 select select-primary w-full"
                    onChange={(e) =>
                      setSelectedParentDeviceId(parseInt(e.target.value, 10))
                    }
                  >
                    <option disabled selected>
                      Select Parent Device
                    </option>
                    <option value={0}>None</option>
                    {emsData?.deviceAllData?.map((device) => (
                      <option key={device.id} value={device.id}>
                        {device.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block mt-4 text-gray-700">
                    Serial Number
                  </label>
                  <input
                    type="text"
                    placeholder="Serial Number"
                    className="mt-1 input input-bordered input-primary w-full"
                    value={serialText}
                    onChange={(e) => setSerialText(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mt-4 text-gray-700">
                    Purchase Date
                  </label>
                  <input
                    type="date"
                    className="mt-1 input input-bordered input-primary w-full"
                    value={purchaseDate}
                    onChange={(e) => setPurchaseDate(e.target.value)}
                  />
                </div>
                <div className="mt-4 flex justify-end space-x-2">
                  <button
                    className="btn"
                    type="button"
                    onClick={() =>
                      (
                        document.getElementById(
                          "my_modal_4"
                        ) as HTMLDialogElement
                      ).close()
                    }
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>

        {/* Edit Modal */}
        <dialog id="edit_modal" className="modal">
          <div className="modal-box w-11/12 max-w-5x">
            <h3 className="font-bold text-lg">Edit Device</h3>
            {notification && (
              <div
                className={`alert ${notification.type === "success" ? "alert-success" : "alert-error"
                  } mt-4 bg-gradient-to-r from-[#0165B9] to-[#23A5CE] text-white font-medium text-base`}
              >
                {notification.message}
              </div>
            )}
            <div className="mt-4">
              <form onSubmit={handleSaveEdit}>
                <div>
                  <label className="block text-gray-700 mb-2">Device Type</label>
                  <select
                    className="select select-primary w-full"
                    onChange={(e) =>
                      setSelectedDeviceTypeId(parseInt(e.target.value, 10))
                    }
                  >
                    <option value={0}>None</option>
                    {emsData?.deviceTypeData?.map((deviceType) => (
                      <option
                        key={deviceType.id}
                        value={deviceType.id}
                        selected={deviceType.id === selectedDeviceTypeId}
                      >
                        {deviceType.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mt-4 text-gray-700">Device Name</label>
                  <input
                    type="text"
                    placeholder="Device Name"
                    className="mt-1 input input-bordered input-primary w-full"
                    value={deviceName}
                    onChange={(e) => setDeviceName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Parent Device Name
                  </label>
                  <select
                    className="select select-primary w-full"
                    onChange={(e) =>
                      setSelectedParentDeviceId(parseInt(e.target.value, 10))
                    }
                  >
                    <option value={0}>None</option>
                    {emsData?.deviceAllData?.map((device) => (
                      <option
                        key={device.id}
                        value={device.id}
                        selected={device.id === selectedParentDeviceId}
                      >
                        {device.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mt-4 text-gray-700">Serial Number</label>
                  <input
                    type="text"
                    placeholder="Serial Number"
                    className="mt-1 input input-bordered input-primary w-full"
                    value={serialText}
                    onChange={(e) => setSerialText(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block mt-4 text-gray-700">Purchase Date</label>
                  <input
                    type="date"
                    className="mt-1 input input-bordered input-primary w-full"
                    value={purchaseDate}
                    onChange={(e) => setPurchaseDate(e.target.value)}
                  />
                </div>

                <div className="mt-4 flex justify-end space-x-2">
                  <button
                    className="btn"
                    type="button"
                    onClick={() =>
                      (
                        document.getElementById("edit_modal") as HTMLDialogElement
                      ).close()
                    }
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </div>

    </div>
  );
};

export default Devices;