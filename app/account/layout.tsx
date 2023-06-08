import Link from "next/link";

const AccountLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return (
    <section>
      <ul>
        <li>
          <Link href="/address">Address Page</Link>
        </li>
        <li>
          <Link href="/orders">Orders Page</Link>
        </li>
        <li>
          <Link href="/wishlist">Wishlist Page</Link>
        </li>
        <li>
          <Link href="/newsletter">Newsletter Page</Link>
        </li>
      </ul>
      <div>{children}</div>
    </section>
  );
};

export default AccountLayout;
