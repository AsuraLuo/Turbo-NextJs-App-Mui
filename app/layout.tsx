import { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/Header";
import ApolloProvider from "@/components/ApolloProvider";
import ReduxProvider from "@/components/ReduxProvider";
import ThemeRegistry from "@/components/ThemeRegistry";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <ApolloProvider>
          <ReduxProvider>
            <ThemeRegistry>
              <Header />
              <div>
                <Link href="/account">Account Page</Link>
                <br />
                <Link href="/login">Login Page</Link>
                <br />
                <Link href="/cart" prefetch={false}>
                  Cart Page
                </Link>
                <br />
              </div>
              <main>{children}</main>
            </ThemeRegistry>
          </ReduxProvider>
        </ApolloProvider>
      </body>
    </html>
  );
};

export default RootLayout;
