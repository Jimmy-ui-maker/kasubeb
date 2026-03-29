"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginForm() {
  const [schoolname, setSchoolname] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!schoolname || !password) {
      setError("All fields are needed!!!");
      return;
    }

    setIsSubmitting(true);

    const response = await fetch("/api/login_api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        schoolname,
        password,
      }),
    });

    if (response.status === 200) {
      router.push("/admin");
      router.refresh();
    } else {
      setError("Invalid email or password");
      setIsSubmitting(false);
    }
  }

  return (
    <section className="createForm min-vh-100 w-100 d-flex justify-content-center align-items-center">
      <div className="container">
        <h1 className="text-start text-uppercase">Welcome Back</h1>
        <h2 className=" text-center badge ">Admin Login</h2>
        <hr className=" mt-2" />
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <label>school Name</label>
                <input
                  type="text"
                  className="form-control shadow-none"
                  onChange={(e) => setSchoolname(e.target.value)}
                  value={schoolname}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control shadow-none"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-submit">
              {submitting ? "Logging in..." : "Login"}
            </button>
            
          </div>
          <Link
              className=" border border-black rounded-2 p-1 mt-4 text-dark text-decoration-none"
              href={"/admin/adminRegister"}
            >
              Register Here
            </Link>
          {error && <div className="alert alert-danger">{error}</div>}
        </form>
      </div>
    </section>
  );
}
