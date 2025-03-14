const GetStartedPage = () => {
  return (
    <div className="container mx-auto max-w-4xl py-10 p-6">
      <h1 className="text-4xl font-bold">API Guide</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-slate-400">
        This API allows you to send SMS securely. Below are the
        endpoints, request payloads, and expected responses.
      </p>

      {/* Send OTP Section */}
      <h2 className="mt-10 text-3xl font-semibold">Sending single SMS</h2>
      <p className="mt-2 text-gray-600 dark:text-slate-400">
        Use this endpoint to send SMS to a phone number. You have to generate an API key from the dashboard.
      </p>

      <h3 className="mt-6 text-xl font-semibold">Request : <span className="text-green-300 ">POST</span> </h3>
      <pre className="mt-2 rounded-lg bg-gray-800 p-4 text-sm text-white overflow-auto break-words whitespace-pre-wrap">
        <code>{`https://api.cloudsmsbd.com/sms/?key=<API_KEY>`}</code>
      </pre>

      <h3 className="mt-4 text-xl font-semibold">Payload</h3>
      <pre className="mt-2 rounded-lg bg-gray-800 p-4 text-sm text-white overflow-auto break-words whitespace-pre-wrap">
        <code>{`{
    "message": "hello Cloud SMS BD",
    "recipient": "+8801XXXXXXXXX"
}`}</code>
      </pre>

      <h3 className="mt-4 text-xl font-semibold">Response</h3>
      <pre className="mt-2 rounded-lg bg-gray-800 p-4 text-sm text-green-300 overflow-auto break-words whitespace-pre-wrap">
        <code>{`{
    "success": true,
    "id": "e68d5e5e-9f79-4944-9b42-...",
    "status": "QUEUED",
    "recipient": "+8801XXXXXXXXX",
    "message": "hello Cloud SMS BD",
    "created_at": "2025-03-14T21:54:05.476575+06:00",
    "sent_at": null
}`}</code>
      </pre>

      {/* Verify OTP Section */}
      <h2 className="mt-10 text-3xl font-semibold">
        Sending bulk SMS
      </h2>
      <p className="mt-2 text-gray-600 dark:text-slate-400">
        Use this endpoint to send SMS to multiple phone numbers. You have to generate an API key from the dashboard.
      </p>

      <h3 className="mt-6 text-xl font-semibold">Request : <span className="text-green-300 ">POST</span> </h3>
      <pre className="mt-2 rounded-lg bg-gray-800 p-4 text-sm text-white overflow-auto break-words whitespace-pre-wrap">
        <code>
          {`https://api.cloudsmsbd.com/sms/?type=bulk&key=<API_KEY>`}
        </code>
      </pre>

      <h3 className="mt-4 text-xl font-semibold">Payload</h3>
      <pre className="mt-2 rounded-lg bg-gray-800 p-4 text-sm text-white overflow-auto break-words whitespace-pre-wrap">
        <code>
          {`{
  "message": "hello Cloud SMS BD",
  "recipients": ["+8801XXXXXXXXX", "+8801XXXXXXXXX"]
}`}
        </code>
      </pre>

      <h3 className="mt-4 text-xl font-semibold">Response</h3>
      <pre className="mt-2 rounded-lg bg-gray-800 p-4 text-sm text-green-300 overflow-auto break-words whitespace-pre-wrap">
        <code>{`{
    "success": true,
    "message": "hello Cloud SMS BD",
    "recipients": [
        "+8801XXXXXXXXX",
        "+8801XXXXXXXXX"
    ],
    "status": "QUEUED",
    "created_at": "2025-03-14T16:00:26.021683Z",
    "sent_at": null
}`}</code>
      </pre>

      {/* Error Handling */}
      <h2 className="mt-10 text-3xl font-semibold">Error Responses</h2>
      <p className="mt-2 text-gray-600 dark:text-slate-400">
        Below are common error responses:
      </p>

      <h3 className="mt-4 text-xl font-semibold">
        Invalid API Key
      </h3>
      <pre className="mt-2 rounded-lg bg-gray-800 p-4 text-sm text-red-300 overflow-auto break-words whitespace-pre-wrap">
        <code>{`{
    "success": false,
    "message": "Invalid API key"
}`}</code>
      </pre>

      <h3 className="mt-4 text-xl font-semibold">
        Missing required fields
      </h3>
      <pre className="mt-2 rounded-lg bg-gray-800 p-4 text-sm text-red-300 overflow-auto break-words whitespace-pre-wrap">
        <code>{`{
    "success": false,
    "message": "(recipients) This field is required."
}`}</code>
      </pre>


      <h3 className="mt-4 text-xl font-semibold">
        Contains Inappropriate words
      </h3>
      <p className="mt-2 text-gray-600 dark:text-slate-400">
        Every message is checked by AI to prevent inappropriate content.
      </p>
      <pre className="mt-2 rounded-lg bg-gray-800 p-4 text-sm text-red-300 overflow-auto break-words whitespace-pre-wrap">
        <code>{`{
    "success": false,
    "message": "Inappropriate content is not allowed"
}`}</code>
      </pre>
    </div>
  );
};

export default GetStartedPage;
