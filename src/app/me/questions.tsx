import questionBank from './question-details';

export default function QuestionsComponents() {
  return (
    <section className="mb-2 border-t pt-2">
      <h2 className="mb-4 mt-2 text-center text-2xl font-bold">
        Want to know more?
      </h2>
      {questionBank.map((question, index) => (
        <div key={index} className="py-2">
          <h3 className="m-1 text-lg font-bold">{question.question}</h3>
          <p className="mx-1 my-2">{question.answer}</p>
        </div>
      ))}
    </section>
  );
}
