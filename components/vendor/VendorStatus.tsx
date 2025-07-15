// components/vendor/VendorStatus.tsx

type VendorStatusProps = {
  questionnaireStatus: "Not Started" | "Incomplete" | "Complete" | "Submitted";
};

export default function VendorStatus({
  questionnaireStatus,
}: VendorStatusProps) {
  const getMessage = () => {
    switch (questionnaireStatus) {
      case "Not Started":
        return "You have not started your questionnaire. Please complete it to proceed.";
      case "Incomplete":
        return "Your questionnaire is incomplete. Kindly finish all questions and submit.";
      case "Complete":
        return "Your questionnaire is complete but not yet submitted. Review and submit when ready.";
      case "Submitted":
        return "Your submission has been locked and is currently under review by the company.";
      default:
        return "Status unknown.";
    }
  };

  return (
    <div className="border border-border rounded-xl bg-background p-6 shadow-md w-full min-h-[200px] flex items-center justify-center text-center">
      <p className="text-foreground text-lg font-medium max-w-xl">
        {getMessage()}
      </p>
    </div>
  );
}
