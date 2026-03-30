import Button from "@/shared/components/ui/Button";
import Modal from "@/shared/components/ui/Modal";
import Input from "@/shared/components/ui/Input";

const AddStudentModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-lg font-bold mb-4">Add Student</h2>

      <div className="space-y-3">
        <Input placeholder="Name" />
        <Input placeholder="Room Number" />
        <Input placeholder="Phone" />

        <select className="w-full border px-3 py-2 rounded-lg">
          <option>Paid</option>
          <option>Pending</option>
        </select>

        <Button className="w-full">Add</Button>
      </div>
    </Modal>
  );
};

export default AddStudentModal;