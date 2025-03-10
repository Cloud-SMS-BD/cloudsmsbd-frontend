const GetStartedPage = () => {
  return (
    <div className="container mx-auto max-w-4xl py-10 p-6">
      <h1 className="text-4xl font-bold">API Guide</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-slate-400">
        This API allows you to send and verify OTPs securely. Below are the
        endpoints, request payloads, and expected responses.
      </p>

      {/* Send OTP Section */}
      <h2 className="mt-10 text-3xl font-semibold">Send OTP</h2>
      <p className="mt-2 text-gray-600 dark:text-slate-400">
        Use this endpoint to send an OTP to a phone number.
      </p>

      <h3 className="mt-6 text-xl font-semibold">Request</h3>
      <pre className="mt-2 rounded-lg bg-gray-800 p-4 text-sm text-white">
        <code>{`POST /api/send-otp`}</code>
      </pre>

      <h3 className="mt-4 text-xl font-semibold">Payload</h3>
      <pre className="mt-2 rounded-lg bg-gray-800 p-4 text-sm text-white">
        <code>{`{
  "phone": "+8801234567890"
}`}</code>
      </pre>

      <h3 className="mt-4 text-xl font-semibold">Response</h3>
      <pre className="mt-2 rounded-lg bg-gray-800 p-4 text-sm text-green-300">
        <code>{`{
  "success": true,
  "message": "OTP sent successfully",
  "otp_id": "12345"
}`}</code>
      </pre>

      {/* Verify OTP Section */}
      <h2 className="mt-10 text-3xl font-semibold">Verify OTP</h2>
      <p className="mt-2 text-gray-600 dark:text-slate-400">
        Use this endpoint to verify the OTP entered by the user.
      </p>

      <h3 className="mt-6 text-xl font-semibold">Request</h3>
      <pre className="mt-2 rounded-lg bg-gray-800 p-4 text-sm text-white">
        <code>{`POST /api/verify-otp`}</code>
      </pre>

      <h3 className="mt-4 text-xl font-semibold">Payload</h3>
      <pre className="mt-2 rounded-lg bg-gray-800 p-4 text-sm text-white">
        <code>{`{
  "otp_id": "12345",
  "otp_code": "67890"
}`}</code>
      </pre>

      <h3 className="mt-4 text-xl font-semibold">Response</h3>
      <pre className="mt-2 rounded-lg bg-gray-800 p-4 text-sm text-green-300">
        <code>{`{
  "success": true,
  "message": "OTP verified successfully",
  "user_id": "user_001"
}`}</code>
      </pre>

      {/* Error Handling */}
      <h2 className="mt-10 text-3xl font-semibold">Error Responses</h2>
      <p className="mt-2 text-gray-600 dark:text-slate-400">
        Below are common error responses:
      </p>

      <h3 className="mt-4 text-xl font-semibold">Invalid OTP</h3>
      <pre className="mt-2 rounded-lg bg-gray-800 p-4 text-sm text-red-300">
        <code>{`{
  "success": false,
  "error": "Invalid OTP. Please try again."
}`}</code>
      </pre>

      <h3 className="mt-4 text-xl font-semibold">OTP Expired</h3>
      <pre className="mt-2 rounded-lg bg-gray-800 p-4 text-sm text-red-300">
        <code>{`{
  "success": false,
  "error": "OTP has expired. Request a new OTP."
}`}</code>
      </pre>
    </div>
  );
};

export default GetStartedPage;
