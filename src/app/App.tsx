import { useState } from "react";
import { QuestionPage } from "@/app/components/QuestionPage";
import { ScoldingPage } from "@/app/components/ScoldingPage";
import { SuccessPage } from "@/app/components/SuccessPage";

type Page = "question" | "scolding" | "success";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("question");

  const handleYes = () => {
    setCurrentPage("success");
  };

  const handleNo = () => {
    setCurrentPage("scolding");
  };

  const handleGoBack = () => {
    setCurrentPage("question");
  };

  return (
    <>
      {currentPage === "question" && (
        <QuestionPage onYes={handleYes} onNo={handleNo} />
      )}
      {currentPage === "scolding" && (
        <ScoldingPage onGoBack={handleGoBack} />
      )}
      {currentPage === "success" && <SuccessPage onGoBack={handleGoBack} />}
    </>
  );
}