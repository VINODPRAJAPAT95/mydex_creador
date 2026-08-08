import Button from "../components/ui/Button";

const NotFound = () => (
  <section className="section-pad text-center">
    <p className="eyebrow">404</p>
    <h1 className="mt-3 font-serif text-5xl text-mydex-green">Page Not Found</h1>
    <p className="mx-auto mt-4 max-w-md text-gray-600">
      The page you are looking for may have moved. Return home or explore our products.
    </p>
    <div className="mt-8 flex justify-center gap-4">
      <Button to="/" variant="green">Go Home</Button>
      <Button to="/products" variant="outline">View Products</Button>
    </div>
  </section>
);

export default NotFound;
