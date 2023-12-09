/* eslint-disable react/prop-types */
import Button from "./Button";
function PromptDelete({ isOpen, onCancel, onConfirm }) {
  return (
    <div
      className={`flex min-h-screen justify-center items-center promptdelete ${
        isOpen ? "open" : "closed"
      }`}
    >
      <div className="prompt-content bg-white p-10">
        <p className="text-black">Are you sure you want to delete this item?</p>
        <div className="flex prompt-buttons gap-10 justify-center mt-10">
          <Button title="Cancel" onClick={onCancel} />
          <Button title="Confirm" onClick={onConfirm} />
        </div>
      </div>
    </div>
  );
}

export default PromptDelete;
