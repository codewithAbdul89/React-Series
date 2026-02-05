import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Home() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const user = useSelector(state => state.auth.user)
  const isLoading = useSelector(state => state.popup.loading)
  // during loading show loading component
  if (isLoading) {
    return (
      <div>.</div>
    )
  }

  // Guest View (Landing Page)

  if (!isLoggedIn) {
    return (
      <div className="w-full flex flex-col min-h-[calc(100vh-80px)] overflow-x-hidden">
        {/* Hero Section */}
        <section className="w-full py-20 bg-brand-beige/20 flex flex-col items-center text-center px-4 animate-slide-in">
          <h1 className="text-5xl md:text-7xl font-bold text-brand-brown mb-6 leading-[1.2]">
            Welcome to <span className="text-brand-gold">Abdul's Web</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-taupe  max-w-2xl mb-10">
            A secure, fast, and reliable authentication solution built for modern web applications.
          </p>
          <Link
            to="/signup"
            className="px-8 py-3 bg-brand-gold text-white font-bold text-lg rounded-full shadow-lg hover:bg-brand-brown hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Get Started
          </Link>
        </section>

        {/* Features Grid */}
        <section className="w-full max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Secure"
            desc="Top-tier security for your data with advanced encryption standard."
          />
          <FeatureCard
            title="Fast"
            desc="Lightning fast response times ensuring smooth user experience."
          />
          <FeatureCard
            title="Reliable"
            desc="99.9% uptime guaranteed. We are always there when you need us."
          />
        </section>
      </div>
    )
  }

  // Logged In View (Dashboard)
  else if (user.displayName || user) {
    return (
      <div className='w-full max-w-7xl mx-auto px-6 py-10 '>

        {/* Welcome Header */}
        <div className='text-center mb-16 animate-slide-in'>
          <h2 className='text-4xl md:text-6xl font-bold text-brand-brown'>
            Welcome , <span className='text-brand-gold'>{user.displayName}!</span>
          </h2>
          <p className='mt-4 text-brand-taupe text-lg'>What would you like to do today?</p>
        </div>

        {/* Dashboard Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <DashboardCard
            title="My Projects"
            desc="View all  ongoing projects."
            link="/project"
            btnText="View Projects"
          />
          <DashboardCard
            title="My Skills"
            desc="View  skill set and profile information."
            link="/skill"
            btnText="View Skills"
          />
          <DashboardCard
            title="My Profile"
            desc="View  personal details and account settings."
            link="/about"
            btnText="View Profile"
          />
        </div>

      </div>
    )
  }
  return null;
}

// Helper Components
const FeatureCard = ({ title, desc }) => (
  <div className="bg-brand-cream/60 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-white">
    <h3 className="text-2xl font-bold text-brand-brown mb-3">{title}</h3>
    <p className="text-brand-olive">{desc}</p>
  </div>
)

const DashboardCard = ({ title, desc, link, btnText }) => (
  <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white hover:-translate-y-2 transition-transform duration-300">
    <h3 className="text-2xl font-bold text-brand-brown mb-3">{title}</h3>
    <p className="text-brand-taupe mb-6">{desc}</p>
    <Link
      to={link}
      className=" px-4 py-2 bg-brand-olive text-center text-white rounded-lg hover:bg-brand-gold transition-colors font-semibold"
    >
      {btnText} 
    </Link>
  </div>
)

export default Home