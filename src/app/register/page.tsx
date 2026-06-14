export default function RegisterPage() {
  return (
    <div className="max-w-md mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-6">
        Register
      </h1>

      <form className="space-y-4">
        <input
          placeholder="Name"
          className="border p-2 w-full"
        />

        <input
          placeholder="Email"
          className="border p-2 w-full"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full"
        />

        <button
          className="w-full bg-black text-white p-2"
        >
          Register
        </button>
      </form>
    </div>
  );
}