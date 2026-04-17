export default function Footer() {
  return (
    <footer className="site-footer container">
      <p>
        © <span data-year>{new Date().getFullYear()}</span> alendev
      </p>
    </footer>
  );
}
