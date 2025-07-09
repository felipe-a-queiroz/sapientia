import { logoutUser } from "../../api";
import { useCallback } from "react";

function HomePage() {
  const handleLogout = useCallback(async () => {
    await logoutUser();
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  }, []);

  return (
    <div>
      <h1>Página Inicial</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default HomePage;
