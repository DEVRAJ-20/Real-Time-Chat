import { useRef, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { Image, Send, X } from "lucide-react";
import toast from "react-hot-toast";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { sendMessage } = useChatStore();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;
    try {
      await sendMessage({ text: text.trim(), image: imagePreview });
      setText("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  const hasContent = text.trim() || imagePreview;

  return (
    <div className="p-4" style={{ borderTop: "1px solid rgba(34, 211, 238, 0.06)", background: "var(--bg-surface)" }}>
      {imagePreview && (
        <div className="mb-3 flex items-center gap-2">
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-20 h-20 object-cover rounded-xl"
              style={{ border: "1px solid rgba(34, 211, 238, 0.15)" }}
            />
            <button
              onClick={removeImage}
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center"
              style={{ background: "var(--bg-elevated)", border: "1px solid rgba(244, 114, 182, 0.2)" }}
              type="button"
            >
              <X className="size-3" style={{ color: "var(--aurora-pink)" }} />
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSendMessage} className="flex items-center gap-2">
        <div className="flex-1 flex gap-2">
          <input
            type="text"
            className="w-full rounded-xl px-4 py-2.5 text-sm dark-input outline-none"
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleImageChange} />

          <button
            type="button"
            className="hidden sm:flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 hover:scale-105"
            style={{
              background: imagePreview ? "rgba(16, 185, 129, 0.12)" : "var(--bg-elevated)",
              color: imagePreview ? "var(--aurora-emerald)" : "var(--text-muted)",
              border: `1px solid ${imagePreview ? "rgba(16, 185, 129, 0.2)" : "var(--border-subtle)"}`,
            }}
            onClick={() => fileInputRef.current?.click()}
          >
            <Image size={18} />
          </button>
        </div>
        <button
          type="submit"
          className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
          disabled={!hasContent}
          style={{
            background: hasContent
              ? "linear-gradient(135deg, var(--aurora-emerald), var(--aurora-teal))"
              : "var(--bg-elevated)",
            color: hasContent ? "white" : "var(--text-muted)",
            border: `1px solid ${hasContent ? "rgba(34, 211, 238, 0.2)" : "var(--border-subtle)"}`,
            opacity: !hasContent ? 0.4 : 1,
            boxShadow: hasContent ? "0 0 15px rgba(16, 185, 129, 0.2)" : "none",
          }}
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};
export default MessageInput;
