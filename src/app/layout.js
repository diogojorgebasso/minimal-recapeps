import { getAuthenticatedAppForUser } from "@/serverApp";
import { AuthProvider } from "@/AuthProvider";


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
