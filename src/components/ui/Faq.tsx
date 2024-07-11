import { useState } from "react";
export type FAQ = {
    question: string;
    answer: string;
};
const Faq = () => {

    const faqs = [
        {
            question: 'What payment methods do you accept?',
            answer: 'We accept major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfer.'
        },
        {
            question: 'Can I return a product if I am not satisfied?',
            answer: 'Yes, you can return any unused product within 30 days for a full refund. Please refer to our Return Policy for more details.'
        },
        {
            question: 'How do I track my order?',
            answer: 'Once your order has been shipped, you will receive a tracking number via email. You can track your order using this number on our website.'
        },
        {
            question: 'Do you offer international shipping?',
            answer: 'Yes, we offer international shipping to most countries. Shipping rates and delivery times may vary depending on the destination.'
        },
        {
            question: 'What is your customer support hours?',
            answer: 'Our customer support team is available Monday to Friday, from 9:00 AM to 6:00 PM (GMT). You can reach us via email or phone.'
        }
        // Add more FAQs as needed
    ];


    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null); // Collapse if it's already open
        } else {
            setActiveIndex(index); // Expand the clicked FAQ
        }
    };
    return (
        <div className="p-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-semibold mb-6 text-center text-gray-700">Frequently Asked <span className=" text-orange-500">Questions</span></h2>
                <div className="divide-y divide-gray-300 md:pt-10">
                    {faqs.map((faq, index) => (
                        <div key={index} className="py-6">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="flex justify-between items-center w-full text-left focus:outline-none"
                            >
                                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-6 w-6 ${activeIndex === index ? 'transform rotate-180' : ''} transition-transform duration-300`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`mt-4 text-gray-600 transition-opacity duration-300 ${activeIndex === index ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
                                    }`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;