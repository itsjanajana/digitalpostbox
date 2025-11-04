import { useState } from "react";

function ComposeCard({ onSend }) {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleSend = () => {
    if (!message) return alert("Please type a message!");
    onSend({ image, message });
    setImage(null);
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Front Card */}
      <div className="w-64 h-40 bg-white shadow-lg rounded-lg flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt="Front"
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <img
            src="/postcard-placeholder.png"
            alt="Placeholder"
            className="w-full h-full object-cover rounded-lg"
          />
        )}
        {!image && (
          <label className="absolute cursor-pointer text-gray-500">
            Upload Image
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        )}
      </div>

      {/* Back Card */}
      <div className="w-64 h-32 bg-white shadow-md rounded-lg transform -rotate-3 flex">
        <textarea
          className="w-1/2 p-2"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="w-1/2 p-2 text-gray-600">
          To: My Address<br />
          Email: myemail@example.com
        </div>
      </div>

      <button
        className="bg-blue-500 text-white px-6 py-2 rounded shadow"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
}

export default ComposeCard;
