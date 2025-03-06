
import { RegisterForm } from "@/components/RegisterForm";

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold text-secondary-dark mb-2">
          Crear una cuenta
        </h1>
        <p className="text-secondary mb-8">
          Únete a nuestra comunidad de alquiler de autos
        </p>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
