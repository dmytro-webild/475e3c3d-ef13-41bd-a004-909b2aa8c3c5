"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { ShieldCheck, Star, TrendingUp } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="medium"
        background="noise"
        cardStyle="gradient-mesh"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "Services",          id: "#services"},
        {
          name: "How It Works",          id: "#about"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="Powered Reviews"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "glowing-orb"}}
      imagePosition="right"
      title="GROW YOUR BUSINESS Generate Verified Store Ratings That Grow"
      description="Elevate your shop’s appeal with trusted buyer experiences, fueling better engagement and more checkouts."
      kpis={[
        {
          value: "5000+",          label: "Verified Reviews"},
        {
          value: "98%",          label: "Client Satisfaction"},
        {
          value: "100%",          label: "Authenticity Rate"},
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "Schedule a Meeting Now",          href: "#contact"},
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-handsome-man-smiling_23-2148729669.jpg",          alt: "Client Sarah J."},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-man-wearing-apron_23-2149007471.jpg",          alt: "Client Michael K."},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-senior-woman-professional-blazer-outdoors_23-2150296635.jpg",          alt: "Client Emily R."},
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-middle-age-woman-working-office-ordering-delivery-food-looking-camera-smiling-with-open-arms-hug-cheerful-expression-embracing-happiness_839833-19451.jpg",          alt: "Client David W."},
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-man-correcting-grammar-mistakes_23-2150171372.jpg",          alt: "Satisfied Client John D."},
      ]}
      avatarText="Join thousands of satisfied clients"
      imageSrc="http://img.b2bpic.net/free-photo/closeup-african-american-woman-typing-laptop_482257-131626.jpg"
      imageAlt="Modern dashboard showing growth metrics"
      mediaAnimation="slide-up"
      marqueeItems={[
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/hands-using-tablet-screen-showing-statistics-business-data_53876-42762.jpg",          alt: "Analytics Dashboard"},
        {
          type: "text",          text: "Enhanced Brand Reputation"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/teleworker-using-accounting-statistics-graphs-project-research_482257-124366.jpg",          alt: "Growth Chart"},
        {
          type: "text",          text: "Boosted Conversion Rates"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/customer-satisfaction-service-care-problem-solving_53876-120092.jpg",          alt: "Customer Satisfaction"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",          content: "Why Choose Us? Trusted UGC Review Services That Drive Sales & Credibility"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/smiley-business-people-with-pizza-medium-shot_23-2148911791.jpg",          alt: "Business professionals collaborating around a table"},
      ]}
      buttons={[
        {
          text: "Learn More"},
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      features={[
        {
          title: "Buy Amazon Reviews",          description: "Boost your Amazon product listings with authentic, high-quality reviews from real buyers.",          imageSrc: "http://img.b2bpic.net/free-photo/customer-experience-creative-collage_23-2149346506.jpg",          imageAlt: "Amazon logo",          titleImageSrc: "http://img.b2bpic.net/free-photo/person-organising-live-shop_23-2149947471.jpg",          buttonText: "Learn More"},
        {
          title: "Buy TikTok Shop Reviews",          description: "Increase visibility and trust on TikTok Shop with genuine user-generated content and reviews.",          imageSrc: "http://img.b2bpic.net/free-photo/female-artist-explaining-painting-techniques-used-online-tutorial_482257-118488.jpg",          imageAlt: "TikTok logo",          titleImageSrc: "http://img.b2bpic.net/free-photo/woman-live-streaming-online-shopping-campaign_53876-96209.jpg",          buttonText: "Learn More"},
        {
          title: "Buy Walmart Reviews",          description: "Enhance your product credibility on Walmart Marketplace with verified customer reviews.",          imageSrc: "http://img.b2bpic.net/free-photo/cyber-monday-shopping-cart-with-neon-lights-online-sales_23-2152033026.jpg",          imageAlt: "Walmart logo",          titleImageSrc: "http://img.b2bpic.net/free-photo/regretting-middle-aged-blonde-delivery-woman-blue-uniform-cap-holding-clipboard-pencil-looking-clipboard-putting-hand-head-isolated-orange-background_141793-107869.jpg",          buttonText: "Learn More"},
        {
          title: "Buy Etsy Reviews",          description: "Grow your Etsy shop's reputation and attract more customers with authentic feedback.",          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-organizing-live-shop_23-2149947472.jpg",          imageAlt: "Etsy logo",          titleImageSrc: "http://img.b2bpic.net/free-photo/small-business-entrepreneur-person-using-clipboard_23-2148463267.jpg",          buttonText: "Learn More"},
      ]}
      title="Our Specialized Review Services"
      description="We help you boost your brand's presence across major platforms with authentic user-generated content."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="depth-3d"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "1",          value: "5 Stars",          title: "Average Rating",          description: "Our campaigns consistently achieve top-tier customer satisfaction.",          icon: Star,
        },
        {
          id: "2",          value: "3x",          title: "Conversion Lift",          description: "Clients see significant increases in sales after using our services.",          icon: TrendingUp,
        },
        {
          id: "3",          value: "Verified",          title: "Authenticity",          description: "All reviews are from real users, ensuring genuine feedback.",          icon: ShieldCheck,
        },
      ]}
      title="Results That Speak for Themselves"
      description="Our clients experience significant growth and enhanced credibility."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          title: "Increased Sales Dramatically!",          quote: "Working with UGC Review Expert transformed our Amazon sales. The reviews are high-quality and look incredibly natural. Highly recommend their service!",          name: "Sarah Johnson",          role: "CEO, TechInnovate",          imageSrc: "http://img.b2bpic.net/free-photo/businessman-with-hand-reaching-out_23-2148308600.jpg",          imageAlt: "Sarah Johnson"},
        {
          id: "2",          title: "Boosted Our TikTok Shop Visibility",          quote: "We struggled to get traction on TikTok Shop until we found UGC Review Expert. Their authentic reviews made a huge difference in our product's visibility and trust.",          name: "Michael Chen",          role: "Marketing Director, TrendPulse",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-employee-happy-be-back-work_23-2148727616.jpg",          imageAlt: "Michael Chen"},
        {
          id: "3",          title: "Exceptional Quality and Service",          quote: "The team at UGC Review Expert is top-notch. They delivered exactly what they promised: genuine reviews that significantly improved our product's perception on Walmart.",          name: "Emily Rodriguez",          role: "E-commerce Manager, GlobalGoods",          imageSrc: "http://img.b2bpic.net/free-photo/plus-size-woman-working-professional-business-office_23-2150579594.jpg",          imageAlt: "Emily Rodriguez"},
        {
          id: "4",title: "Perfect for Etsy Sellers",          quote: "As an Etsy seller, reputation is everything. UGC Review Expert helped me build trust with new customers, leading to a noticeable increase in orders. Fantastic service!",          name: "David Kim",          role: "Founder, ArtisanCrafts",          imageSrc: "http://img.b2bpic.net/free-photo/male-employee-with-coffee-cup-office_482257-119420.jpg",          imageAlt: "David Kim"},
        {
          id: "5",          title: "Reliable and Results-Driven",          quote: "We needed a reliable partner to generate reviews, and UGC Review Expert delivered. Their process is transparent, and the results speak for themselves.",          name: "Jessica Lee",          role: "Brand Manager, Future Retail",          imageSrc: "http://img.b2bpic.net/free-photo/old-client-buys-eco-store-pantry-staples_482257-81662.jpg",          imageAlt: "Jessica Lee"},
        {
          id: "6",          title: "Game Changer for Our Online Store!",          quote: "UGC Review Expert provided exceptional service, helping us gather positive and genuine reviews that significantly boosted our online presence and sales.",          name: "Chris Green",          role: "E-commerce Founder, GlobalTrends",          imageSrc: "http://img.b2bpic.net/free-photo/attractive-business-woman-working-his-laptop_158595-1121.jpg",          alt: "Chris Green"},
      ]}
      title="What Our Clients Say"
      description="Hear from businesses that have leveraged our expertise to grow."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Amazon",        "TikTok Shop",        "Walmart",        "Etsy",        "eBay",        "Shopify",        "Google Shopping"]}
      title="Trusted by Businesses on Leading Platforms"
      description="We serve clients looking to boost their presence on the world's largest marketplaces and e-commerce platforms."
      speed={35}
      showCard={false}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",          title: "Are the reviews authentic?",          content: "Yes, all our reviews are generated by real users who purchase and experience your product. We strictly adhere to platform guidelines to ensure authenticity and compliance."},
        {
          id: "faq2",          title: "How long does it take to get reviews?",          content: "The timeline varies depending on the platform and volume. Typically, you can expect to see new reviews within a few days to a week after our campaign begins."},
        {
          id: "faq3",          title: "What platforms do you support?",          content: "We specialize in major e-commerce platforms including Amazon, TikTok Shop, Walmart, Etsy, and eBay, with capabilities to support others upon request."},
        {
          id: "faq4",          title: "Is this service safe for my account?",          content: "Absolutely. Our methods are designed to be fully compliant with each platform's terms of service, prioritizing the long-term safety and integrity of your seller account."},
      ]}
      title="Frequently Asked Questions"
      description="Find answers to common questions about our services and process."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient"}}
      tag="Get Started"
      title="Ready to Grow Your Business?"
      description="Contact us today to generate verified store ratings and boost your conversions. Email: expertsugcreviews@gmail.com WhatsApp: +923040930007"
      buttons={[
        {
          text: "Schedule a Call"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EdUUqlWxiv4gwKWgGGGeP4f3C3/uploaded-1780510702845-sg9dcuml.jpg"
      columns={[
        {
          items: [
            {
              label: "Home",              href: "#hero"},
            {
              label: "Services",              href: "#services"},
            {
              label: "How It Works",              href: "#about"},
            {
              label: "About",              href: "#about"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
      ]}
      logoText="Powered Reviews"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}