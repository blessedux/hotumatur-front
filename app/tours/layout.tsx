export default function ToursLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="bg-gray-300 text-white p-4">
        <h1>Tours</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
