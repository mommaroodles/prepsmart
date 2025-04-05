import React from 'react';


const HowItWorks = () => {
    return (
        <main className="pt-24 min-h-screen px-6 max-w-2/3 mx-auto flex flex-col  bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            <div className="container mx-auto flex flex-col">
                <h1 className="text-4xl font-bold text-center text-white mb-6">How It Works</h1>
                <h2 className="text-2xl font-semibold text-center text-gray-300 mb-4">Practice Your Interview Skills with PrepSmart</h2>
                <p className="text-lg text-center text-white mb-12">PrepSmart is a voice enabled AI-powered interview practice platform that helps you prepare for job interviews with real-time feedback. Follow these simple steps to start practicing your interview skills with PrepSmart.</p>
                <p className="justify-center text-2xl text-center font-semibold text-blue-300 mb-12">Ensure you have your microphone ready, if you don&apos;t have a microphone, then signup with your mobile device.</p>

                <section>
                    <p>Once the interview starts, you will be asked a series of questions. You can respond to the questions using your voice. The AI will listen to your responses and provide real-time feedback on your performance.</p>
                </section>
                <section>
                    <h2 className='text-2xl pt-15 item'>Questions you will be asked before the interview begins.</h2>
                    <ol className='list-decimal pl-10 pt-5'>
                        <li className='list-item text-gray-300 mb-4'>What position you are applying for.</li>
                        <li className=' text-gray-300 mb-4'>What type of interview you would like - This can be Behavioral, Technical or Mixed.</li>
                        <li className=' text-gray-300 mb-4'>What role level you applying for. Example, Entry Level, Junior, Senior, Advanced, Expert Level</li>
                        <li className=' text-gray-300 mb-4'>The number of questions you would like to be asked.</li>
                        <li className=' text-gray-300 mb-4'>A list of technologies you have experience in.</li>
                    </ol>
                </section>
                <section className='mb-5'>
                    <p> Once you have completed the interview, you will receive a summary of your performance. This summary includes your strengths and weaknesses, as well as suggestions for improvement.</p>
                </section>
                <section className='mb-15'>
                    <p>If you experience any problems with our platform, please send an email to melanie@wpdevs.co.za</p>
                </section>

            </div>
        </main>
    );
};

export default HowItWorks;

