import { useState } from "react";
import StudentTable from "../components/StudentTable";
import StudentFilters from "../components/StudentFilters";
import AddStudentModal from "../components/AddStudentModal";
import Button from "../../../shared/components/ui/Button";

const Students = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Students</h1>

        <Button onClick={() => setIsOpen(true)}>
          + Add Student
        </Button>
      </div>

      <StudentFilters />

      <StudentTable />

      <AddStudentModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Students;