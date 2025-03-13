export default function About() {
    return (
        <section id="about" className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-orange-600 mb-8">About Us</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-4">
                    <div className="flex justify-center">
                        <img 
                            src="img1.jpg" 
                            alt="Company Logo" 
                            className="w-full max-w-md rounded-lg shadow-lg"
                        />
                    </div>

                    <div>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            We are a passionate team dedicated to providing high-quality digital solutions.
                            With years of experience, we specialize in <span className="text-orange-600 font-semibold">
                            web development, mobile applications</span>, and innovative IT services to help 
                            businesses grow. Our goal is to deliver user-friendly, scalable, and result-oriented 
                            solutions that help our clients succeed in the digital world.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
