export function Header() {
  return (
    <header>
      <div>
        <div>
          <h1>運送会社用アプリ</h1>
        </div>
        <nav>
          <a href="/employee">
          {/* <a hx-get="/employee" hx-target="#main"> */}
            employee
          </a>
          <a href="/luggage">
          {/* <a hx-get="/luggage" hx-target="#main"> */}
            Luggage
          </a>
          <a href="/orders">
          {/* <a hx-get="/orders" hx-target="#main"> */}
            Orders
          </a>
          <a href="/truck">
          {/* <a hx-get="/truck" hx-target="#main"> */}
            Truck
          </a>
          <a href="/admin">
          {/* <a hx-get="/admin" hx-target="#main"> */}
            Admin
          </a>
          <a href="/auth/sign-in">
          {/* <a hx-get="/auth/sign-in" hx-target="#main"> */}
            Sign IN
          </a>
          <a href="/auth/sign-up">
          {/* <a hx-get="/auth/sign-up" hx-target="#main"> */}
            Sign UP
          </a>
        </nav>
      </div>
    </header>
  );
}
