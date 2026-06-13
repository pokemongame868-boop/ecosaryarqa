import './styles.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Destinations from './components/Destinations';
import Routes from './components/Routes';
import EcoRules from './components/EcoRules';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import { I18nProvider } from './i18n';

export default function App() {
  return (
    <I18nProvider>
      <Header />
      <main>
        <Hero />
        <Categories />
        <Destinations />
        <Routes />
        <EcoRules />
        <Gallery />
        <Blog />
        <BookingForm />
      </main>
      <Footer />
    </I18nProvider>
  );
}
