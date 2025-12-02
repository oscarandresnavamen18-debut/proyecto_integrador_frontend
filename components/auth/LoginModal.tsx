"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Modal } from "@/components/ui/Modal";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
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
      email: "",
      password: "",
    };

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

    if (newErrors.email || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      console.log("Login con:", formData);
      setIsLoading(false);
      onClose();
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="sm">
      <div className="login-modal-content">
        <div className="text-center mb-6">
          <div className="logo-container mb-4">
            <span className="logo-icon">🐄</span>
            <span className="logo-text">Ganacol</span>
          </div>
          <h2 className="modal-title">Bienvenido de nuevo</h2>
          <p className="modal-subtitle">Ingresa tus credenciales para continuar</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="input-label">
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
                className={`input-field ${errors.email ? "input-error" : ""}`}
                placeholder="tucorreo@ejemplo.com"/>
            </div>
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="password" className="input-label">
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
                className={`input-field ${errors.password ? "input-error" : ""}`}
                placeholder="••••••••"/>
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="checkbox" />
              <span className="text-gray-600">Recordarme</span>
            </label>
            <Link href="/forgot-password" className="forgot-link" onClick={onClose}>
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? (
              <span className="loading-spinner">⏳</span>
            ) : (
              "Iniciar Sesión"
            )}
          </button>
        </form>
        <div className="divider">
          <span>o continúa con</span>
        </div>

        <div className="social-buttons">
          <button type="button" className="social-btn google">
            <span className="social-icon">G</span>
            Google
          </button>
          <button type="button" className="social-btn facebook">
            <span className="social-icon">f</span>
            Facebook
          </button>
        </div>
        <div className="register-text">
          ¿No tienes cuenta?{" "}
          <Link href="/register" className="register-link" onClick={onClose}>
            Regístrate aquí
          </Link>
        </div>
      </div>

      <style jsx>{`
        .login-modal-content {
          width: 100%;
        }

        .logo-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 20px;
          font-weight: 700;
          color: #064e3b;
        }

        .logo-icon {
          font-size: 32px;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .modal-title {
          font-size: 26px;
          font-weight: 800;
          color: #064e3b;
          margin-bottom: 8px;
        }

        .modal-subtitle {
          font-size: 14px;
          color: #6b7280;
        }

        .input-label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 6px;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 14px;
          font-size: 18px;
          pointer-events: none;
        }

        .input-field {
          width: 100%;
          padding: 12px 14px 12px 46px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 15px;
          transition: all 0.3s ease;
          outline: none;
        }

        .input-field:focus {
          border-color: #064e3b;
          box-shadow: 0 0 0 4px rgba(6, 78, 59, 0.1);
        }

        .input-field.input-error {
          border-color: #ef4444;
        }

        .input-field.input-error:focus {
          box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1);
        }

        .toggle-password {
          position: absolute;
          right: 14px;
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

        .error-text {
          display: block;
          font-size: 12px;
          color: #ef4444;
          margin-top: 4px;
        }

        .checkbox {
          width: 18px;
          height: 18px;
          cursor: pointer;
          accent-color: #064e3b;
        }

        .forgot-link {
          color: #064e3b;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .forgot-link:hover {
          color: #047857;
          text-decoration: underline;
        }

        .submit-btn {
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
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(6, 78, 59, 0.3);
        }

        .submit-btn:disabled {
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

        .divider {
          display: flex;
          align-items: center;
          text-align: center;
          margin: 24px 0;
          color: #9ca3af;
          font-size: 14px;
        }

        .divider::before,
        .divider::after {
          content: "";
          flex: 1;
          border-bottom: 1px solid #e5e7eb;
        }

        .divider span {
          padding: 0 16px;
        }

        .social-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 20px;
        }

        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          background: white;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .social-btn:hover {
          border-color: #064e3b;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .social-icon {
          font-size: 18px;
          font-weight: 700;
        }

        .google .social-icon {
          color: #ea4335;
        }

        .facebook .social-icon {
          color: #1877f2;
        }

        .register-text {
          text-align: center;
          font-size: 14px;
          color: #6b7280;
        }

        .register-link {
          color: #064e3b;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .register-link:hover {
          color: #047857;
          text-decoration: underline;
        }

        @media (max-width: 640px) {
          .social-buttons {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Modal>
  );
}
