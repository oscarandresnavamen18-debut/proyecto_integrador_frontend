"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl";
}

export function Modal({ isOpen, onClose, children, title, maxWidth = "md" }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="modal-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="modal-container" role="dialog" aria-modal="true">
        <div className={`modal-content ${maxWidthClasses[maxWidth]}`}>
          {/* Header */}
          {title && (
            <div className="modal-header">
              <h2 className="modal-title">{title}</h2>
              <button
                type="button"
                onClick={onClose}
                className="modal-close-btn"
                aria-label="Cerrar modal"
              >
                <X size={24} />
              </button>
            </div>
          )}

          {/* Body */}
          <div className={title ? "modal-body" : "modal-body-no-header"}>
            {children}
          </div>
        </div>
      </div>

      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          z-index: 9998;
          animation: fadeIn 0.2s ease-out;
        }

        .modal-container {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          animation: fadeIn 0.2s ease-out;
        }

        .modal-content {
          position: relative;
          width: 100%;
          background: white;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          max-height: 90vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 24px 16px;
          border-bottom: 1px solid #e5e7eb;
        }

        .modal-title {
          font-size: 24px;
          font-weight: 800;
          color: #064e3b;
          margin: 0;
        }

        .modal-close-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          background: #f3f4f6;
          color: #6b7280;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          background: #e5e7eb;
          color: #064e3b;
          transform: scale(1.05);
        }

        .modal-body {
          padding: 24px;
          overflow-y: auto;
        }

        .modal-body-no-header {
          padding: 32px;
          overflow-y: auto;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 640px) {
          .modal-container {
            padding: 0;
            align-items: flex-end;
          }

          .modal-content {
            border-radius: 24px 24px 0 0;
            max-height: 95vh;
          }

          .modal-header {
            padding: 20px 20px 12px;
          }

          .modal-title {
            font-size: 20px;
          }

          .modal-body,
          .modal-body-no-header {
            padding: 20px;
          }
        }
      `}</style>
    </>
  );
}
