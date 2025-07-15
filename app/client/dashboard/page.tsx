// app/dashboard/company/page.tsx

export default function CompanyDashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome, Company User!</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-xl bg-background shadow">
            <h2 className="font-semibold mb-2">Clients</h2>
            <p>Manage and view clients here.</p>
          </div>

          <div className="p-4 border rounded-xl bg-background shadow">
            <h2 className="font-semibold mb-2">Vendors</h2>
            <p>Manage and review vendors.</p>
          </div>

          <div className="p-4 border rounded-xl bg-background shadow">
            <h2 className="font-semibold mb-2">Upload Summary</h2>
            <p>Upload .docx summary reports.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
