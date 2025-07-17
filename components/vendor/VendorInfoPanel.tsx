// components/vendor/VendorInfoPanel.tsx

import { Badge } from "@/components/ui/badge";

type VendorInfoProps = {
  info: {
    name: string;
    email: string;
    client: string;
    questionnaireStatus: string;
  };
};

export default function VendorInfoPanel({ info }: VendorInfoProps) {
  return (
    <div className="border border-border rounded-xl bg-[var(--bg)] p-6 shadow-md w-full flex flex-col gap-2">
      <h2 className="text-xl font-semibold text-foreground">
        Welcome, {info.name}
      </h2>
      <p className="text-sm text-muted-foreground">{info.email}</p>
      <p className="text-sm text-muted-foreground">Client: {info.client}</p>

      <div className="flex gap-4 mt-4 flex-wrap">
        <Badge
          variant={
            info.questionnaireStatus === "Submitted"
              ? "success"
              : info.questionnaireStatus === "Complete"
              ? "secondary"
              : "destructive"
          }
        >
          Status: {info.questionnaireStatus}
        </Badge>
      </div>
    </div>
  );
}
