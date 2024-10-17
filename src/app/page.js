import Banner from "@/components/banner/Banner";
import CompanyBackground from "@/components/about/CompanyBackground";
import WhyUS from "@/components/about/WhyUS";
import Team from "@/components/about/Team";
import Partners from "@/components/about/Partners";
import Goals from "@/components/about/Goals";

export default function Home() {
  return (
    <main>
      <div class="container h-100 mt-5">
        <div class="row mb-5 text-center">
          <div class="col-12 text-container">
            <h1 class="display-2 mt-5 text-primary">
              Welcome to Elite Barry Software Development & IT Services Company!
            </h1>
            <p class="lead text-dark mb-4 m-auto w-75">
              At EliteBarry we are committed to transforming the technological
              landscape in Afghanistan. With a focus on innovative solutions and
              exceptional service, we empower businesses to thrive in the
              digital age. Explore our services and discover how we can support
              your journey to success.
            </p>
            <a
              href="#register"
              class="btn text-white btn-primary text-uppercase me-2"
            >
              Register
            </a>
            <a
              href="#discover"
              class="btn text-white btn-primary text-uppercase"
            >
              Discover
            </a>
          </div>
        </div>
      </div>
      <Banner />
      <CompanyBackground />
      <WhyUS />
      <Team />
      <Partners />
      <Goals />
    </main>
  );
}
