
const DataFaq = ({ faq }) => {
    const {question,}=faq
    return (
        <div>
            <details className="collapse collapse-arrow bg-base-100 border-base-300 border">
                <summary className="collapse-title font-semibold">How do I create an account?</summary>
                <div className="collapse-content text-sm">
                    Click the "Sign Up" button in the top right corner and follow the registration process.
                </div>
            </details>
        </div>
    );
};

export default DataFaq;