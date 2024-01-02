

const FrequentlyAskedQuestions = () => {
    // Sample FAQ data
    const faqData = [
        {
            question: 'What payment methods do you accept?',
            answer: 'We accept credit/debit cards and PayPal.',
        },
        {
            question: 'How can I track my order?',
            answer: 'You can track your order in the "Orders" section of your account.',
        },
        // Add more FAQ items as needed
    ];

    return (
        <div>
            <h2>Frequently Asked Questions</h2>
            <ul>
                {faqData.map((faq, index) => (
                    <li key={index}>
                        <h3>{faq.question}</h3>
                        <p>{faq.answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FrequentlyAskedQuestions;
