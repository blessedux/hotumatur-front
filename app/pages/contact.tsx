'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          {/* ... (your ContactPage code here) */}
        </div>
      </main>
      <Footer />
    </>
  );
}