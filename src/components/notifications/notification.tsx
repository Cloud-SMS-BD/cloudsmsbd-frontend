const Notification = ({ show }: { show: boolean }) => {
  return (
    <div
      className={`${
        show
          ? "bg-red-500 text-white text-center py-2 px-4 font-medium text-sm shadow-md dark:bg-red-600 dark:text-gray-100"
          : "hidden"
      }`}
    >
      ⚠️ Our website is undergoing maintenance and will be unavailable until
      April 22, 2025, 11:59 PM. We apologize for the inconvenience.
    </div>
  );
};

export default Notification;
