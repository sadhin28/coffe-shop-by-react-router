
const DataFaq = ({ faq }) => {
    const {question,answer}=faq
    return (
        <div>
            <details className="collapse collapse-arrow bg-base-100 border-base-300 border">
                <summary className="collapse-title text-primary font-semibold">{question}</summary>
                <div className="collapse-content text-sm">
                   {answer}
                </div>
            </details>
        </div>
    );
};

export default DataFaq;