import PageContainer from "../../components/PageContainer";
import { Link } from "react-router-dom";
import qrCodeIOS from "../../assets/images/qrCodeIOS.jpg";
import qrCodeAndroid from "../../assets/images/qrCodeAndroid.jpg";
import "./styles.scss";

export default function HomePage() {
  return (
    <PageContainer title="Welcome to Chapterverse - Unleash Creativity, Inspire Innovation">
      <div className="homepage-intro">
        <h2>Empowering Your Digital Journey</h2>
        <p>
          Welcome to Chapterverse, where your quest for impeccable web solutions
          reaches its destination. Join us in a realm where technology
          synergizes with creativity, crafting web experiences that transcend
          the ordinary.
        </p>
        <p>
          Our dedication to innovation is eclipsed only by our commitment to our
          users. At Chapterverse, we're not just building applications; we're
          shaping the future, one line of code at a time.
        </p>
        <div className="cta-buttons">
          <div className="about-us-link">
            <Link to="/about-us" className="btn btn-primary">
              Learn More About Us
            </Link>
          </div>
          <div className="contact-us-link">
            <Link to="/contact-us" className="btn btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      <section className="homepage-features">
        <h3>Why Chapterverse?</h3>
        <p>
          Dive into an ecosystem of precision-engineered applications designed
          for the modern era. At Chapterverse, functionality meets finesse,
          delivering a user experience that stands unparalleled.
        </p>
        <ul className="feature-list">
          <li>Intuitive Designs that Speak Volumes</li>
          <li>Robust Functionality for Seamless Operations</li>
          <li>Scalable Solutions that Grow with You</li>
          <li>Continuous Innovation to Keep You Ahead</li>
        </ul>
      </section>

      <section className="homepage-mobile-app">
        <h3>Our Mobile App In Production</h3>
        <p>
          First, you need to download the Expo Go app from the app store of your
          smartphone.
        </p>
        <p>
          Once you have the Expo Go app you can now continue with the next step.
        </p>
        <p>
          Scan the QR code with your device to test our app within Expo App.
        </p>

        <div className="qr-codes-container">
          <div className="qr-code">
            <p>For iOS</p>
            <img src={qrCodeIOS} alt="QR Code for iOS" />
          </div>
          <div className="qr-code">
            <p>For Android</p>
            <img src={qrCodeAndroid} alt="QR Code for Android" />
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
