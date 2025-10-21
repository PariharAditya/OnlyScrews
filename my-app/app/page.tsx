import Header from '../components/HeroSection';
import Footer from '../components/Footer';
import ContactButtons from '../components/FloatingButton';
import InteractiveLink from '../components/InteractiveLink';
import FeatureCard from '../components/FeatureCard';

export default function Home() {
  const features = [
    {
      icon: '🛡️',
      title: 'Quality Assured',
      description: 'All our products meet international quality standards'
    },
    {
      icon: '🚚',
      title: 'Nationwide Delivery',
      description: 'Fast delivery to all major industrial hubs across India'
    },
    {
      icon: '👥',
      title: 'Expert Support',
      description: 'Technical guidance and personalized service'
    },
    {
      icon: '📦',
      title: 'Bulk Focus',
      description: 'Specialized in handling large quantity orders'
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1a5f7a 0%, #159895 100%)',
        color: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 20px',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            marginBottom: '24px',
            lineHeight: '1.2'
          }}>
            Industrial Fasteners
            <span style={{
              display: 'block',
              color: '#57C5B6',
              fontSize: '4rem',
              marginTop: '10px'
            }}>
              Made Simple
            </span>
          </h1>
          <p style={{
            fontSize: '1.25rem',
            marginBottom: '40px',
            color: '#e0f2fe',
            maxWidth: '800px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            Your trusted partner for high-quality screws, nuts, bolts, washers, and anchors. 
            Specializing in bulk orders with expert guidance for industrial buyers across India.
          </p>
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <InteractiveLink href="/categories" variant="primary">
              Browse Products
            </InteractiveLink>
            <InteractiveLink href="/bulk-enquiry" variant="secondary">
              Request Bulk Quote
            </InteractiveLink>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        backgroundColor: '#f8f9fa',
        padding: '80px 20px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#343a40',
              marginBottom: '16px'
            }}>
              Why Choose Screw Bazar?
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#6c757d',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              We understand the unique needs of industrial buyers and provide tailored solutions 
              for your fastener requirements.
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        backgroundColor: '#1a5f7a',
        color: 'white',
        padding: '80px 20px'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '20px'
          }}>
            Ready to Place Your Bulk Order?
          </h2>
          <p style={{
            fontSize: '1.25rem',
            marginBottom: '40px',
            color: '#e0f2fe'
          }}>
            Get competitive pricing and expert guidance for your industrial fastener requirements.
          </p>
          <InteractiveLink href="/bulk-enquiry" variant="accent">
            Get Instant Quote
          </InteractiveLink>
        </div>
      </section>

      <Footer />
      <ContactButtons />
    </>
  );
}  