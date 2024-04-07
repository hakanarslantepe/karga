"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://api.management.parse25proje.link/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data?.data);
        localStorage.setItem("token", data?.data?.token);
        router.push("/dashboard");
      } else {
        console.error("Giriş başarısız");
      }
    } catch (error) {
      console.error("Bir hata oluştu", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.subtitle}>Please sign in to see dashboard</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          required
          className={styles.input}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className={styles.button} type="submit">
          Giriş Yap
        </button>
        <div>Email: hakanarslantepee@gmail.com</div>
        <div> Sifre: hakan1234</div>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
