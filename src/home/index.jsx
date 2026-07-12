import Header from "@/components/custom/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Home = () => {
    return (
        <>
            <Header />

            <main className="overflow-x-hidden">
                <Hero />
                <Features />
                <HowItWorks />
                <CTA />
                <Footer />
            </main>
        </>
    );
};

export default Home;