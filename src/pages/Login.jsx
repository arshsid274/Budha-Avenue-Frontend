import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

// These accounts exist only to let visitors explore this demo deployment.
// They are not connected to a customer account or a production auth system.
const DEMO_ACCOUNTS = [
  {
    email: "admin@demo.buddha-avenue.test",
    password: "DemoAdmin2026!",
    role: "Admin",
    name: "Demo Administrator",
    description: "Full demo access",
  },
  {
    email: "staff@demo.buddha-avenue.test",
    password: "DemoStaff2026!",
    role: "Staff",
    name: "Demo Staff Member",
    description: "Staff demo access",
  },
];

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const startDemoSession = (account) => {
    const sessionUser = {
      email: account.email,
      role: account.role,
      name: account.name,
    };

    // Store only the display/session details; a password never belongs in localStorage.
    localStorage.setItem("User", JSON.stringify(sessionUser));
    localStorage.setItem("currentUser", "true");
    localStorage.setItem("role", account.role);
    localStorage.setItem("name", account.name);

    toast.success(`Welcome ${account.name}!`);
    navigate("/");
  };

  const handleSignIn = (event) => {
    event.preventDefault();

    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }

    const account = DEMO_ACCOUNTS.find(
      (demoAccount) => demoAccount.email === email.trim().toLowerCase(),
    );

    if (!account || account.password !== password) {
      toast.error("Use one of the demo accounts shown below.");
      return;
    }

    startDemoSession(account);
  };

  const signInWithDemoAccount = (account) => {
    setEmail(account.email);
    setPassword(account.password);
    startDemoSession(account);
  };

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <Toaster />
      <div
        style={{
          backgroundImage:
            "url(https://cf.bstatic.com/xdata/images/hotel/max1024x768/547211264.jpg?k=b959e59a2a5611d0b9bdedae3e9b1290fca7e11c23f60b5d4c2b9e72d8814b91&o=&hp=1)",
        }}
        className="hero min-h-screen bg-base-200"
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content max-w-5xl flex-col md:gap-16 lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl w-full font-bold text-white">
              Buddha Avenue
            </h1>
            <p className="mt-3 text-white/90">
              Explore the booking portal with a demo account.
            </p>
          </div>

          <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text">Email</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="input input-bordered"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-control relative">
                <label className="label" htmlFor="password">
                  <span className="label-text">Password</span>
                </label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="input input-bordered pr-10"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-12 text-gray-500"
                  onClick={() => setShowPassword((visible) => !visible)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                </button>
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </div>

              <div className="divider my-1 text-xs">DEMO ACCESS</div>
              <p className="-mt-2 text-sm text-gray-600">
                These are public demo accounts. They do not grant access to real customer data.
              </p>

              <div className="space-y-3">
                {DEMO_ACCOUNTS.map((account) => (
                  <div
                    key={account.email}
                    className="rounded-lg border border-base-300 bg-base-200 p-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold">{account.role} demo</p>
                        <p className="text-xs text-gray-600">{account.description}</p>
                      </div>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline"
                        onClick={() => signInWithDemoAccount(account)}
                      >
                        Quick sign in
                      </button>
                    </div>
                    <div className="mt-3 space-y-1 break-all text-xs">
                      <p>
                        <span className="font-medium">Email: </span>
                        <code>{account.email}</code>
                      </p>
                      <p>
                        <span className="font-medium">Password: </span>
                        <code>{account.password}</code>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
