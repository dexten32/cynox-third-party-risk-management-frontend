import { Badge } from "@/components/ui/badge";

type ClientInfoProps = {
  name: string;
  email: string;
  totalVendors: number;
  completedVendors: number;
};

export default function ClientInfoPanel({
  name,
  email,
  totalVendors,
  completedVendors,
}: ClientInfoProps) {
  const pendingVendors = totalVendors - completedVendors;

  return (
    <div className="border border-border rounded-xl bg-[var(--bg)] p-6 shadow-md w-full flex flex-col gap-2">
      <h2 className="text-xl font-semibold text-foreground">Welcome, {name}</h2>
      <p className="text-sm text-muted-foreground">{email}</p>

      <div className="flex gap-4 mt-4 flex-wrap">
        <Badge variant="secondary">Total Vendors: {totalVendors}</Badge>
        <Badge variant="success">Completed: {completedVendors}</Badge>
        <Badge variant="destructive">Pending: {pendingVendors}</Badge>
      </div>
    </div>
  );
}
