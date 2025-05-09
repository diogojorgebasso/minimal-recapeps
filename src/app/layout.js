import { getAuthenticatedAppForUser } from "@/serverApp";
import { AuthProvider } from "@/AuthProvider";

export const dynamic = "force-dynamic"

export default async function RootLayout({ children }) {
  const { user } = await getAuthenticatedAppForUser();
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
