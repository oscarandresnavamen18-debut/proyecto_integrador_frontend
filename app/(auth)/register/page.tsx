// src/app/(auth)/register/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!formData.name) {
      newErrors.name = "El nombre es requerido";
    } else if (formData.name.length < 3) {
      newErrors.name = "El nombre debe tener al menos 3 caracteres";
    }

    if (!formData.email) {
      newErrors.email = "El correo es requerido";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Ingresa un correo válido";
    }

    if (!formData.password) {
      newErrors.password = "La contraseña es requerida";
    } else if (formData.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirma tu contraseña";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    if (Object.values(newErrors).some(error => error)) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      console.log("Registro exitoso:", formData);
      setIsLoading(false);
      router.push("/login");
    }, 1500);
  };

  return (
    <div className="register-container">
      <div className="background-pattern"></div>
      
      <div className="floating-logo">
        <span className="logo-icon">🐄</span>
        <span className="logo-text">Ganacol</span>
      </div>

      <div className="register-card">
        <div className="card-header">
          <h1 className="card-title">Crear cuenta</h1>
          <p className="card-subtitle">Únete a nuestra comunidad ganadera</p>
        </div>

        <form onSubmit={handleSubmit} className="register-form">
          {/* Name Input */}
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Nombre Completo
            </label>
            <div className="input-wrapper">
              <span className="input-icon">👤</span>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`form-input ${errors.name ? "input-error" : ""}`}
                placeholder="Juan Pérez"
              />
            </div>
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          {/* Email Input */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Correo Electrónico
            </label>
            <div className="input-wrapper">
              <span className="input-icon">📧</span>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`form-input ${errors.email ? "input-error" : ""}`}
                placeholder="tucorreo@ejemplo.com"
              />
            </div>
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          {/* Password Input */}
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <div className="input-wrapper">
              <span className="input-icon">🔒</span>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`form-input ${errors.password ? "input-error" : ""}`}
                placeholder="••••••••"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          {/* Confirm Password Input */}
          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">
              Confirmar Contraseña
            </label>
            <div className="input-wrapper">
              <span className="input-icon">🔒</span>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={`form-input ${errors.confirmPassword ? "input-error" : ""}`}
                placeholder="••••••••"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
          </div>

          {/* Terms */}
          <label className="terms-label">
            <input type="checkbox" className="checkbox" required />
            <span>
              Acepto los{" "}
              <Link href="/terms" className="link">
                términos y condiciones
              </Link>
            </span>
          </label>

          {/* Submit Button */}
          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading ? (
              <span className="loading-spinner">⏳</span>
            ) : (
              "Crear Cuenta"
            )}
          </button>
        </form>

        {/* Login Link */}
        <div className="login-link">
          ¿Ya tienes cuenta?{" "}
          <Link href="/login" className="link">
            Inicia sesión aquí
          </Link>
        </div>

        {/* Back to Home */}
        <button className="back-button" onClick={() => router.push("/")}>
          ← Volver al inicio
        </button>
      </div>

      <style jsx>{`
        .register-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #064e3b 0%, #047857 50%, #059669 100%);
        }

        .background-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
          animation: moveBackground 20s ease-in-out infinite;
        }

        @keyframes moveBackground {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, 20px);
          }
        }

        .floating-logo {
          position: absolute;
          top: 30px;
          left: 30px;
          display: flex;
          align-items: center;
          gap: 10px;
          color: white;
          font-size: 24px;
          font-weight: 700;
          z-index: 10;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .logo-icon {
          font-size: 32px;
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2));
        }

        .register-card {
          background: white;
          border-radius: 24px;
          padding: 40px;
          max-width: 460px;
          width: 100%;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          position: relative;
          z-index: 1;
          animation: slideUp 0.6s ease-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .card-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .card-title {
          font-size: 28px;
          font-weight: 800;
          color: #064e3b;
          margin-bottom: 8px;
        }

        .card-subtitle {
          font-size: 14px;
          color: #6b7280;
        }

        .register-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-label {
          font-size: 14px;
          font-weight: 600;
          color: #374151;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 16px;
          font-size: 18px;
          pointer-events: none;
        }

        .form-input {
          width: 100%;
          padding: 14px 16px 14px 48px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 15px;
          transition: all 0.3s ease;
          outline: none;
        }

        .form-input:focus {
          border-color: #064e3b;
          box-shadow: 0 0 0 4px rgba(6, 78, 59, 0.1);
        }

        .form-input.input-error {
          border-color: #ef4444;
        }

        .form-input.input-error:focus {
          box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1);
        }

        .toggle-password {
          position: absolute;
          right: 16px;
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
          padding: 4px;
          transition: transform 0.2s ease;
        }

        .toggle-password:hover {
          transform: scale(1.1);
        }

        .error-message {
          font-size: 12px;
          color: #ef4444;
          margin-top: -4px;
        }

        .terms-label {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 13px;
          color: #374151;
          cursor: pointer;
          margin-top: -8px;
        }

        .checkbox {
          width: 18px;
          height: 18px;
          margin-top: 2px;
          cursor: pointer;
          accent-color: #064e3b;
          flex-shrink: 0;
        }

        .submit-button {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #064e3b 0%, #047857 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 8px;
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(6, 78, 59, 0.3);
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .loading-spinner {
          display: inline-block;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .login-link {
          text-align: center;
          font-size: 14px;
          color: #6b7280;
          padding-top: 24px;
          padding-bottom: 16px;
          border-top: 1px solid #e5e7eb;
          margin-top: 16px;
        }

        .link {
          color: #064e3b;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .link:hover {
          color: #047857;
          text-decoration: underline;
        }

        .back-button {
          width: 100%;
          padding: 12px;
          background: transparent;
          border: none;
          color: #6b7280;
          font-size: 14px;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .back-button:hover {
          color: #064e3b;
        }

        @media (max-width: 768px) {
          .register-card {
            padding: 32px 24px;
          }

          .floating-logo {
            top: 20px;
            left: 20px;
            font-size: 20px;
          }

          .logo-icon {
            font-size: 28px;
          }

          .card-title {
            font-size: 24px;
          }
        }

        @media (max-width: 480px) {
          .register-container {
            padding: 16px;
          }

          .register-card {
            padding: 28px 20px;
          }

          .card-title {
            font-size: 22px;
          }

          .form-input {
            padding: 12px 14px 12px 44px;
          }
        }
      `}</style>
    </div>
  );
}