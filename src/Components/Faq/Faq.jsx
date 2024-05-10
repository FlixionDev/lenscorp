import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";
const FAQ = () => {
    const faqs = [
        { question: 'Do I need to sign a contract?', answer: 'We will first work with you to comprehend your requirements in detail. Thereafter, we would draft an agreement with proposed solutions.After assessing possible challenges and pitfalls and identifying ways to overcome them, we will jointly sign an agreement, not a binding contract.' },
        { question: 'What sevices do we offer?', answer: 'We build accurate and efficient AI systems for your business. Our ethically-trained solutions are paving a new path forward to create explainable, transparent, and easily customizable. In addition, we grant ownership of all copyrights to the system, software, and model to you.' },
        { question: 'How do we ensure quality of deliverables?', answer: 'We are researchers, first. We thoroughly benchmark our proposed solutions against internal and public datasets and baselines after each development sprint. After final delivery, we will continuously enhance our delivery based on your feedbacks.' },
        { question: 'How do you ensure user privacy?', answer: 'We do not share, sell, or rent your competitive information (including any and all data) to any third party.Since we grant exclusive Intellectual Property Rights back to you, we have no intention of violating any user privacy.' },
        { question: 'How do I begin collaboration?', answer: 'Please contact us at solutions@lenscorp.ai. We usually respond within 24 Hrs' },
        { question: 'How can I pay for the services?', answer: 'We split the entire project into multiple milestones.We work on an advanced milestone payment basis with an option to drop off remaining milestones anytime.' }
    ];

    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpansion = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
        }
    };

    return (
        <div>
            <div>
                <p className='text-center text-2xl mt-10'>GET TO KNOW US</p>
                <h1 className='text-7xl mt-4' style={{textAlign:'center'}}>Frequently Asked Questions</h1>
            </div>
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="p-4 rounded-md" style={{ border: '1px solid' }}>
                            <button
                                onClick={() => toggleExpansion(index)}
                                className="w-full text-left font-semibold focus:outline-none flex justify-between items-center"
                            >
                                {faq.question}
                                <FaAngleDown />
                            </button>
                            {(expandedIndex === index) && (
                                <div className="mt-2 text-gray-700">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
