"use client";
import { useRouter } from "next/navigation";

export default function DeleteBtn({ id }) {
  const router = useRouter();

  async function handleDeleteUser() {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      await fetch(`http://localhost:3000/api/kadsubeb_api?id=${id}`, {
        method: "DELETE",
      });
      router.push("/admin");
      router.refresh();
    }
  }
  return (
    <button
      className="btn removeBtn "
      onClick={handleDeleteUser}
    >
      <i className="bi bi-trash me-1 text-danger"></i>
    </button>
  );
}
