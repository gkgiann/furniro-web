import { useState } from "react";
import { toast } from "react-toastify";
import { z } from "zod/v4";

const emailSchema = z.email("Digite um e-mail válido.");

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubscribe() {
    const result = emailSchema.safeParse(email);

    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    setError("");
    toast.success("Inscrição realizada com sucesso!");
    setEmail("");
  }

  return (
    <div className="flex flex-col items-start gap-2 md:gap-13.75">
      <h3 className="font-medium">Newsletter</h3>

      <div className="relative flex items-center gap-4">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter Your Email Address"
          className="w-full border-b border-black bg-transparent pb-0.75 text-sm outline-none placeholder:text-footer-gray"
        />

        <button
          onClick={handleSubscribe}
          className="cursor-pointer border-b border-black pb-0.75 text-sm font-medium text-black"
        >
          SUBSCRIBE
        </button>
        {error && (
          <p className="absolute top-8 left-0 text-sm text-red-500">{error}</p>
        )}
      </div>
    </div>
  );
}
