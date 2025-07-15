// components/vendor/VendorQuestionnaire.tsx

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const questions = [
  "Do you have ISO 27001 certification?",
  "Do you conduct regular security audits?",
  "Do you maintain a vendor risk management program?",
];

type Answer = {
  choice: "yes" | "no" | null;
  file?: File | null;
  comment?: string;
};

export default function VendorQuestionnaire() {
  const [answers, setAnswers] = useState<Answer[]>(
    questions.map(() => ({ choice: null }))
  );

  const [submitted, setSubmitted] = useState(false);

  const handleChoice = (index: number, choice: "yes" | "no") => {
    const newAnswers = [...answers];
    newAnswers[index].choice = choice;
    // Reset file/comment when changing choice
    newAnswers[index].file = null;
    newAnswers[index].comment = "";
    setAnswers(newAnswers);
  };

  const handleFileChange = (index: number, file: File | null) => {
    const newAnswers = [...answers];
    newAnswers[index].file = file;
    setAnswers(newAnswers);
  };

  const handleCommentChange = (index: number, comment: string) => {
    const newAnswers = [...answers];
    newAnswers[index].comment = comment;
    setAnswers(newAnswers);
  };

  const handleChangeOption = (index: number) => {
    const newAnswers = [...answers];
    newAnswers[index] = { choice: null };
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    // Simple validation
    const allAnswered = answers.every((ans) =>
      ans.choice === "yes"
        ? ans.file !== undefined && ans.file !== null
        : ans.choice === "no"
        ? ans.comment && ans.comment.trim() !== ""
        : false
    );

    if (!allAnswered) {
      alert("Please complete all questions with required uploads or comments.");
      return;
    }

    // Submit logic here (e.g., API call)

    setSubmitted(true);
  };

  return (
    <div className="border border-border rounded-xl bg-background p-6 shadow-md w-full space-y-6">
      <h2 className="text-xl font-semibold text-foreground mb-4">
        Vendor Questionnaire
      </h2>

      {questions.map((question, index) => (
        <div key={index} className="border p-4 rounded-lg space-y-2">
          <p className="font-medium">{question}</p>

          {submitted ? (
            <p className="text-muted-foreground">
              {answers[index].choice === "yes"
                ? "Answered: Yes"
                : "Answered: No"}
            </p>
          ) : answers[index].choice === null ? (
            <div className="flex gap-4 mt-2">
              <Button
                variant="outline"
                onClick={() => handleChoice(index, "yes")}
              >
                Yes
              </Button>
              <Button
                variant="outline"
                onClick={() => handleChoice(index, "no")}
              >
                No
              </Button>
            </div>
          ) : answers[index].choice === "yes" ? (
            <div className="space-y-2">
              <Input
                type="file"
                accept=".pdf,.docx,.png,.jpg"
                onChange={(e) =>
                  handleFileChange(index, e.target.files?.[0] || null)
                }
                disabled={submitted}
              />
              {!submitted && (
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => handleChangeOption(index)}
                >
                  Change Option
                </Button>
              )}
            </div>
          ) : (
            <div className="space-y-2">
              <Textarea
                placeholder="Write your comment here..."
                value={answers[index].comment}
                onChange={(e) => handleCommentChange(index, e.target.value)}
                disabled={submitted}
              />
              {!submitted && (
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => handleChangeOption(index)}
                >
                  Change Option
                </Button>
              )}
            </div>
          )}
        </div>
      ))}

      <div className="flex justify-end">
        <Button onClick={handleSubmit} disabled={submitted}>
          {submitted ? "Submitted" : "Submit Questionnaire"}
        </Button>
      </div>
    </div>
  );
}
