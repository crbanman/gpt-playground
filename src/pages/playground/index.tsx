import { useState } from "react";
import { Header } from "~/components/ui/Header";

export default function Playground() {
  const [selectedOption, setSelectedOption] = useState("");
  const [prompt, setPrompt] = useState("");
  const [submissions, setSubmissions] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmissions([...submissions, prompt]);
    setPrompt("");
  };

  const handleClearSubmissions = () => {
    setSubmissions([]);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4">
        <h1 className="mb-8 text-6xl font-bold">Playground</h1>
        <form
          className="mt-3 flex flex-col space-y-4 text-2xl"
          onSubmit={handleSubmit}
        >
          <label htmlFor="options" className="text-lg font-medium">
            Please select an option:
          </label>
          <div id="options" className="flex space-x-4">
            <label
              htmlFor="narrative"
              className={`flex cursor-pointer items-center space-x-2 rounded-lg px-4 py-2 ${
                selectedOption === "narrative"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              <input
                type="radio"
                id="narrative"
                name="option"
                value="narrative"
                checked={selectedOption === "narrative"}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="hidden"
              />
              <span>Narrative</span>
            </label>
            <label
              htmlFor="question"
              className={`flex cursor-pointer items-center space-x-2 rounded-lg px-4 py-2 ${
                selectedOption === "question"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              <input
                type="radio"
                id="question"
                name="option"
                value="question"
                checked={selectedOption === "question"}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="hidden"
              />
              <span>Question</span>
            </label>
          </div>
          <ul className="mt-4 space-y-4">
            {submissions.map((submission, index) => (
              <li key={index} className="rounded-lg border border-gray-400 p-4">
                <p className="mb-2 text-lg font-medium">Prompt:</p>
                <p className="text-lg">{submission}</p>
              </li>
            ))}
          </ul>
          <label htmlFor="prompt" className="text-lg font-medium">
            Please enter a prompt:
          </label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="rounded-lg border border-gray-400 px-4 py-2 text-lg"
          />
          <button
            type="submit"
            className="rounded-lg bg-blue-500 px-4 py-2 text-white"
          >
            Submit
          </button>
        </form>
        <div className="mt-8">
          <button
            onClick={handleClearSubmissions}
            className="rounded-lg bg-red-500 px-4 py-2 text-white"
          >
            Clear Entries
          </button>
        </div>
      </main>
    </>
  );
}
