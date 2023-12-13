/* eslint-disable react/prop-types */
import Button from "../../pages/Admin/components/Button";
function ModalsCheckout({ onCancel }) {
  return (
    <div className="flex min-h-screen justify-center items-center promptdelete ">
      <div className="prompt-content bg-white p-10 rounded-lg ">
        <p className="text-black">Thank You !</p>
        <div className="flex prompt-buttons gap-10 justify-center mt-10">
          <Button title="Close" onClick={onCancel} />
        </div>
      </div>
    </div>
  );
}

export default ModalsCheckout;
