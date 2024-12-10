export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <header className="bg-blue-600 text-white p-4 text-center">
          <h1>Página de Tours</h1>
        </header>
        <main>{children}</main>
      </div>
    );
  }
  