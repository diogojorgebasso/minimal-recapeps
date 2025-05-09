import { getAuthenticatedAppForUser } from "@/serverApp";
import { AuthProvider } from "@/AuthProvider";

export const dynamic = "force-dynamic"

export default function RootLayout({ children }) {
  const { user } = getAuthenticatedAppForUser();
  return (
    <html lang="en">
      <AuthProvider initialUser={user}>
        <body>
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
